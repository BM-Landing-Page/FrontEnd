"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Loader2, Plus } from "lucide-react"
import { fetchGalleryItems, type GalleryItem, type PaginationInfo } from "@/services/api"

export default function AnimatedGallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollX, setScrollX] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasMore: false,
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const [imageLoadStates, setImageLoadStates] = useState<Map<number, 'loading' | 'loaded' | 'error'>>(new Map())
  const imageCache = useRef<Map<string, HTMLImageElement>>(new Map())
  const preloadQueue = useRef<Set<number>>(new Set())
  const preloadingPromises = useRef<Map<number, Promise<void>>>(new Map())
  
  // Intersection Observer for aggressive preloading
  const observerRef = useRef<IntersectionObserver | null>(null)
  const imageRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  // Initialize intersection observer with more aggressive settings
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.getAttribute('data-item-id') || '0')
            preloadImage(itemId)
          }
        })
      },
      {
        rootMargin: '200px', // Increased from 50px for earlier loading
        threshold: 0.01 // Reduced threshold for earlier triggering
      }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Load initial gallery data - optimized for faster initial load
  useEffect(() => {
    const loadInitialGalleryItems = async () => {
      try {
        setLoading(true)
        setError(null)
        console.log("🔄 Loading initial gallery items...")
        
        // Load more images initially for better UX
        const response = await fetchGalleryItems(1, 10) // Increased from 5 to 10
        console.log("📦 API Response:", response)
        
        if (response.success && response.data) {
          console.log("✅ Gallery items loaded:", response.data)
          setGalleryItems(response.data)
          
          // Immediately start preloading the first few images
          response.data.slice(0, 3).forEach((item, index) => {
            if (item?.id) {
              setTimeout(() => {
                preloadImage(item.id).catch(error => {
                  console.warn(`Failed to preload initial item ${item.id}:`, error)
                })
              }, index * 10) // Minimal delay
            }
          })
          
          if (response.pagination) {
            console.log("📄 Pagination info:", response.pagination)
            setPagination(response.pagination)
          }
        } else {
          console.error("❌ API Error:", response.error)
          setError(response.error || "Failed to load gallery items")
        }
      } catch (err) {
        console.error("💥 Exception:", err)
        setError("An unexpected error occurred")
      } finally {
        setLoading(false)
      }
    }

    loadInitialGalleryItems()
  }, [])

  // Optimized image preloading with concurrent loading and promise caching
  const preloadImage = useCallback((itemId: number) => {
    const item = galleryItems.find(g => g.id === itemId)
    if (!item) return Promise.resolve()

    // Return existing promise if already preloading
    if (preloadingPromises.current.has(itemId)) {
      return preloadingPromises.current.get(itemId)!
    }

    // Skip if already loaded
    if (imageLoadStates.get(itemId) === 'loaded' || imageCache.current.has(item.image_url)) {
      setImageLoadStates(prev => new Map(prev.set(itemId, 'loaded')))
      return Promise.resolve()
    }

    setImageLoadStates(prev => new Map(prev.set(itemId, 'loading')))

    const promise = new Promise<void>((resolve, reject) => {
      const img = new window.Image()
      
      // Optimize image loading with proper sizes and priorities
      img.sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      img.loading = 'eager' // Force eager loading for preloaded images
      img.decoding = 'async' // Enable async decoding
      
      img.onload = () => {
        imageCache.current.set(item.image_url, img)
        setImageLoadStates(prev => new Map(prev.set(itemId, 'loaded')))
        preloadingPromises.current.delete(itemId)
        resolve()
      }
      
      img.onerror = (error) => {
        setImageLoadStates(prev => new Map(prev.set(itemId, 'error')))
        preloadingPromises.current.delete(itemId)
        console.error(`Failed to load image: ${item.image_url}`, error)
        reject(error)
      }

      img.src = item.image_url
    })

    preloadingPromises.current.set(itemId, promise)
    return promise
  }, [galleryItems, imageLoadStates])

  // Aggressive concurrent image loading
  useEffect(() => {
    if (galleryItems.length === 0) return

    const preloadBatch = async () => {
      // Priority 1: Current and adjacent images (immediate, concurrent)
      const immediateItems = [
        galleryItems[currentIndex],
        galleryItems[currentIndex - 1],
        galleryItems[currentIndex + 1]
      ].filter(Boolean)

      // Load these concurrently without delay
      const immediatePromises = immediateItems.map(item => preloadImage(item.id))
      
      try {
        await Promise.all(immediatePromises)
      } catch (error) {
        console.warn('Some immediate images failed to load:', error)
      }

      // Priority 2: Extended range (concurrent batch loading)
      const extendedRange = 3 // Increased range
      const extendedItems = []
      
      for (let i = Math.max(0, currentIndex - extendedRange); 
           i <= Math.min(galleryItems.length - 1, currentIndex + extendedRange); 
           i++) {
        if (i !== currentIndex && i !== currentIndex - 1 && i !== currentIndex + 1) {
          extendedItems.push(galleryItems[i])
        }
      }

      // Load extended range with minimal delay, in batches
      const batchSize = 3
      for (let i = 0; i < extendedItems.length; i += batchSize) {
        const batch = extendedItems.slice(i, i + batchSize)
        setTimeout(() => {
          Promise.allSettled(batch.map(item => preloadImage(item.id)))
        }, 50) // Reduced from 200ms
      }
    }

    preloadBatch()
  }, [currentIndex, galleryItems, preloadImage])

  // Optimized load more function
  const loadMoreImages = useCallback(async () => {
    console.log("🔄 loadMoreImages called")
    
    if (loadingMore || !pagination.hasMore) {
      console.log("⚠️ Load blocked:", { loadingMore, hasMore: pagination.hasMore })
      return
    }

    try {
      setLoadingMore(true)
      setError(null)
      
      const nextPage = pagination.currentPage + 1
      console.log("📄 Loading page:", nextPage)
      
      const response = await fetchGalleryItems(nextPage, 10) // Increased batch size
      console.log("📦 Load more response:", response)
      
      if (response.success && response.data && response.data.length > 0) {
        console.log("✅ New items loaded:", response.data.length)
        
        setGalleryItems((prev) => {
          const newItems = [...prev, ...response.data!]
          console.log("📊 Total items now:", newItems.length)
          
          // Immediately start preloading the first few new images
          response.data!.slice(0, 2).forEach((item, index) => {
            setTimeout(() => preloadImage(item.id), index * 20)
          })
          
          return newItems
        })
        
        if (response.pagination) {
          console.log("📄 Updated pagination:", response.pagination)
          setPagination(response.pagination)
        }
      } else {
        console.warn("No more items to load")
      }
    } catch (err) {
      console.error("💥 Load more error:", err)
      setError("Failed to load more images")
    } finally {
      setLoadingMore(false)
    }
  }, [loadingMore, pagination.hasMore, pagination.currentPage, preloadImage])

  // More aggressive auto-loading
  useEffect(() => {
    if (galleryItems.length > 0 && pagination.hasMore) {
      const threshold = Math.max(1, galleryItems.length - 3) // Increased threshold
      if (currentIndex >= threshold && !loadingMore) {
        loadMoreImages()
      }
    }
  }, [currentIndex, galleryItems.length, pagination.hasMore, loadingMore, loadMoreImages])

  // Optimized scroll handling with requestAnimationFrame
  const scrollToIndex = useCallback((index: number) => {
    if (!containerRef.current || isTransitioning || galleryItems.length === 0) {
      return
    }
    
    const validIndex = Math.max(0, Math.min(index, galleryItems.length - 1))
    setIsTransitioning(true)
    
    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(() => {
      if (containerRef.current) {
        const itemWidth = containerRef.current.clientWidth
        containerRef.current.scrollTo({
          left: validIndex * itemWidth,
          behavior: "smooth",
        })
        setCurrentIndex(validIndex)
      }
      
      // Reduced transition timeout
      setTimeout(() => setIsTransitioning(false), 200) // Reduced from 300ms
    })
  }, [isTransitioning, galleryItems.length])

  const goToPrevious = useCallback(() => {
    if (galleryItems.length === 0) return
    
    // More aggressive loading trigger
    if (currentIndex <= 1 && pagination.hasMore && !loadingMore) {
      loadMoreImages()
    }
    
    const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1
    scrollToIndex(newIndex)
  }, [currentIndex, galleryItems.length, scrollToIndex, pagination.hasMore, loadingMore, loadMoreImages])

  const goToNext = useCallback(() => {
    if (galleryItems.length === 0) return
    
    // Load more aggressively when approaching end
    if (currentIndex >= galleryItems.length - 2 && pagination.hasMore && !loadingMore) {
      loadMoreImages()
    }
    
    const newIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
  }, [currentIndex, galleryItems.length, scrollToIndex, pagination.hasMore, loadingMore, loadMoreImages])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (galleryItems.length === 0 || isTransitioning) return
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        goToPrevious()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToPrevious, goToNext, galleryItems.length, isTransitioning])

  // Optimized scroll handler with reduced debounce
  useEffect(() => {
    let rafId: number
    
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      
      rafId = requestAnimationFrame(() => {
        if (containerRef.current && galleryItems.length > 0) {
          const scrollLeft = containerRef.current.scrollLeft
          setScrollX(scrollLeft)
          
          const itemWidth = containerRef.current.clientWidth
          const newIndex = Math.round(scrollLeft / itemWidth)
          if (newIndex !== currentIndex && newIndex >= 0 && newIndex < galleryItems.length) {
            setCurrentIndex(newIndex)
          }
        }
      })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true })
      return () => {
        container.removeEventListener("scroll", handleScroll)
        if (rafId) cancelAnimationFrame(rafId)
      }
    }
  }, [galleryItems.length, currentIndex])

  // Highly optimized image component
  const OptimizedImage = ({ item, index }: { item: GalleryItem; index: number }) => {
    const loadState = imageLoadStates.get(item.id) || 'loading'
    const isActive = index === currentIndex
    const isNear = Math.abs(index - currentIndex) <= 2
    const shouldRender = Math.abs(index - currentIndex) <= 4 // Increased render range

    useEffect(() => {
      const element = imageRefs.current.get(item.id)
      if (element && observerRef.current) {
        element.setAttribute('data-item-id', item.id.toString())
        observerRef.current.observe(element)
      }
      
      return () => {
        if (element && observerRef.current) {
          observerRef.current.unobserve(element)
        }
      }
    }, [item.id])

    if (!shouldRender) {
      return (
        <div
          ref={(el) => {
            if (el) {
              imageRefs.current.set(item.id, el)
            } else {
              imageRefs.current.delete(item.id)
            }
          }}
          className="w-full h-[400px] bg-gray-50 rounded-2xl flex items-center justify-center"
        >
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
      )
    }

    if (loadState === 'error') {
      return (
        <div className="w-full h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="text-sm text-gray-500">Image unavailable</p>
          </div>
        </div>
      )
    }

    if (loadState === "loading") {
      return (
        <div
          ref={(el) => {
            if (el) {
              imageRefs.current.set(item.id, el)
            } else {
              imageRefs.current.delete(item.id)
            }
          }}
          className="w-full h-[400px] bg-gray-50 rounded-2xl flex items-center justify-center"
        >
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-[#54BAB9] mx-auto mb-2" />
            <p className="text-xs text-gray-500">Loading...</p>
          </div>
        </div>
      )
    }

    return (
      <div
        ref={(el) => {
          if (el) {
            imageRefs.current.set(item.id, el)
          } else {
            imageRefs.current.delete(item.id)
          }
        }}
      >
        <Image
          src={item.image_url}
          alt={item.description || `Gallery image ${index + 1}`}
          width={1200}
          height={900}
          className="w-full h-auto object-cover rounded-2xl max-h-[70vh] transition-all duration-200 group-hover:scale-105"
          priority={isActive || isNear}
          loading={isActive || isNear ? "eager" : "lazy"}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyxxxzCsVIHvzz7/wB5/9k="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          quality={isActive ? 95 : 80}
          unoptimized={false} // Enable Next.js optimization
        />
      </div>
    )
  }

  // Rest of the component remains the same...
  if (loading) {
    return (
      <div className="h-screen bg-gradient-to-br from-white via-[#F7ECDE]/20 to-[#E9DAC1]/30 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#54BAB9] mx-auto mb-4" />
          <h2 className="text-xl font-light text-gray-700 mb-2">Loading Gallery</h2>
          <p className="text-gray-500">Please wait...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-screen bg-gradient-to-br from-white via-[#F7ECDE]/20 to-[#E9DAC1]/30 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-light text-gray-700 mb-3">Unable to Load Gallery</h2>
          <p className="text-gray-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#54BAB9] hover:bg-[#9ED2C6] text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (galleryItems.length === 0) {
    return (
      <div className="h-screen bg-gradient-to-br from-white via-[#F7ECDE]/20 to-[#E9DAC1]/30 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-light text-gray-700 mb-3">No Images Yet</h2>
          <p className="text-gray-500">The gallery is empty. Check back later!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-gradient-to-br from-white via-[#F7ECDE]/20 to-[#E9DAC1]/30 overflow-hidden relative">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-pulse"
            style={{
              width: `${12 + i * 8}px`,
              height: `${12 + i * 8}px`,
              backgroundColor: i % 2 === 0 ? "#54BAB9" : "#9ED2C6",
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-light text-gray-800 tracking-wide">
              GALLERY
            </h1>
            <div className="w-16 h-px bg-[#54BAB9] mt-2"></div>
          </div>
          <div className="text-right text-gray-600">
            <p className="text-sm">{`${currentIndex + 1} of ${Math.max(galleryItems.length, pagination.totalItems)}`}</p>
            <p className="text-xs opacity-60 mt-1">← → keys or arrows</p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        disabled={isTransitioning || galleryItems.length === 0}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={24} className="text-gray-700 hover:text-[#54BAB9] transition-colors" />
      </button>

      <button
        onClick={goToNext}
        disabled={isTransitioning || galleryItems.length === 0}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={24} className="text-gray-700 hover:text-[#54BAB9] transition-colors" />
      </button>

      {/* Load More Button */}
      {pagination.hasMore && currentIndex >= galleryItems.length - 1 && (
        <button
          onClick={loadMoreImages}
          disabled={loadingMore}
          className="absolute right-6 bottom-20 z-20 bg-[#54BAB9]/80 backdrop-blur-sm hover:bg-[#54BAB9]/90 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50"
        >
          {loadingMore ? <Loader2 size={20} className="animate-spin" /> : <Plus size={20} />}
        </button>
      )}

      {/* Horizontal Scrolling Container */}
      <div
        ref={containerRef}
        className="flex h-full overflow-x-auto overflow-y-hidden pt-24 pb-12 scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {galleryItems.map((item, index) => (
          <div key={item.id} className="flex-none w-screen h-full flex items-center justify-center px-12 snap-center">
            <div className="relative max-w-4xl mx-auto">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-4 transition-all duration-200 group-hover:scale-102">
                  <OptimizedImage item={item} index={index} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Loading more indicator */}
        {loadingMore && (
          <div className="flex-none w-screen h-full flex items-center justify-center px-12">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin text-[#54BAB9] mx-auto mb-2" />
              <p className="text-gray-600 text-sm">Loading more...</p>
            </div>
          </div>
        )}
      </div>

      {/* Progress bar */}
      {galleryItems.length > 0 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#54BAB9] to-[#9ED2C6] rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / Math.max(galleryItems.length, pagination.totalItems)) * 100}%` }}
                />
              </div>
              {pagination.hasMore && (
                <span className="text-xs text-gray-500">+{pagination.totalItems - galleryItems.length} more</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
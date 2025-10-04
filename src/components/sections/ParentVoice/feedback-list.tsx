"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import useSWR from "swr"
import { fetchParentFeedback, type ParentFeedbackItem } from "@/services/api"

interface PaginatedResponse {
  data: ParentFeedbackItem[]
  totalItems: number
  totalPages: number
  currentPage: number
  itemsPerPage: number
}

export default function FeedbackList({
  colors,
}: {
  colors: { primary: string; accent: string; surface1: string; surface2: string; bg: string }
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10 // Adjust as needed

  // OPTION 1: If your API already supports pagination, use this:
  // const { data, error, isLoading, mutate } = useSWR(
  //   `/feedback?page=${currentPage}&limit=${itemsPerPage}`,
  //   async () => {
  //     const res = await fetchParentFeedback({ page: currentPage, limit: itemsPerPage })
  //     if (!res.success) throw new Error(res.error || "Failed to fetch")
  //     return res.data as PaginatedResponse
  //   },
  //   { revalidateOnFocus: false },
  // )

  // OPTION 2: If your API returns all items and you want client-side pagination:
  const { data: allData, error, isLoading, mutate } = useSWR(
    "/feedback",
    async () => {
      const res = await fetchParentFeedback()
      if (!res.success) throw new Error(res.error || "Failed to fetch")
      return res.data as ParentFeedbackItem[]
    },
    { revalidateOnFocus: false },
  )

  // Create paginated data from all items
  const data = useMemo((): PaginatedResponse | undefined => {
    if (!allData) return undefined
    
    const totalItems = allData.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedItems = allData.slice(startIndex, endIndex)

    return {
      data: paginatedItems,
      totalItems,
      totalPages,
      currentPage,
      itemsPerPage
    }
  }, [allData, currentPage, itemsPerPage])

  const [selected, setSelected] = useState<ParentFeedbackItem | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  // Sort newest first for a cleaner "Recent" feel
  const items = useMemo(() => {
    if (!data?.data) return []
    return [...data.data].sort((a, b) => {
      const ta = a.created_at ? new Date(a.created_at).getTime() : 0
      const tb = b.created_at ? new Date(b.created_at).getTime() : 0
      return tb - ta
    })
  }, [data])

  // Close modal on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Autofocus the close button when modal opens
  useEffect(() => {
    if (selected && closeBtnRef.current) {
      closeBtnRef.current.focus()
    }
  }, [selected])

  // Helper to make minimalist initials avatar
  function getInitials(name: string) {
    if (!name) return "?"
    const parts = name.trim().split(/\s+/)
    const initials = (parts[0]?.[0] || "") + (parts[1]?.[0] || "")
    return initials.toUpperCase()
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    // Close modal when navigating to prevent confusion
    setSelected(null)
  }

  const totalPages = data?.totalPages || 0
  const totalItems = data?.totalItems || 0

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      const startPage = Math.max(1, currentPage - 2)
      const endPage = Math.min(totalPages, currentPage + 2)

      if (startPage > 1) {
        pages.push(1)
        if (startPage > 2) pages.push('...')
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pages.push('...')
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div className="rounded-2xl border p-4 md:p-6" style={{ borderColor: colors.surface1, backgroundColor: colors.bg }}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold" style={{ color: colors.primary }}>
            Recent Feedback
          </h2>
          {totalItems > 0 && (
            <p className="mt-1 text-xs opacity-75">
              Showing {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}-{Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} items
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => mutate()}
          className="rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: colors.accent }}
        >
          Refresh
        </button>
      </div>

      {isLoading && <p className="mt-4 text-sm">Loading feedback...</p>}
      {error && (
        <p className="mt-4 text-sm" style={{ color: "#b91c1c" }}>
          Failed to load feedback.
        </p>
      )}
      {!isLoading && !error && (!items || items.length === 0) && (
        <p className="mt-6 text-sm">No feedback yet. Be the first to share your thoughts!</p>
      )}

      {/* Minimalist list of "glimpses" — two-line preview, opens modal on click */}
      <ul className="mt-4 grid gap-3 md:gap-4 md:grid-cols-2">
        {items?.map((item) => {
          const key = item.id ?? `${item.parent_name}-${item.student_name}-${item.grade}-${item.created_at}`
          return (
            <li key={key}>
              <button
                type="button"
                onClick={() => setSelected(item)}
                aria-haspopup="dialog"
                aria-controls={`feedback-dialog-${key}`}
                className="w-full rounded-xl border text-left transition-colors focus:outline-none focus:ring-2"
                style={{
                  borderColor: colors.surface1,
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Minimal avatar with initials */}
                      <div
                        className="grid h-8 w-8 place-items-center rounded-full text-xs font-semibold"
                        style={{ backgroundColor: colors.accent, color: colors.primary }}
                        aria-hidden="true"
                      >
                        {getInitials(item.parent_name)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium" style={{ color: colors.primary }}>
                          {item.parent_name}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glimpse: two-line preview */}
                  <p className="mt-3 text-sm line-clamp-2">{item.desc}</p>
                </div>
              </button>
            </li>
          )
        })}
      </ul>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-lg px-3 py-2 text-xs font-medium transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: colors.surface1 }}
            >
              Previous
            </button>
            
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`ellipsis-${index}`} className="px-2 text-xs opacity-50">...</span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page as number)}
                    className="rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                    style={{
                      backgroundColor: currentPage === page ? colors.accent : colors.surface1,
                      color: currentPage === page ? colors.primary : undefined
                    }}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>

            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-lg px-3 py-2 text-xs font-medium transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: colors.surface1 }}
            >
              Next
            </button>
          </div>

          <div className="text-xs opacity-75">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      )}

      {/* Modal popup for full feedback */}
      {selected && (
        <div className="fixed inset-0 z-50" id={`feedback-dialog-${selected.id ?? "modal"}`}>
          {/* Overlay: subtle surface tint for a calm feel */}
          <div
            className="absolute inset-0 opacity-60"
            style={{ backgroundColor: colors.surface2 }}
            aria-hidden="true"
            onClick={() => setSelected(null)}
          />
          {/* Centered dialog */}
          <div className="absolute inset-0 flex items-end md:items-center justify-center p-4">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="feedback-dialog-title"
              className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-2xl border bg-white shadow-lg max-h-[85vh] overflow-hidden flex flex-col"
              style={{ borderColor: colors.surface1 }}
            >
              <div className="p-4 md:p-5 border-b" style={{ borderColor: colors.surface1 }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="grid h-9 w-9 place-items-center rounded-full text-xs font-semibold"
                      style={{ backgroundColor: colors.accent, color: colors.primary }}
                      aria-hidden="true"
                    >
                      {getInitials(selected.parent_name)}
                    </div>
                    <div className="min-w-0">
                      <h3
                        id="feedback-dialog-title"
                        className="text-base font-semibold text-pretty"
                        style={{ color: colors.primary }}
                      >
                        {selected.parent_name}
                      </h3>
                    </div>
                  </div>
                  <button
                    ref={closeBtnRef}
                    type="button"
                    onClick={() => setSelected(null)}
                    className="rounded-full px-3 py-1 text-xs font-medium focus:outline-none focus:ring-2"
                    style={{ backgroundColor: colors.accent }}
                    aria-label="Close full feedback"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="p-4 md:p-5 overflow-y-auto">
                <p className="text-sm leading-relaxed text-pretty">{selected.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
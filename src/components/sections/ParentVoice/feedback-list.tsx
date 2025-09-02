"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import useSWR from "swr"
import { fetchParentFeedback, type ParentFeedbackItem } from "@/services/api"

export default function FeedbackList({
  colors,
}: {
  colors: { primary: string; accent: string; surface1: string; surface2: string; bg: string }
}) {
  const { data, error, isLoading, mutate } = useSWR(
    "/feedback",
    async () => {
      const res = await fetchParentFeedback()
      if (!res.success) throw new Error(res.error || "Failed to fetch")
      return res.data as ParentFeedbackItem[]
    },
    { revalidateOnFocus: false },
  )

  const [selected, setSelected] = useState<ParentFeedbackItem | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  // Sort newest first for a cleaner "Recent" feel
  const items = useMemo(() => {
    if (!data) return []
    return [...data].sort((a, b) => {
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

  return (
    <div className="rounded-2xl border p-4 md:p-6" style={{ borderColor: colors.surface1, backgroundColor: colors.bg }}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold" style={{ color: colors.primary }}>
          Recent Feedback
        </h2>
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
          const date = item.created_at ? new Date(item.created_at) : null
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
                        <div className="mt-0.5 flex items-center gap-2 text-xs opacity-75">
                          <span className="truncate">Student: {item.student_name}</span>
                          <span aria-hidden="true">•</span>
                          {date ? <time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time> : null}
                        </div>
                      </div>
                    </div>

                    <span
                      className="shrink-0 rounded-full px-2 py-0.5 text-xs"
                      style={{ backgroundColor: colors.surface2 }}
                    >
                      Grade {item.grade}
                    </span>
                  </div>

                  {/* Glimpse: two-line preview */}
                  <p className="mt-3 text-sm line-clamp-2">{item.desc}</p>
                </div>
              </button>
            </li>
          )
        })}
      </ul>

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
                      <p className="mt-0.5 text-xs opacity-75">
                        Student: {selected.student_name} • Grade {selected.grade}
                      </p>
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
                {selected.created_at ? (
                  <div className="mt-3 text-xs opacity-70">{new Date(selected.created_at).toLocaleString()}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

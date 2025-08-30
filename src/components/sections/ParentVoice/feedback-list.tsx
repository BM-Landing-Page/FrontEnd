"use client"

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

      {!isLoading && !error && (!data || data.length === 0) && (
        <p className="mt-6 text-sm">No feedback yet. Be the first to share your thoughts!</p>
      )}

      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        {data?.map((item) => (
          <li
            key={item.id ?? `${item.parent_name}-${item.student_name}-${item.grade}-${item.created_at}`}
            className="rounded-xl border p-4"
            style={{ borderColor: colors.surface1, backgroundColor: "#FFFFFF" }}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm font-medium" style={{ color: colors.primary }}>
                {item.parent_name}
              </div>
              <div className="text-xs rounded-full px-2 py-0.5" style={{ backgroundColor: colors.accent }}>
                Grade {item.grade}
              </div>
            </div>
            <div className="mt-1 text-xs opacity-80">Student: {item.student_name}</div>
            <p className="mt-3 text-sm leading-relaxed">{item.desc}</p>
            {item.created_at && (
              <div className="mt-3 text-xs opacity-70">{new Date(item.created_at).toLocaleString()}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import { sendParentFeedbackEmail } from "@/services/api"

export default function FeedbackForm({
  colors,
}: {
  colors: { primary: string; accent: string; surface1: string; surface2: string; bg: string }
}) {
  const [parentName, setParentName] = useState("")
  const [studentName, setStudentName] = useState("")
  const [grade, setGrade] = useState("")
  const [desc, setDesc] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus(null)
    setLoading(true)
    try {
      const res = await sendParentFeedbackEmail({
        parentName: parentName.trim(),
        studentName: studentName.trim(),
        grade: grade.trim(),
        description: desc.trim(),
      })
      if (res.success) {
        setStatus({ type: "success", message: "Feedback sent successfully." })
        setParentName("")
        setStudentName("")
        setGrade("")
        setDesc("")
      } else {
        setStatus({ type: "error", message: res.error || "Failed to send feedback." })
      }
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Unexpected error." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border p-4 md:p-6"
      style={{ borderColor: colors.surface1, backgroundColor: "#FFFFFF" }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="parentName" className="text-sm font-medium">
            Parent Name
          </label>
          <input
            id="parentName"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            required
            placeholder="e.g., Priya Sharma"
            className="h-10 rounded-lg border px-3"
            style={{ borderColor: colors.surface1 }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="studentName" className="text-sm font-medium">
            Student Name
          </label>
          <input
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
            placeholder="e.g., Aarav Sharma"
            className="h-10 rounded-lg border px-3"
            style={{ borderColor: colors.surface1 }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="grade" className="text-sm font-medium">
            Grade
          </label>
          <input
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
            placeholder="e.g., 5"
            className="h-10 rounded-lg border px-3"
            style={{ borderColor: colors.surface1 }}
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="desc" className="text-sm font-medium">
            Feedback
          </label>
          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            rows={6}
            placeholder="Share your thoughts..."
            className="rounded-lg border p-3 leading-relaxed"
            style={{ borderColor: colors.surface1 }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-full px-5 py-2 text-sm font-medium"
          style={{ backgroundColor: colors.primary, color: "#FFFFFF", opacity: loading ? 0.7 : 1 }}
        >
          {loading ? "Sending..." : "Send Feedback"}
        </button>

        {status && (
          <span className="text-sm" style={{ color: status.type === "success" ? colors.primary : "#b91c1c" }}>
            {status.message}
          </span>
        )}
      </div>
    </form>
  )
}

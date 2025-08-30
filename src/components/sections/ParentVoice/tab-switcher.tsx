"use client"

type Tab = "submit" | "view"

export default function TabSwitcher({
  active,
  onChange,
  colors,
}: {
  active: Tab
  onChange: (t: Tab) => void
  colors: {
    primary: string
    accent: string
    surface1: string
    surface2: string
    bg: string
  }
}) {
  return (
    <div className="w-full">
      <div
        className="flex items-center p-1 rounded-full border"
        style={{ borderColor: colors.surface1, backgroundColor: "#FFFFFF" }}
        role="tablist"
        aria-label="Parents Voice Tabs"
      >
        <button
          type="button"
          role="tab"
          aria-selected={active === "submit"}
          onClick={() => onChange("submit")}
          className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
          style={{
            backgroundColor: active === "submit" ? colors.primary : "transparent",
            color: active === "submit" ? "#FFFFFF" : "inherit",
          }}
        >
          Submit Feedback
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={active === "view"}
          onClick={() => onChange("view")}
          className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
          style={{
            backgroundColor: active === "view" ? colors.primary : "transparent",
            color: active === "view" ? "#FFFFFF" : "inherit",
          }}
        >
          View Feedback
        </button>
      </div>
    </div>
  )
}

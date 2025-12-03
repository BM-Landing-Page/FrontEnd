"use client"
import { useEffect, useState } from "react"
import { fetchAllEvents, type CalendarEvent } from "@/services/api"

interface ProcessedEvent extends CalendarEvent {
  fullDate: Date
  date: string
  day: string
  month: string
  year: number
}

interface GroupedCalendarEvent extends ProcessedEvent {
  dateRange?: string // added for displaying date ranges
  isRangeStart?: boolean
  isRangeEnd?: boolean
}

const monthOrder = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function parseEventDate(event_date: string): {
  date: string
  day: string
  month: string
  year: number
  fullDate: Date
} {
  // Parse ISO date format (YYYY-MM-DD)
  const dateObj = new Date(event_date)
  const year = dateObj.getFullYear()
  const month = dateObj.toLocaleString("en-US", { month: "long" })
  const day = dateObj.toLocaleString("en-US", { weekday: "long" })
  const date = dateObj.toLocaleString("en-US", { day: "2-digit" })
  return {
    date,
    day,
    month,
    year,
    fullDate: dateObj,
  }
}

function mergeEventsWithDateRanges(processedEvents: ProcessedEvent[]): GroupedCalendarEvent[] {
  const eventMap = new Map<string, ProcessedEvent[]>()

  // Group events by name
  processedEvents.forEach((event) => {
    const key = event.event_name
    if (!eventMap.has(key)) {
      eventMap.set(key, [])
    }
    eventMap.get(key)!.push(event)
  })

  const mergedEvents: GroupedCalendarEvent[] = []
  const processedIds = new Set<string>()

  // Sort all events by date for processing
  const sortedEvents = [...processedEvents].sort((a, b) => a.fullDate.getTime() - b.fullDate.getTime())

  sortedEvents.forEach((event) => {
    const eventId = `${event.event_name}-${event.date}`
    if (processedIds.has(eventId)) return

    const sameNameEvents = eventMap.get(event.event_name) || []

    if (sameNameEvents.length > 1) {
      // Find consecutive events with the same name
      const sortedSameName = [...sameNameEvents].sort((a, b) => a.fullDate.getTime() - b.fullDate.getTime())

      // Check if this event is part of a series
      const currentIndex = sortedSameName.findIndex((e) => e.date === event.date)
      const nextEvent = currentIndex < sortedSameName.length - 1 ? sortedSameName[currentIndex + 1] : null

      if (nextEvent) {
        // Create a date range entry
        const endDate = nextEvent.date
        const { day: endDay } = nextEvent

        const rangeEvent: GroupedCalendarEvent = {
          ...event,
          dateRange: `${event.date} - ${endDate}`,
          isRangeStart: true,
        }

        mergedEvents.push(rangeEvent)

        // Mark all events in this range as processed
        for (let i = currentIndex; i <= currentIndex + 1; i++) {
          const processedEventId = `${sortedSameName[i].event_name}-${sortedSameName[i].date}`
          processedIds.add(processedEventId)
        }
      } else {
        // Single event, add as is
        mergedEvents.push(event)
        processedIds.add(eventId)
      }
    } else {
      // Single event with this name
      mergedEvents.push(event)
      processedIds.add(eventId)
    }
  })

  return mergedEvents
}

export default function CalendarPage() {
  const [events, setEvents] = useState<ProcessedEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [groupedEvents, setGroupedEvents] = useState<Record<string, GroupedCalendarEvent[]>>({})
  const [sortedMonthKeys, setSortedMonthKeys] = useState<string[]>([])

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true)
        const data = await fetchAllEvents()
        // Process events with date information for display
        const processedEvents: ProcessedEvent[] = data.map((event) => {
          const { date, day, month, year, fullDate } = parseEventDate(event.event_date)
          return {
            ...event,
            date,
            day,
            month,
            year,
            fullDate,
          }
        })

        const mergedEvents = mergeEventsWithDateRanges(processedEvents)

        setEvents(processedEvents)

        // Group events by month and year
        const grouped: Record<string, GroupedCalendarEvent[]> = {}
        mergedEvents.forEach((event) => {
          const key = `${event.year}-${event.month}`
          if (!grouped[key]) {
            grouped[key] = []
          }
          grouped[key].push(event)
        })

        // Sort events within each month group by date
        Object.keys(grouped).forEach((key) => {
          grouped[key].sort((a, b) => a.fullDate.getTime() - b.fullDate.getTime())
        })

        // Sort the month keys chronologically
        const sorted = Object.keys(grouped).sort((a, b) => {
          const [yearA, monthNameA] = a.split("-")
          const [yearB, monthNameB] = b.split("-")
          if (Number.parseInt(yearA) !== Number.parseInt(yearB)) {
            return Number.parseInt(yearA) - Number.parseInt(yearB)
          }
          return monthOrder.indexOf(monthNameA) - monthOrder.indexOf(monthNameB)
        })

        setGroupedEvents(grouped)
        setSortedMonthKeys(sorted)
        setError(null)
      } catch (err) {
        console.error("Failed to load calendar events:", err)
        setError(err instanceof Error ? err.message : "Failed to load calendar events")
      } finally {
        setLoading(false)
      }
    }
    loadEvents()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <img src="/images/calendar.jpg" alt="School Calendar" className="w-full h-full object-cover" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#54BAB9]/80 to-[#9ED2C6]/60"></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text--black">
            <h1 className="text-6xl font-bold mb-4">School Calender </h1>
            <p className="text-xl max-w-2xl"> Subject to change as per government policies and cambridge guidelines.</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="max-w-4xl mx-auto py-12 px-4 md:px-8 lg:px-0">
        {loading && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Loading events...</p>
          </div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800">
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}
        {!loading && events.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No events found.</p>
          </div>
        )}
        {!loading && sortedMonthKeys.length > 0 && (
          <div className="relative pl-4 md:pl-8 border-l-4 border-[#E9DAC1]">
            {sortedMonthKeys.map((key) => {
              const [year, monthName] = key.split("-")
              const eventsInMonth = groupedEvents[key]
              return (
                <section key={key} className="mb-16">
                  <div className="relative -left-4 md:-left-8 mb-8">
                    <h2 className="inline-block bg-[#54BAB9] text-white text-2xl md:text-3xl font-bold py-2 px-6 rounded-r-full shadow-md">
                      {monthName} {year}
                    </h2>
                  </div>
                  <div className="space-y-8">
                    {eventsInMonth.map((event, index) => (
                      <div key={`${key}-${index}`} className="relative flex items-start group">
                        {/* Timeline dot */}
                        <div className="absolute -left-4 md:-left-8 top-0 mt-2 w-4 h-4 bg-[#54BAB9] rounded-full border-2 border-white z-10" />
                        <div className="flex-1 ml-4 md:ml-8 p-4 bg-[#F7ECDE] border-2 border-[#E9DAC1] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <div className="text-xl font-bold text-[#54BAB9] flex-shrink-0">
                              {event.dateRange || event.date}
                              <span className="text-[#9ED2C6] text-base font-medium ml-2">
                                {event.dateRange ? "Event" : event.day}
                              </span>
                            </div>
                          </div>
                          <div className="text-lg font-semibold text-gray-800 mt-2 sm:mt-0">{event.event_name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}

interface SchoolEvent {
  date: string
  day: string
  description: string
  month: string
  year: number
  fullDate: Date // For sorting
}

const eventsData: Omit<SchoolEvent, "fullDate">[] = [
  { date: "09-Jun", day: "Monday", description: "School reopens for Gr 8 to Gr 12", month: "June", year: 2025 },
  {
    date: "14-Jun",
    day: "Saturday",
    description: "Uniform & Book Distribution - PP1 to Gr 7",
    month: "June",
    year: 2025,
  },
  { date: "16-Jun", day: "Monday", description: "School reopens for PS to Gr 7", month: "June", year: 2025 },
  {
    date: "05-Jul",
    day: "Saturday",
    description: "Parent Orientation 2025 - 'Understanding Early Childhood and brain development'",
    month: "July",
    year: 2025,
  },
  { date: "06-Jul", day: "Sunday", description: "Muharram", month: "July", year: 2025 },
  {
    date: "19-Jul",
    day: "Saturday",
    description:
      "Parent Orientation 2025 - PP1, PP2, Gr 1, 4, 5, 6, 7 - 'Through the Lens of Your Child' Gr 8 - 'Future Readiness'",
    month: "July",
    year: 2025,
  },
  {
    date: "02-Aug",
    day: "Saturday",
    description: "Parent Orientation 2025 - Grades 2, 3 - 'Through the Lens of Your Child'",
    month: "August",
    year: 2025,
  },
  { date: "08-Aug", day: "Friday", description: "Varalakshmi Viratham", month: "August", year: 2025 },
  { date: "15-Aug", day: "Friday", description: "Independence Day", month: "August", year: 2025 },
  { date: "16-Aug", day: "Saturday", description: "Krishna Jeyanthi", month: "August", year: 2025 },
  { date: "23-Aug", day: "Saturday", description: "Project day - Preschool to Grade 7", month: "August", year: 2025 },
  { date: "27-Aug", day: "Wednesday", description: "Vinayagar Chathurthi", month: "August", year: 2025 },
  { date: "Sep 3 - 11", day: "Wed - Sat", description: "I Term Examination", month: "September", year: 2025 },
  { date: "05-Sep", day: "Friday", description: "Miladinabi / Onam", month: "September", year: 2025 },
  {
    date: "11-Sep",
    day: "Thursday",
    description: "Grade 8 Parent Orientation - 'IGCSE'",
    month: "September",
    year: 2025,
  },
  { date: "17-Sep", day: "Wednesday", description: "I Term - Last Working Day", month: "September", year: 2025 },
  { date: "Sep 18 - 20", day: "Thurs - Sat", description: "Parent Teacher Meet", month: "September", year: 2025 },
  { date: "Sep 18 - Oct 2", day: "Thurs - Wed", description: "I Term Vacation", month: "September", year: 2025 }, // Assuming 2025, Sep 18 is Thurs, Oct 2 is Wed
  { date: "01-Oct", day: "Wednesday", description: "Ayutha Pooja", month: "October", year: 2025 },
  { date: "02-Oct", day: "Thursday", description: "Gandhi Jayanthi & Vijaya Dasami", month: "October", year: 2025 },
  { date: "03-Oct", day: "Friday", description: "II Term - School Re-opens", month: "October", year: 2025 },
  {
    date: "04-Oct",
    day: "Saturday",
    description: "Parent Orientation 2025 - Grades 9, 10 - 'Future Readiness'",
    month: "October",
    year: 2025,
  },
  { date: "Oct 20 - 21", day: "Mon - Tue", description: "Diwali", month: "October", year: 2025 },
  { date: "20-Dec", day: "Saturday", description: "Grade 10 Orientation", month: "December", year: 2025 },
  { date: "Dec 23 - Jan 1", day: "Tues - Thurs", description: "II Term Vacation", month: "December", year: 2025 },
  { date: "25-Dec", day: "Thursday", description: "Christmas", month: "December", year: 2025 },
  { date: "01-Jan", day: "Thursday", description: "New Year", month: "January", year: 2026 },
  { date: "02-Jan", day: "Friday", description: "III Term - School Re-opens", month: "January", year: 2026 },
  { date: "10-Jan", day: "Saturday", description: "Sports Day - Gr 4 to Gr 11", month: "January", year: 2026 },
  { date: "Jan 13 - 16", day: "Tue - Fri", description: "Pongal Holidays", month: "January", year: 2026 },
  { date: "24-Jan", day: "Saturday", description: "READATHON - Gr PP1 to Gr 1", month: "January", year: 2026 },
  { date: "26-Jan", day: "Monday", description: "Republic Day", month: "January", year: 2026 },
  { date: "30-Jan", day: "Saturday", description: "Sports Day - PS to Gr 3", month: "January", year: 2026 },
  { date: "21-Feb", day: "Saturday", description: "Grandparents Day", month: "February", year: 2026 },
  { date: "20-Mar", day: "Friday", description: "Ugadhi", month: "March", year: 2026 },
  { date: "21-Mar", day: "Saturday", description: "II Project Day - PS to Gr 7", month: "March", year: 2026 },
  { date: "31-Mar", day: "Tuesday", description: "Mahavir Jayanthi", month: "March", year: 2026 },
  { date: "Apr 1 - 10", day: "Wed - Fri", description: "III TERM EXAMS - Gr 5 - 9", month: "April", year: 2026 },
  { date: "03-Apr", day: "Friday", description: "Good Friday", month: "April", year: 2026 },
  { date: "14-Apr", day: "Tuesday", description: "Tamil New Year", month: "April", year: 2026 },
  { date: "17-Apr", day: "Friday", description: "Last Working Day - PS to Gr 7", month: "April", year: 2026 },
  { date: "22-Apr", day: "Wednesday", description: "Last Working Day - Gr 8 to 11", month: "April", year: 2026 },
  {
    date: "Apr 23 - 27",
    day: "Thur - Mon",
    description: "Parent Teacher Meet - PS to Gr 11",
    month: "April",
    year: 2026,
  },
  { date: "08-Jun", day: "Monday", description: "School Re-opens for Gr 8 to 12", month: "June", year: 2026 },
  { date: "15-Jun", day: "Monday", description: "School Re-opens for PS to Gr 7", month: "June", year: 2026 },
]

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

function parseDateForSorting(dateStr: string, monthName: string, year: number): Date {
  const monthMap: { [key: string]: number } = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4, // This is the correct and only entry for May
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  }

  let day = 1
  // Try to extract the day number from the date string
  const dayMatch = dateStr.match(/^(\d+)/) // Matches "09" from "09-Jun"
  if (dayMatch) {
    day = Number.parseInt(dayMatch[1])
  } else {
    const monthDayMatch = dateStr.match(/([A-Za-z]+)\s+(\d+)/) // Matches "Sep 3" from "Sep 3 - 11"
    if (monthDayMatch && monthMap[monthDayMatch[1]] !== undefined) {
      day = Number.parseInt(monthDayMatch[2])
    }
  }

  const monthIndex = monthMap[monthName]
  return new Date(year, monthIndex, day)
}

const processedEvents: SchoolEvent[] = eventsData.map((event) => ({
  ...event,
  fullDate: parseDateForSorting(event.date, event.month, event.year),
}))

// Group events by month and year
const groupedEvents: Record<string, SchoolEvent[]> = {}
processedEvents.forEach((event) => {
  const key = `${event.year}-${event.month}`
  if (!groupedEvents[key]) {
    groupedEvents[key] = []
  }
  groupedEvents[key].push(event)
})

// Sort events within each month group and then sort the month keys
const sortedMonthKeys = Object.keys(groupedEvents)
  .sort((a, b) => {
    const [yearA, monthNameA] = a.split("-")
    const [yearB, monthNameB] = b.split("-")

    if (Number.parseInt(yearA) !== Number.parseInt(yearB)) {
      return Number.parseInt(yearA) - Number.parseInt(yearB)
    }
    return monthOrder.indexOf(monthNameA) - monthOrder.indexOf(monthNameB)
  })
  .map((key) => {
    groupedEvents[key].sort((a, b) => a.fullDate.getTime() - b.fullDate.getTime())
    return key
  })

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
        <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          School Event Calendar
        </h1>
      </div>

      {/* Main Content Section */}
      <main className="max-w-4xl mx-auto py-12 px-4 md:px-8 lg:px-0">
        <div className="relative pl-4 md:pl-8 border-l-4 border-[#E9DAC1]">
          {" "}
          {/* Vertical timeline line */}
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
                    <div key={index} className="relative flex items-start group">
                      {/* Timeline dot */}
                      <div className="absolute -left-4 md:-left-8 top-0 mt-2 w-4 h-4 bg-[#54BAB9] rounded-full border-2 border-white z-10" />

                      <div className="flex-1 ml-4 md:ml-8 p-4 bg-[#F7ECDE] border-2 border-[#E9DAC1] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <div className="text-xl font-bold text-[#54BAB9] flex-shrink-0">
                            {event.date}
                            <span className="text-[#9ED2C6] text-base font-medium ml-2">{event.day}</span>
                          </div>
                        </div>
                        <p className="text-gray-800 leading-relaxed text-base">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>
    </div>
  )
}

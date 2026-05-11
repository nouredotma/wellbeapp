"use client"

import { addDays, format, isBefore, startOfDay, startOfWeek } from "date-fns"
import fr from "date-fns/locale/fr"
import { CalendarIcon, ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { useState, useEffect } from "react"

export const Calendar = ({ schedules, onDateSelect, onScheduleSelect }) => {
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [weekOffset, setWeekOffset] = useState(0)
  const [selectedDay, setSelectedDay] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const days = Array.from({ length: 7 }, (_, i) => {
    const currentDay = addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), i + weekOffset * 7)
    return {
      shortName: format(currentDay, "EEE", { locale: fr }),
      date: format(currentDay, "dd"),
      fullDate: startOfDay(currentDay),
      weekDay: format(currentDay, "EEEE"),
      isToday: format(currentDay, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd"),
      month: format(currentDay, "MMM", { locale: fr }),
      dayIndex: i,
    }
  })

  // Initialize selectedDay to today's index or 0 if today is not in view
  useEffect(() => {
    const todayIndex = days.findIndex((day) => day.isToday)
    setSelectedDay(todayIndex !== -1 ? todayIndex : 0)
  }, [weekOffset])

  // Handle day selection (only affects mobile view)
  const handleDaySelect = (dayIndex) => {
    setSelectedDay(dayIndex)
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-[#002366] p-3 sm:p-4 text-white">
        <div className="flex items-center gap-2 mb-3">
          <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          <h2 className="text-base sm:text-lg font-bold">Sélectionnez un créneau</h2>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setWeekOffset(weekOffset - 1)}
            disabled={weekOffset <= 0}
            className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors disabled:opacity-40 disabled:hover:bg-transparent"
            aria-label="Semaine précédente"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <div className="text-center">
            <span className="text-sm sm:text-base font-medium px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/20">
              {format(days[0].fullDate, "dd MMM", { locale: fr })} -{" "}
              {format(days[6].fullDate, "dd MMM", { locale: fr })}
            </span>
          </div>

          <button
            onClick={() => setWeekOffset(weekOffset + 1)}
            className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Semaine suivante"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        {/* Days header - Scrollable on mobile, grid on desktop */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-7 gap-2 mb-4 pb-2 sm:pb-0 scrollbar-hide">
          {days.map((day, index) => (
            <div
              key={index}
              onClick={() => handleDaySelect(index)}
              className={`
                flex-shrink-0 sm:flex-shrink text-center py-2 px-3 sm:px-1 rounded-lg cursor-pointer
                ${
                  day.isToday
                    ? "bg-[#002366] text-white"
                    : (isMobile && selectedDay === index)
                      ? "bg-blue-100"
                      : "bg-gray-50"
                }
                ${isMobile && selectedDay === index && !day.isToday ? "border border-blue-300" : ""}
              `}
            >
              <div className="font-medium text-xs uppercase">{day.shortName}</div>
              <div
                className={`text-lg ${day.isToday || (isMobile && selectedDay === index) ? "font-bold" : "font-medium"}`}
              >
                {day.date}
              </div>
              <div className="text-xs opacity-80">{day.month}</div>
            </div>
          ))}
        </div>

        {/* Mobile View: Only show selected day */}
        {isMobile && (
          <div className="mt-4">
            {days.map((day, dayIndex) => {
              if (dayIndex !== selectedDay) return null

              const availableSlots = schedules
                .filter((schedule) => schedule.day_of_week === day.weekDay)
                .sort((a, b) => a.start_time.localeCompare(b.start_time))
                .map((schedule) => {
                  const [hours, minutes] = schedule.start_time.split(":").map(Number)
                  const fullDateTime = new Date(day.fullDate)
                  fullDateTime.setHours(hours)
                  fullDateTime.setMinutes(minutes)

                  return {
                    time: schedule.start_time.substring(0, 5),
                    scheduleUUID: schedule.schedule_uuid,
                    fullDateTime,
                  }
                })

              return (
                <div key={dayIndex} className="flex flex-col gap-1">
                  {/* Day indicator for mobile */}
                  <div className="text-center mb-2 font-medium text-[#002366]">
                    {day.shortName} {day.date} {day.month}
                  </div>

                  {availableSlots.length > 0 ? (
                    availableSlots.map((slot, slotIndex) => {
                      const isPast = isBefore(slot.fullDateTime, new Date())
                      const isSelected = selectedSlot === `${day.date}-${slot.time}`

                      return (
                        <button
                          key={slotIndex}
                          onClick={() => {
                            if (!isPast) {
                              setSelectedSlot(`${day.date}-${slot.time}`)
                              onDateSelect(slot.fullDateTime)
                              onScheduleSelect(slot.scheduleUUID)
                            }
                          }}
                          disabled={isPast}
                          className={`
                            relative px-1 py-3 rounded-lg transition-all flex justify-center items-center
                            ${
                              isPast
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : isSelected
                                  ? "bg-[#002366] text-white"
                                  : "bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100"
                            }
                          `}
                        >
                          <div className="flex items-center gap-1">
                            <Clock className={`h-3 w-3 ${isSelected ? "text-white" : "text-blue-500"}`} />
                            <span className="font-medium">{slot.time}</span>
                          </div>
                        </button>
                      )
                    })
                  ) : (
                    <div className="text-center py-4 px-1 bg-gray-50 rounded-lg text-gray-400 text-xs border border-dashed border-gray-200">
                      Aucun créneau
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Desktop View: Show all days in grid */}
        {!isMobile && (
          <div className="grid grid-cols-7 gap-2 mt-4">
            {days.map((day, dayIndex) => {
              const availableSlots = schedules
                .filter((schedule) => schedule.day_of_week === day.weekDay)
                .sort((a, b) => a.start_time.localeCompare(b.start_time))
                .map((schedule) => {
                  const [hours, minutes] = schedule.start_time.split(":").map(Number)
                  const fullDateTime = new Date(day.fullDate)
                  fullDateTime.setHours(hours)
                  fullDateTime.setMinutes(minutes)

                  return {
                    time: schedule.start_time.substring(0, 5),
                    scheduleUUID: schedule.schedule_uuid,
                    fullDateTime,
                  }
                })

              return (
                <div key={dayIndex} className="flex flex-col gap-1">
                  {availableSlots.length > 0 ? (
                    availableSlots.map((slot, slotIndex) => {
                      const isPast = isBefore(slot.fullDateTime, new Date())
                      const isSelected = selectedSlot === `${day.date}-${slot.time}`

                      return (
                        <button
                          key={slotIndex}
                          onClick={() => {
                            if (!isPast) {
                              setSelectedSlot(`${day.date}-${slot.time}`)
                              onDateSelect(slot.fullDateTime)
                              onScheduleSelect(slot.scheduleUUID)
                            }
                          }}
                          disabled={isPast}
                          className={`
                            relative px-1 py-2 rounded-lg transition-all flex justify-center items-center
                            ${
                              isPast
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : isSelected
                                  ? "bg-[#002366] text-white"
                                  : "bg-blue-50 hover:bg-blue-100 text-gray-800 border border-blue-100"
                            }
                          `}
                        >
                          <div className="flex items-center gap-1">
                            <Clock className={`h-3 w-3 ${isSelected ? "text-white" : "text-blue-500"}`} />
                            <span className="font-medium">{slot.time}</span>
                          </div>
                        </button>
                      )
                    })
                  ) : (
                    <div className="text-center py-3 px-1 bg-gray-50 rounded-lg text-gray-400 text-xs border border-dashed border-gray-200">
                      Aucun créneau
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}


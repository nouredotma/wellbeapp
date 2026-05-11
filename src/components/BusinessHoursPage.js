"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    createSchedule,
    deleteSchedule,
    fetchEstablishmentSchedules,
    updateSchedule,
} from "../services/scheduleService"; // Import API functions
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Input from "./ui/input";
import { Label } from "./ui/label";
import Switch from "./ui/switch";

const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

export default function BusinessHoursPage() {
    const { id: establishmentId } = useParams();
    const [businessHours, setBusinessHours] = useState([]);
    const [onlineBooking, setOnlineBooking] = useState(true);

    useEffect(() => {
        const loadSchedules = async () => {
            try {
                const schedules = await fetchEstablishmentSchedules(establishmentId);

                // Format schedules into businessHours structure
                const formattedHours = daysOfWeek.map((day) => {
                    const scheduleForDay = schedules.filter(
                        (s) => s.day_of_week.toLowerCase() === day.toLowerCase()
                    );

                    return {
                        day,
                        openingHours: scheduleForDay.map((s) => ({
                            start: s.start_time,
                            end: s.end_time,
                            scheduleId: s.schedule_uuid,
                        })),
                        isOpen: scheduleForDay.length > 0,
                    };
                });

                setBusinessHours(formattedHours);
            } catch (error) {
                console.error("❌ Failed to fetch schedules:", error);
            }
        };

        loadSchedules();
    }, [establishmentId]);

    const handleToggleDay = async (day, newCheckedState) => {
        setBusinessHours((prev) =>
            prev.map((d) =>
                d.day === day ? { ...d, isOpen: newCheckedState } : d
            )
        );

        if (!newCheckedState) {
            // If closing the day, delete schedules (not implemented here)
            console.log(`❌ Close ${day}, should delete schedules`);
        }
    };

    const handleAddOpeningHours = async (day) => {
        try {
            const newSchedule = {
                establishment_uuid: establishmentId,
                user_uuid: null, // If needed
                day_of_week: day,
                start_time: "09:00",
                end_time: "17:00",
            };

            const createdSchedule = await createSchedule(newSchedule);

            setBusinessHours((prev) =>
                prev.map((d) =>
                    d.day === day
                        ? {
                              ...d,
                              openingHours: [
                                  ...d.openingHours,
                                  {
                                      start: createdSchedule.start_time,
                                      end: createdSchedule.end_time,
                                      scheduleId: createdSchedule.schedule_uuid,
                                  },
                              ],
                          }
                        : d
                )
            );
        } catch (error) {
            console.error("❌ Failed to create schedule:", error);
        }
    };

    const handleOpeningHoursChange = async (day, index, field, value) => {
        setBusinessHours((prev) =>
            prev.map((d) =>
                d.day === day
                    ? {
                          ...d,
                          openingHours: d.openingHours.map((hours, i) =>
                              i === index ? { ...hours, [field]: value } : hours
                          ),
                      }
                    : d
            )
        );

        try {
            const updatedSchedule = {
                start_time:
                    field === "start"
                        ? value
                        : businessHours.find((d) => d.day === day)
                              .openingHours[index].start,
                end_time:
                    field === "end"
                        ? value
                        : businessHours.find((d) => d.day === day)
                              .openingHours[index].end,
            };

            await updateSchedule(
                businessHours.find((d) => d.day === day).openingHours[index]
                    .scheduleId,
                updatedSchedule
            );
        } catch (error) {
            console.error("❌ Failed to update schedule:", error);
        }
    };
    const handleRemoveOpeningHours = async (day, index) => {
        const dayObject = businessHours.find((d) => d.day === day);
        const scheduleId = dayObject.openingHours[index]?.scheduleId;
    
        if (!scheduleId) {
            console.error("❌ No schedule ID found for this entry");
            return;
        }
    
        try {
            // Call the API to delete the schedule
            await deleteSchedule(scheduleId);
    
            // After successful deletion, remove from state
            setBusinessHours((prev) =>
                prev.map((d) =>
                    d.day === day
                        ? {
                              ...d,
                              openingHours: d.openingHours.filter((_, i) => i !== index),
                          }
                        : d
                )
            );
        } catch (error) {
            console.error("❌ Failed to delete schedule:", error);
        }
    };
    

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">
                    Horaires de l’établissement
                </h1>
            </div>

            {/* Business Hours Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Horaires d’ouverture</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {businessHours.map((dayData) => (
                            <div key={dayData.day} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label>{dayData.day}</Label>
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id={`toggle-${dayData.day}`}
                                            checked={dayData.isOpen}
                                            onCheckedChange={(newCheckedState) =>
                                                handleToggleDay(dayData.day, newCheckedState)
                                            }
                                        />
                                        <Label
                                            htmlFor={`toggle-${dayData.day}`}
                                        >
                                            {dayData.isOpen ? "Ouvert" : "Fermé"}
                                        </Label>
                                    </div>
                                </div>
                                {dayData.isOpen && (
                                    <div className="space-y-2">
                                        {dayData.openingHours.map(
                                            (hours, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <Input
                                                        type="time"
                                                        value={hours.start}
                                                        onChange={(e) =>
                                                            handleOpeningHoursChange(
                                                                dayData.day,
                                                                index,
                                                                "start",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <span>-</span>
                                                    <Input
                                                        type="time"
                                                        value={hours.end}
                                                        onChange={(e) =>
                                                            handleOpeningHoursChange(
                                                                dayData.day,
                                                                index,
                                                                "end",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        onClick={() =>
                                                            handleRemoveOpeningHours(
                                                                dayData.day,
                                                                index
                                                            )
                                                        }
                                                    >
                                                        Supprimer
                                                    </Button>
                                                </div>
                                            )
                                        )}
                                        <Button
                                            size="sm"
                                            onClick={() =>
                                                handleAddOpeningHours(
                                                    dayData.day
                                                )
                                            }
                                        >
                                            Ajouter une plage d’ouverture
                                        </Button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

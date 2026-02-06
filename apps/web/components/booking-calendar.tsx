"use client";

import { useState } from "react";
import { format, parseISO, isSameDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

// Temporary data - replace with API call
const bookings = [
  {
    id: 1,
    date: "2024-03-20",
    startTime: "09:00",
    endTime: "10:00",
    classType: "Mat Pilates",
    maxParticipants: 10,
    studio: {
      name: "Harmony Pilates Studio",
    },
    status: "confirmed",
  },
  {
    id: 2,
    date: "2024-03-20",
    startTime: "11:00",
    endTime: "12:00",
    classType: "Reformer",
    maxParticipants: 6,
    studio: {
      name: "Core Balance Center",
    },
    status: "pending",
  },
];

export function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const selectedBookings = bookings.filter((booking) =>
    isSameDay(parseISO(booking.date), selectedDate)
  );

  return (
    <div className="grid gap-6 md:grid-cols-[300px_1fr]">
      <Card>
        <CardContent className="p-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => date && setSelectedDate(date)}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Bookings for {format(selectedDate, "MMMM d, yyyy")}
        </h2>
        {selectedBookings.length === 0 ? (
          <p className="text-muted-foreground">No bookings for this date.</p>
        ) : (
          <div className="grid gap-4">
            {selectedBookings.map((booking) => (
              <Card key={booking.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">{booking.classType}</h3>
                      <p className="text-sm text-muted-foreground">
                        {booking.studio.name}
                      </p>
                    </div>
                    <Badge
                      variant={booking.status === "confirmed" ? "default" : "secondary"}
                    >
                      {booking.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {booking.startTime} - {booking.endTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Max {booking.maxParticipants} participants
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
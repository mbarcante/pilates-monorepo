"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingList } from "@/components/booking-list";
import { BookingCalendar } from "@/components/booking-calendar";

export default function SchedulePage() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Schedule Management</h1>
        <p className="text-muted-foreground mt-2">
          View and manage your studio bookings
        </p>
      </div>

      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar" className="space-y-4">
          <BookingCalendar />
        </TabsContent>
        <TabsContent value="list" className="space-y-4">
          <BookingList />
        </TabsContent>
      </Tabs>
    </div>
  );
}
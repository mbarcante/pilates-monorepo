"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

// Temporary data - replace with API call
const bookings = [
  {
    id: 1,
    date: "2024-03-20",
    startTime: "09:00",
    endTime: "10:00",
    classType: "Mat Pilates",
    studio: {
      name: "Harmony Pilates Studio",
    },
    maxParticipants: 10,
    status: "confirmed",
  },
  {
    id: 2,
    date: "2024-03-20",
    startTime: "11:00",
    endTime: "12:00",
    classType: "Reformer",
    studio: {
      name: "Core Balance Center",
    },
    maxParticipants: 6,
    status: "pending",
  },
];

export function BookingList() {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const filteredBookings = selectedStatus === "all"
    ? bookings
    : bookings.filter((booking) => booking.status === selectedStatus);

  const handleStatusChange = async (bookingId: number, newStatus: string) => {
    // Implement status update logic here
    console.log(`Updating booking ${bookingId} to ${newStatus}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {["all", "pending", "confirmed", "cancelled"].map((status) => (
          <Button
            key={status}
            variant={selectedStatus === status ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedStatus(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Button>
        ))}
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Studio</TableHead>
              <TableHead>Class Type</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.date}</TableCell>
                <TableCell>
                  {booking.startTime} - {booking.endTime}
                </TableCell>
                <TableCell>{booking.studio.name}</TableCell>
                <TableCell>{booking.classType}</TableCell>
                <TableCell>{booking.maxParticipants}</TableCell>
                <TableCell>
                  <Badge
                    variant={booking.status === "confirmed" ? "default" : "secondary"}
                  >
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleStatusChange(booking.id, "confirmed")}
                      >
                        Confirm Booking
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleStatusChange(booking.id, "cancelled")}
                        className="text-destructive"
                      >
                        Cancel Booking
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
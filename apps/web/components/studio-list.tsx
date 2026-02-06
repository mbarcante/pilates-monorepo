"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Clock } from "lucide-react";

const studios = [
  {
    id: 1,
    name: "Harmony Pilates Studio",
    address: "123 Fitness Street, Downtown",
    capacity: 20,
    operatingHours: "6:00 AM - 9:00 PM",
    amenities: ["Reformers", "Cadillac", "Mat Area", "Changing Rooms"],
  },
  {
    id: 2,
    name: "Core Balance Center",
    address: "456 Wellness Avenue, Midtown",
    capacity: 15,
    operatingHours: "7:00 AM - 8:00 PM",
    amenities: ["Reformers", "Chair", "Barrels", "Shower Facilities"],
  },
  {
    id: 3,
    name: "Elite Pilates Academy",
    address: "789 Health Boulevard, Uptown",
    capacity: 25,
    operatingHours: "5:30 AM - 10:00 PM",
    amenities: ["Reformers", "Tower", "Mat Area", "Locker Rooms"],
  },
];

export function StudioList() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Available Studios</h2>
        <p className="text-muted-foreground">Browse and book your preferred studio space</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {studios.map((studio) => (
          <Card key={studio.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{studio.name}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {studio.address}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>Capacity: {studio.capacity} people</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{studio.operatingHours}</span>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {studio.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
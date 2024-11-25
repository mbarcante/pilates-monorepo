import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Booking from "@/models/Booking";

export async function GET() {
  try {
    await dbConnect();
    const bookings = await Booking.find({})
      .populate("studio")
      .populate("teacher")
      .sort({ date: 1 });
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  console.log("Qualquer merda")
  try {
    await dbConnect();
    const data = await request.json();
    const booking = await Booking.create(data);
    return NextResponse.json(booking);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}
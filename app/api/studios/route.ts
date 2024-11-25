import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Studio from "@/models/Studio";

export async function GET() {
  try {
    await dbConnect();
    const studios = await Studio.find({}).sort({ createdAt: -1 });
    return NextResponse.json(studios);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch studios" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    const studio = await Studio.create(data);
    return NextResponse.json(studio);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create studio" }, { status: 500 });
  }
}
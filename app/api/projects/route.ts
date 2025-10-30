import { NextResponse } from "next/server";
import projects from "@/data/projects.json";

export async function GET() {
  // Using local JSON file:
  return NextResponse.json(projects);
}

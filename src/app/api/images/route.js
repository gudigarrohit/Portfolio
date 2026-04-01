import { connectDB } from "../../../lib/db";
import Image from "../../../models/Image";

export const runtime = "nodejs";

export async function GET() {
  try {
    console.log("STEP 1: API HIT");

    await connectDB();
    console.log("STEP 2: DB CONNECTED");

    const images = await Image.find();
    console.log("STEP 3: DATA:", images);

    return Response.json(images);
  } catch (error) {
    console.error("🔥 FULL ERROR:", error);

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const newImage = await Image.create({
      url: body.url,
      type: body.type,
    });

    return Response.json(newImage);
  } catch (error) {
    console.error(error);
    return new Response("Error saving image", { status: 500 });
  }
}
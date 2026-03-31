import { connectDB } from "@/lib/mongodb";
import Image from "@/models/Image";

export async function GET() {
  try {
    await connectDB();

    const images = await Image.find().sort({ createdAt: -1 });

    return Response.json(images);
  } catch (error) {
    console.error("GET ERROR:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch images" }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const { url } = await req.json();

    const saved = await Image.create({ url });

    return Response.json(saved);
  } catch (error) {
    console.error("POST ERROR:", error);
    return new Response(JSON.stringify({ error: "Failed to save image" }), {
      status: 500,
    });
  }
}
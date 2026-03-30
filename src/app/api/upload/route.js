import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {
    const { image } = await req.json();

    const result = await cloudinary.uploader.upload(image, {
      folder: "portfolio",
      resource_type: "auto",
    });

    return Response.json({
      url: result.secure_url,
      public_id: result.public_id,
    });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
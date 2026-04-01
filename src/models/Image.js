import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    url: String,
    type: String,
  },
  { timestamps: true }
);

// ✅ prevents crash in Next.js hot reload
export default mongoose.models.Image ||
  mongoose.model("Image", ImageSchema);
import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;



    if (isConnected) return;

    if (!MONGO_URI) {
      throw new Error("MONGO_URI missing");
    }

    const conn = await mongoose.connect(MONGO_URI);

    isConnected = conn.connections[0].readyState;

    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB CONNECTION ERROR:", error);
    throw error;
  }
};
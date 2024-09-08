import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGO_URI =
    process.env.MONGO_URI ||
    "mongodb+srv://kartikgeu:efyVjFAS9HVMZdvQ@cluster0.p7uho.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0";
  console.log("MONGO_URI:", MONGO_URI);
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MONGODB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

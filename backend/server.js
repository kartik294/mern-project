import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path";
import productRoutes from "./routes/product.route.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
app.use(express.json());
app.use("/api/products", productRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
console.log("MONGO_URI:", process.env.MONGO_URI); // Debug line to check the value

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server has started at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1);
  });

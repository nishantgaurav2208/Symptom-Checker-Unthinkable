import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import symptomRoutes from "./route/symptom.js";

dotenv.config();

const app = express();
app.use(express.json());


app.use(cors({ 
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  credentials: true 
}));


const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { error: "Too many requests, please wait a moment." }
});
app.use("/api/symptoms", limiter);


app.use("/api/symptoms", symptomRoutes);


app.get("/api/health", (req, res) => res.json({ 
  ok: true, 
  message: "Healthcare Symptom Checker API is running",
  timestamp: new Date().toISOString()
}));


app.get("/", (req, res) => {
  res.json({ 
    message: "Healthcare Symptom Checker API",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      analyze: "POST /api/symptoms",
      history: "GET /api/symptoms/history/:sessionId"
    }
  });
});

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/healthcare-symptom-checker")
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
  })
  .catch(err => {
    console.error("❌ Mongo connection error:", err);
    process.exit(1);
  });

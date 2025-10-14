
import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema({
  symptoms: { type: String, required: true },
  llmResponse: { type: Object },
  sessionId: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Query", QuerySchema);

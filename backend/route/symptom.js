import express from "express";
import { handleSymptom, getHistory } from "../controller/symptomController.js";

const router = express.Router();

router.post("/", handleSymptom);
router.get("/history/:sessionId", getHistory);

export default router;
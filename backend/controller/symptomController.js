import Query from "../model/Query.js";
import { getLLMResponse } from "../service/llmService.js";

export async function handleSymptom(req, res) {
  try {
    const { text, sessionId } = req.body;
    if (!text || typeof text !== "string" || text.trim().length < 2) {
      return res.status(400).json({ error: "Please provide symptoms text (at least 2 characters)." });
    }
    if (text.length > 1000) return res.status(400).json({ error: "Input too long (max 1000 characters)." });

   
    const piiRegex = /[\w\.-]+@[\w\.-]+\.\w+|\+?\d[\d\-\s]{6,}\d/;
    if (piiRegex.test(text)) {
      return res.status(400).json({ error: "Please remove personal data (email/phone) from input." });
    }

    const doc = new Query({ symptoms: text, sessionId });
    await doc.save();

  
    const llmText = await getLLMResponse(text);

    doc.llmResponse = { text: llmText };
    await doc.save();

    return res.json({ 
      result: llmText,
      sessionId: sessionId,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error("handleSymptom error:", err);
    return res.status(500).json({ error: "Server error processing your request" });
  }
}

export async function getHistory(req, res) {
  try {
    const { sessionId } = req.params;
    if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });
    
    const items = await Query.find({ sessionId })
      .sort({ createdAt: -1 })
      .limit(20)
      .lean();
    
    const safe = items.map(i => ({ 
      symptoms: i.symptoms, 
      llmResponse: i.llmResponse, 
      createdAt: i.createdAt 
    }));
    
    return res.json({ history: safe });
  } catch (err) {
    console.error("getHistory error:", err);
    return res.status(500).json({ error: "Server error retrieving history" });
  }
}

import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const MODEL = process.env.MODEL || "gemini-2.5-flash";


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);


const buildPrompt = (symptoms) => `
You are a careful medical-education assistant (not a clinician).
User symptoms: "${symptoms}"

Please provide:
1. List up to 4 possible common conditions (short names)
2. For each condition, add one short plain-language reason why it might match
3. Give 4 safe next steps (self-care + red flags to see a doctor)
4. Do NOT give prescriptions or dosages
5. End with this exact disclaimer:
"Disclaimer: This information is for educational purposes only and does not replace professional medical advice."

Keep answers short, simple, and in bullet points.
Use clear, easy-to-understand language.
`;

export async function getLLMResponse(symptoms) {

  if (!process.env.GOOGLE_API_KEY) {
    console.log("No GOOGLE_API_KEY found, using fallback response");
    return `Based on your symptoms, here are some educational insights:

Possible Conditions:
• Common Cold - typical with symptoms like headache and fever
• Influenza - fever with body aches often indicates flu
• Viral Infection - common cause of headache and fever
• Dehydration - can cause headaches and elevated temperature

Next Steps:
• Rest and drink plenty of fluids
• Monitor your temperature regularly
• Use over-the-counter fever reducers if appropriate
• Seek medical care if symptoms worsen or persist beyond 3 days

When to See a Doctor:
• High fever (over 103°F/39.4°C)
• Severe headache that doesn't improve
• Difficulty breathing
• Symptoms lasting more than 3 days

Disclaimer: This information is for educational purposes only and does not replace professional medical advice.`;
  }

  const prompt = buildPrompt(symptoms);

  try {
    const model = genAI.getGenerativeModel({ model: MODEL });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (err) {
    console.error("LLM call failed:", err);
    
  
    return `Thank you for sharing your symptoms. Here's some general educational information:

Common considerations for your symptoms may include various conditions that share similar presentations.

General Wellness Recommendations:
• Get adequate rest and maintain hydration
• Monitor symptoms for any changes
• Keep a symptom diary if helpful
• Practice good hygiene to prevent spread

Important: Always consult with a healthcare professional for proper medical evaluation, diagnosis, and treatment recommendations.

Disclaimer: This information is for educational purposes only and does not replace professional medical advice.`;
  }
}

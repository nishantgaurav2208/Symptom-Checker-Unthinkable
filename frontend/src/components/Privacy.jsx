import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, LockClosedIcon, ClockIcon } from '@heroicons/react/24/outline';
import '../styles/pageBase.css';

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <button className="btn-back" onClick={() => navigate('/')}>
        <ArrowLeftIcon className="icon" /> Back to Home
      </button>

      <h1>Privacy Policy</h1>
      <p>
        Your privacy is paramount. This policy explains how we handle your data when you use our symptom checker.
      </p>

      <hr />

      <h2><LockClosedIcon className="icon" /> Data We Collect (or Don't Collect)</h2>
      
      <h3>1. Symptoms Data</h3>
      <p>
        When you submit symptoms, the text is sent to the Gemini AI model to generate a response.
      </p>
      <ul>
        <li>**What is NOT Stored:** We **never** ask for, collect, or store any personally identifiable medical information (e.g., your name, date of birth, location, or sensitive health data).</li>
        <li>**What IS Stored:** Your symptom text and the AI's analysis are saved in our MongoDB database, tied to an anonymous **Session ID**. This is used solely for the optional "Server History" feature.</li>
      </ul>

      <h3>2. Anonymous Session ID</h3>
      <p>
        To keep track of your past checks without requiring a login, we generate a random, anonymous **Session ID** and store it in your browser's Local Storage.
      </p>
      <ul>
        <li>This ID is completely random and contains no personal information about you.</li>
        <li>It allows you to see your search history if you use the same browser and device.</li>
        <li>Clearing your browser's local storage will remove this ID and all associated local history.</li>
      </ul>

      <h2><ClockIcon className="icon" /> Data Retention</h2>
      <p>
        We retain anonymous symptom data and analysis for a limited period (e.g., 90 days) for service improvement and statistical analysis. After this period, the data is automatically deleted or permanently aggregated and anonymized.
      </p>
      
      <h2>Third-Party AI Services</h2>
      <p>
        We utilize the **Gemini API** for generative AI processing. All symptom inputs are subject to Google's API terms and policies. We only send the raw symptom text and system prompts necessary for educational analysis.
      </p>
      
      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--warning-border)', fontWeight: '600' }}>
        **Important:** This tool is for educational use only. For any medical concerns, please consult a qualified healthcare professional.
      </p>
    </div>
  );
}
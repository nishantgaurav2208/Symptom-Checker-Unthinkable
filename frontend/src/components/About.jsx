import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, LightBulbIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline';
import '../styles/pageBase.css';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <button className="btn-back" onClick={() => navigate('/')}>
        <ArrowLeftIcon className="icon" /> Back to Home
      </button>

      <h1>About Our Healthcare Symptom Checker</h1>
      <p>
        We're building a reliable, accessible, and **educational** tool to help you better understand your health. 
        Our platform uses advanced AI to process your symptoms and provide informative insights, not medical diagnoses.
      </p>

      <hr />

      <h2><LightBulbIcon className="icon" /> Our Mission</h2>
      <p>
        Our core mission is to empower individuals with **knowledge**. In the age of overwhelming online health information, 
        we aim to cut through the noise, offering clear, probable conditions and evidence-based next steps. We believe 
        that understanding potential causes is the first step toward informed health decisions.
      </p>

      <h2><ShieldCheckIcon className="icon" /> Safety & Disclaimer Focus</h2>
      <p>
        The most important aspect of our tool is safety. We continuously train our LLM (powered by Gemini) to prioritize 
        **emergency warnings** and reinforce the explicit medical disclaimer. We do not provide medical advice, 
        diagnosis, or treatment—we provide education.
      </p>
      
      <ul>
        <li>**Education First:** All results are structured to be informative and non-prescriptive.</li>
        <li>**Privacy:** We use a Session ID for history without requiring personal accounts, ensuring anonymity.</li>
        <li>**Source Transparency:** The AI is instructed to base its recommendations on general medical consensus.</li>
      </ul>

      <h2><HeartIcon className="icon" /> The Technology Behind It</h2>
      <p>
        This checker is built as a modern full-stack application:
      </p>
      <ul>
        <li>**Frontend:** React.js with a sleek, animated interface.</li>
        <li>**Backend:** Express.js (ES6) for a fast, secure API.</li>
        <li>**Database:** MongoDB for anonymous query history and persistence.</li>
        <li>**Core Engine:** Google's **Gemini-Flash** LLM provides the reasoning and suggestion generation.</li>
      </ul>

      <p className="page-footer-text"> 
  Built with integrity for better health education.
</p>
    </div>
  );
}
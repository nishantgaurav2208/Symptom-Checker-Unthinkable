

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ReactMarkdown from 'react-markdown'; 


import { 
  LightBulbIcon, 
  ArrowLeftIcon, 
  ClockIcon, 
  TrashIcon,
  MagnifyingGlassIcon 
} from '@heroicons/react/24/outline'; 
import "../styles/symptomChecker.css"; 

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";


function getSessionId() {
  let id = localStorage.getItem("sessionId");
  if (!id) {
    id = "s_" + Math.random().toString(36).slice(2, 12);
    localStorage.setItem("sessionId", id);
  }
  return id;
}

export default function SymptomChecker() {
  const navigate = useNavigate();
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState(() => {
    try {
   
      return JSON.parse(localStorage.getItem("history") || "[]");
    } catch {
      return [];
    }
  });
  const [serverHistory, setServerHistory] = useState([]);
  const [fetchingServer, setFetchingServer] = useState(false);
  
  const sessionId = getSessionId();


  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history.slice(0, 20)));
  }, [history]);

  async function fetchServerHistory() {
    setFetchingServer(true);
    try {
      const res = await fetch(`${API_BASE}/api/symptoms/history/${sessionId}`);
      const data = await res.json();
      if (res.ok) {
        setServerHistory(data.history || []);
      } else {
        alert(data.error || "Failed to fetch server history.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error while fetching server history.");
    } finally {
      setFetchingServer(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setResult("");
    if (!symptoms.trim()) return alert("Please describe your symptoms.");

    
    if (symptoms.length > 1000) return alert("Please shorten the input.");

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/symptoms`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          
          "X-Session-ID": sessionId 
        },
        body: JSON.stringify({ text: symptoms }) 
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        alert(data.error || "Server error");
      } else {
        const resultText = data.result || "No result returned. The LLM may have failed to respond.";
        setResult(resultText);
        
       
        const entry = { text: symptoms, result: resultText, time: new Date().toISOString() };
        setHistory(prev => [entry, ...prev].slice(0, 20));
        
        setSymptoms("");
      }
    } catch (err) {
      console.error(err);
      alert("Network/server error. Check the backend API is running.");
    } finally {
      setLoading(false);
    }
  }

  function clearLocalHistory() {
    localStorage.removeItem("history");
    setHistory([]);
  }

  return (
    <div className="home-container" style={{ paddingTop: 40 }}>
      <button className="btn-back" onClick={() => navigate("/")}>
        <ArrowLeftIcon className="icon" /> Back to Home
      </button>

      <h1 className="checker-title">AI Symptom Checker</h1>
      <p className="small">
        **Educational use only.** Get AI-powered insights on your symptoms.
      </p>

      <form onSubmit={handleSubmit} className="symptom-form">
        <textarea
          rows={5}
          placeholder="Describe your symptoms (e.g., 'fever, severe headache, and vomiting'). Be as specific as possible."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          disabled={loading}
        />
        <div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? (
              <>
                <div className="loader-ring"></div>
                Analyzing...
              </>
            ) : (
              <>
                <MagnifyingGlassIcon className="icon" /> 
                Analyze Symptoms
              </>
            )}
          </button>
        </div>
      </form>

     
      {result && (
        <div className="result-box">
          <h3 className="result-header">
            <LightBulbIcon className="result-icon" /> AI Analysis & Insights
          </h3>
      
          <div className="markdown-content">
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        </div>
      )}

      <div className="history">
        <div className="history-header">
          <h4><ClockIcon className="icon" /> Query History</h4>
          <div className="history-actions">
            <button onClick={clearLocalHistory} disabled={history.length === 0}>
              <TrashIcon className="icon" /> Clear Local
            </button>
            <button onClick={fetchServerHistory} disabled={fetchingServer}>
              {fetchingServer ? 'Fetching...' : 'Fetch Server History'}
            </button>
          </div>
        </div>
        
        <p className="small">
            **Current Session ID:** <span className="session-id">{sessionId}</span>
        </p>

        {serverHistory.length > 0 && (
            <div className="server-history-container">
                <h5 className="server-history-title">Server History ({serverHistory.length} entries)</h5>
                <ul className="history-list server-list">
                    {serverHistory.map((h, i) => (
                        <li key={i} className="server-history-item">
                            <div className="time">Server Log: {new Date(h.time).toLocaleString()}</div>
                            <div><strong>Symptoms:</strong> {h.symptoms}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )}

        {history.length === 0 && serverHistory.length === 0 ? (
          <p>No past checks saved locally or on the server for this session.</p>
        ) : (
          <ul className="history-list">
            {history.map((h, i) => (
              <li key={i}>
                <div className="time">{new Date(h.time).toLocaleString()}</div>
                <div>**Symptoms:** {h.text}</div>
                <details>
                    <summary>View Result</summary>
                    <div className="history-result-preview">
                        <ReactMarkdown>{h.result}</ReactMarkdown>
                    </div>
                </details>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="disclaimer" style={{ marginTop: 24 }}>
        Disclaimer: This tool is for educational purposes only and does not replace professional medical advice. Always consult a healthcare professional.
      </p>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import '../styles/pageBase.css';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <button className="btn-back" onClick={() => navigate('/')}>
        <ArrowLeftIcon className="icon" /> Back to Home
      </button>

      <h1>Get In Touch With Our Team</h1>
      <p>
        Whether you have feedback, need support, or are interested in partnership opportunities, we'd love to hear from you.
      </p>

      <hr />

      <h2>General Inquiries</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <EnvelopeIcon className="icon" style={{ color: 'var(--primary-color)' }} />
          **Email:** <a href="dk2991999@gmail.com">dk2991999@gmail.com</a> (Best for general questions)
        </p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <MapPinIcon className="icon" style={{ color: 'var(--primary-color)' }} />
          **Address:** Open Source Health Tech, Global
        </p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PhoneIcon className="icon" style={{ color: 'var(--primary-color)' }} />
          **Phone:** (800) 555-1234 (For business inquiries only)
        </p>
      </div>

      <h2>Send Us a Message</h2>
      <form style={{ display: 'grid', gap: '15px' }}>
        <input type="text" placeholder="Your Name" style={formInputStyle} required />
        <input type="email" placeholder="Your Email Address" style={formInputStyle} required />
        <textarea placeholder="Your Message or Feedback" rows="5" style={formInputStyle} required />
        <button type="submit" style={submitButtonStyle}>
          Submit Message
        </button>
      </form>

      <p className="page-footer-text">
  We aim to respond to all inquiries within 48 hours.
</p>
    </div>
  );
}


const formInputStyle = {
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    fontSize: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.03)',
};

const submitButtonStyle = {
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '700',
    transition: 'background-color 0.2s, transform 0.2s',
};

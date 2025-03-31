import React from 'react';
import './aitutor.css';

const AITutor = () => {
  return (
    <section className="ai-tutor-section">
      <div className="ai-tutor-container">
        <div className="ai-tutor-content">
          <div className="ai-tutor-badge">Coming Soon</div>
          <h2 className="ai-tutor-title">Smart AI Tutor</h2>
          <p className="ai-tutor-description">
            Our revolutionary AI-powered learning assistant is currently in development. 
            Get ready for personalized, 24/7 tutoring that adapts to your unique learning style.
          </p>
          <div className="ai-tutor-visual">
            <div className="ai-tutor-pulse"></div>
            <div className="ai-tutor-core"></div>
          </div>
          <div className="ai-tutor-notify">
            <input type="email" placeholder="Enter your email for early access" />
            <button>Notify Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITutor;
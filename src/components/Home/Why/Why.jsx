import React from 'react';
import Card from '../../Common/Card/Card';
import './why.css';

const WhyUs = () => {
  const cardData = [
    {
      title: "Expert Mentors",
      description: "Learn from industry experts with years of experience."
    },
    {
      title: "Proven Curriculum",
      description: "Structured programs designed for real-world success."
    },
    {
      title: "Career Support",
      description: "Get personalized career guidance and job placement help."
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace with our online platform."
    },
    {
      title: "Community Network",
      description: "Connect with peers and professionals in your field."
    },
    {
      title: "Practical Projects",
      description: "Build a portfolio with real-world projects."
    },
    {
      title: "Affordable Pricing",
      description: "Quality education at competitive prices."
    },
    {
      title: "Lifetime Access",
      description: "Continue learning even after program completion."
    }
  ];

  return (
    <section className="why-us">
      <div className="why-us-container">
        <div className="why-us-content">
          <h2>Why Career Dive?</h2>
          <div className="cards-grid">
            {cardData.slice(0, 3).map((card, index) => (
              <Card key={index} title={card.title} description={card.description} />
            ))}
          </div>
          <div className="cards-grid">
            {cardData.slice(3, 5).map((card, index) => (
              <Card key={index} title={card.title} description={card.description} />
            ))}
          </div>
          <div className="cards-grid">
            {cardData.slice(5).map((card, index) => (
              <Card key={index} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
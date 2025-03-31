import React from 'react';
import Accordion from '../../Common/Accordion/Accordion';
import './faq.css';

const FAQ = () => {
  const faqItems = [
    {
      question: "How do I enroll in a program?",
      answer: "You can enroll by clicking the 'Get Started' button on our website and following the registration process."
    },
    {
      question: "What payment options do you accept?",
      answer: "We accept credit/debit cards, PayPal, and bank transfers. We also offer installment plans for some programs."
    },
    {
      question: "Do you offer job placement assistance?",
      answer: "Yes, all our programs include career services and job placement assistance."
    },
    {
      question: "Can I access the materials after completing the program?",
      answer: "Yes, you'll have lifetime access to the learning materials and any updates."
    },
    {
      question: "What if I need to pause my studies?",
      answer: "We offer flexible scheduling options and you can pause your studies if needed."
    },
    {
      question: "Are there any prerequisites for your programs?",
      answer: "Most of our beginner programs don't require prerequisites. Advanced programs may require foundational knowledge."
    }
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          {faqItems.map((item, index) => (
            <Accordion key={index} title={item.question}>
              <p>{item.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
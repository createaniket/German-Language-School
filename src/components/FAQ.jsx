import React, { useState } from "react";
import "./FAQ.css";

import ArrowDown from "../assets/images/up.svg"; // your arrow icon


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      q: "I am a beginner. Will this help me?",
      a: "Yes, this is perfect for beginners who want to start the right way."
    },
    {
      q: "I have completed A1 or A2. Should I still join?",
      a: "Yes, you will get clarity on the next step and exam approach."
    },
    {
      q: "Who are your trainers?",
      a: "We have over 200+ experienced trainers specializing in different languages. Our team includes 50+ French language experts who provide services across India."
    },
    {
      q: "Is career guidance included?",
      a: "Career guidance is a bonus add on, not the main focus. We provide it only if it is relevant to your plan."
    },
    {
      q: "Will I get recording?",
      a: "Yes, limited time access."
    },
    {
      q: "Is ₹99 refundable?",
      a: "You may request after attending fully if you feel it was not valuable."
    },
    {
      q: "Will you sell a course inside the webinar?",
      a: "The purpose is to guide. If you want to join classes later, our team will explain separately."
    }
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-wrapper">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-box">
        {faqData.map((item, i) => (
          <div key={i} className="faq-item">
            <button className="faq-question" onClick={() => toggle(i)}>
              <span className={openIndex === i ? "active-q" : ""}>
                {item.q}
              </span>

              <img
                src={ArrowDown}
                alt="toggle"
                className={`faq-arrow ${openIndex === i ? "rotate" : ""}`}
              />
            </button>

            {openIndex === i && (
              <p className="faq-answer">{item.a}</p>
            )}

            {i !== faqData.length - 1 && <div className="faq-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

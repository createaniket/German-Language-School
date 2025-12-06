import React from "react";
import "./TestimonialsSection.css";
import CheckBlue from "../assets/images/checkblue.svg"; // your blue verification icon

export default function TestimonialsSection() {
  const data = [
    {
      text: `“Before this, I was completely confused about levels and exams. 
      The clarity I got in just one session saved me months. 
      The study plan was the best part.”`,
      name: "Aditi Sharma",
      role: "A1 Completed, Moving to A2",
    },
    {
      text: `“I work full time, so I needed a simple plan. 
      The roadmap they gave made German feel doable. 
      I finally know how long A1 to B2 will take for me.”`,
      name: "Rahul Verma",
      role: "Working Professional",
    },
    {
      text: `“I wasted 2 months watching random YouTube videos. 
      This webinar gave me more clarity in 30 minutes than everything else combined.”`,
      name: "Simran Kaur",
      role: "Student Planning for Germany",
    },
    {
      text: `“I needed German for Germany jobs. 
      The level guidance and exam tips were spot on. 
      Highly recommend this if you're serious about learning.”`,
      name: "Mohammed Faisal",
      role: "Healthcare Professional",
    }
  ];

  return (
    <section className="testimonial-wrapper">
      <h2 className="testimonial-title">What Our Students Say</h2>
      <p className="testimonial-sub">
        Your webinar will show you the right path — but don’t just take our word for it.
      </p>
      <p className="testimonial-sub2">
        Here’s what learners across A1 to B1 levels say about their experience with our teaching, guidance and structured approach.
      </p>

      <div className="testimonial-grid">
        {data.map((item, i) => (
          <div className="testimonial-card" key={i}>
            <p className="testimonial-text">{item.text}</p>

            <div className="testimonial-user">
              <span className="name">{item.name}</span>
              <img src={CheckBlue} alt="" className="verify-icon" />
            </div>

            <p className="role">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

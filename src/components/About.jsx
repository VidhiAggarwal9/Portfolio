// src/components/About.jsx
import React from "react";
export default function About() {
  return (
    <section id="about">
      {/* Left Column: About Description */}
      <div className="about-desc flashcard">
        <h2>About Me</h2>
        <p>
         I am a B.Tech student in Artificial Intelligence and Data Science. Passionate about full‑stack development, I focus on building scalable, modular, and maintainable architectures. I enjoy hands‑on learning, solving challenges through experimentation, and creating reusable templates for efficient workflows. Alongside development, I am deeply interested in research and data‑driven solutions, exploring innovative approaches to real‑world problems. My professional identity reflects clarity, consistency, and growth, as I refine my GitHub profile and portfolio to showcase resilience, curiosity, dynamic problem‑solving, adaptability, and a forward‑thinking mindset that embraces continuous learning and collaborative innovation. </p>
      </div>

      {/* Right Column: Personal Info */}
      <div className="about-info flashcard">
        <p><b>CGPA:</b> 8.9</p>
        <p><b>College:</b> Poornima College of Engineering</p>
        <p><b>Branch:</b> AI & DS</p>
        
    <p>
     Resume:{" "}
     <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
     View Resume
     </a>
</p>
        <p>
    GitHub:{" "}
    <a href="https://github.com/VidhiAggarwal9" target="_blank" rel="noopener noreferrer">
      https://github.com/VidhiAggarwal9
    </a>
  </p>
  <p>
    LinkedIn:{" "}
    <a href="https://www.linkedin.com/in/vidhi-aggarwal-15b25b291/" target="_blank" rel="noopener noreferrer">
      https://www.linkedin.com/in/vidhi-aggarwal-15b25b291/
    </a>
        </p>
      </div>
    </section>
  );

}

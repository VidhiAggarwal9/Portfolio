// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    name: "Space Debris Detection",
    link: "https://github.com/VidhiAggarwal9/Space-Debris-Detection",
    description:
      "Developed a machine learning model to identify and classify space debris using satellite imagery. The project emphasizes sustainability in space exploration by predicting collision risks, enhancing safety for spacecraft, and contributing to long‑term orbital management through data‑driven detection and monitoring techniques."
  },
  {
    name: "Blinkit Analysis uisng Power BI",
    link: "https://github.com/VidhiAggarwal9/Blinkit-Analysis-using-Power-bi",
    description:
      "Performed data analysis on Blinkit’s operations to uncover customer trends, delivery efficiency, and market insights. Leveraged visualization tools and statistical methods to evaluate performance, optimize workflows, and recommend improvements for user experience and business growth. The project highlights practical applications of data science in e‑commerce."
  },
  {
    name: "Gen AI Interview Coach",
    link: "https://github.com/VidhiAggarwal9/gen-ai-interview-coach",
    description:
      "Designed a generative AI system to simulate interview scenarios, providing personalized questions and feedback. The project helps candidates practice effectively, improve communication skills, and gain confidence. It demonstrates the potential of AI in education, career preparation, and interactive learning environments."
  },
  {
    name: "IoT Smart Defense Glove for army ",
    link: "https://github.com/VidhiAggarwal9/IOT-Smart-Glove",
    description:
      "Built an IoT‑enabled smart glove integrating sensors to capture hand movements and gestures. The glove translates physical actions into digital signals, enabling applications in healthcare, accessibility, and human‑computer interaction. It showcases innovation in wearable technology and the fusion of hardware with intelligent software solutions."
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-flashcard">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 font-semibold hover:underline"
            >
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
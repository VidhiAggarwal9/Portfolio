// src/components/Skills.jsx
import React from "react";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["C++", "JavaScript", "Python"]
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React.js", "Express.js", "Node.js"]
  },
  {
    category: "Data Visualization",
    skills: ["Tableau", "Power BI", "MS Excel", "Matplotlib", "Seaborn"]
  },
  {
    category: "Machine Learning",
    skills: ["Pandas", "NumPy", "Matplotlib", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"]
  },
  {
    category: "Database Management",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools",
    skills: ["Jupyter", "Git"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 md:px-12 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Skills & Focus</h2>
      <div className="skills-grid">
        {skillsData.map((skillCategory, idx) => (
          <div key={idx} className="skill-card">
            <h3 className="category-title">{skillCategory.category}</h3>
            <div className="skill-items">
              {skillCategory.skills.map((skill, i) => (
                <div key={i} className="skill-box">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
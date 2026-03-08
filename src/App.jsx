// src/App.jsx
import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import './index.css'; 
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import HeroAnimation from "./components/HeroAnimation";

function App() {
  return(
    <div className="App bg-gray-900 text-white relative overflow-x-hidden">

      {/* Fixed 3D Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <HeroAnimation />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center pt-[90px]">
        <Hero />
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-6">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-6">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_napbzgd",     // Your EmailJS Service ID
        "template_kwppj4f",    // Your EmailJS Template ID
        form.current,
        "tA1GHw7oY7XQBbOvj"          // Your EmailJS Public Key (Replace this)
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>Feel free to send me a message or connect via GitHub/LinkedIn!</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="contact-input"
          />
          <textarea
            name="user_message"
            placeholder="Your Message"
            required
            className="contact-input"
            rows={6}
          />
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>

        {status && <p style={{ marginTop: "1rem", textAlign: "center" }}>{status}</p>}

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/VidhiAggarwal9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/vidhi-aggarwal-15b25b291/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color="white" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
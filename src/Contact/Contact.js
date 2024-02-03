import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-form-section">
      <form className="contact-form">
        <label htmlFor="email">Your Email:</label>
        <input
          type="text"
          className="input-field"
          name="email"
          placeholder="person@example.com"
        />
        <label htmlFor="message">Message:</label>
        <textarea name="message" className="message-box" placeholder="Message..."></textarea>
        <div className="send-button">
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

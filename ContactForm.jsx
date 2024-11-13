import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
        <section id="contact">
        <div className="contact-form-section">
            <div className="contact-form-container">
                {/* Placeholder for image */}
                <div className="contact-image">
                    <img src="src/media/vecteezy_email-message-icon-design-in-blue-circle_14440980.png" alt="Contact Icon" />
                </div>
                
                {/* Contact Form */}
                <div className="contact-form-content">
                    <h2 className="contact-title">Get in Touch</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
}

export default ContactForm;


import React, { useRef } from "react";
import './Contact.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaUser, FaPen, FaPaperPlane } from "react-icons/fa";
import { PiIntersectThreeDuotone } from "react-icons/pi";
import emailjs from "emailjs-com"

const Contact = () => {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zyq0ykl',     // 🔁 Replace this
      'template_h0nx62n',    // 🔁 Replace this
      form.current,
      'zq75j8B8Sl4PLUsOL'      // 🔁 Replace this
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error(error.text);
      alert("Failed to send message.");
    });

    e.target.reset();
  };
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2 className="contact-subtitle"><PiIntersectThreeDuotone className="icon"/> Don’t hesitate to</h2>
        <h1 className="contact-title">
          <span className="c">Contact</span> Me
        </h1>

        {/* Contact Form */}
         <div className="contact-form-section">
      <h3 className="form-heading">
        <span className="highlight">|</span> Send me a <span className="highlight">message</span>
      </h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-grid">
          <div className="form-group">
            <FaUser className="form-icon" />
            <input type="text" name="user_name" placeholder="Name *" required />
          </div>
          <div className="form-group">
            <FaEnvelope className="form-icon" />
            <input type="email" name="user_email" placeholder="E-mail *" required />
          </div>
          <div className="form-group subject">
            <FaPen className="form-icon" />
            <input type="text" name="subject" placeholder="Subject *" required />
          </div>
          <div className="form-group message">
            <textarea name="message" placeholder="Message *" required></textarea>
          </div>
        </div>
        <div className="send-btn-wrapper">
          <button type="submit" className="send-btn">
            <FaPaperPlane /> SEND MESSAGE
          </button>
        </div>
      </form>
    </div>

        {/* Alternative Contact */}
        <h3 className="alt-heading"><span className="highlight">|</span> Or if you <span className="prefer">prefer...</span></h3>

        <div className="contact-grid">
  <div className="contact-card">
    <FaPhone className="contact-icon" />
    <div>
      <p className="card-title">Phone</p>
    <p>  <a href="tel:+923118081964" className="card-value">+92 3118081964</a></p>
    </div>
  </div>

  <div className="contact-card">
    <FaEnvelope className="contact-icon" />
    <div>
      <p className="card-title">E-mail</p>
      <p><a href="mailto:ahsankhan03143@email.com" className="card-value">ahsankhan03143@email.com</a></p>
    </div>
  </div>

  <div className="contact-card">
    <FaLinkedin className="contact-icon" />
    <div>
      <p className="card-title">LinkedIn</p>
    <p>  <a href="https://www.linkedin.com/in/ahsan-khan-8745012a6/" target="_blank" rel="noopener noreferrer" className="card-value">Ahsan Khan</a></p>
    </div>
  </div>

  <div className="contact-card">
    <FaFacebook className="contact-icon" />
    <div>
      <p className="card-title">Facebook</p>
      <p><a href="https://www.facebook.com/ahsan.khan.fb" target="_blank" rel="noopener noreferrer" className="card-value">Ahsan Khan</a></p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Contact;

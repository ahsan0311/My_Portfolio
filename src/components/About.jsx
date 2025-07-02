// AboutSection.jsx
import React from "react";
import { profileData } from "../utils/personal_data.js";
import { FaMapMarkerAlt, FaEnvelope, FaGithub } from "react-icons/fa";
import "./about.css";
import { PiIntersectThreeDuotone } from "react-icons/pi";
import "../index.css"

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="header">
        <h4 className="greeting"><PiIntersectThreeDuotone className="icon"/> {profileData.greeting}</h4>
        <h1 className="main-title"><span>I'm </span>{profileData.title}</h1>
        <div className="info">
          <div><span><FaMapMarkerAlt /> {profileData.location}</span></div>
         <div> <span><FaEnvelope /><a href={`mailto:${profileData.email}`}>{profileData.email}</a> </span></div>
          <div><span><FaGithub /> <a href="https://github.com/ahsan0311" target="_blank">{profileData.github}</a></span></div>
        </div>
      </div>

      <div className="about-me">
        <h2>
          <span className="highlight">|</span> <span className="green">A little bit</span> about me...
        </h2>

        <div className="about-content" style={{marginTop : "-10px"}}>
          <img src={profileData.image} alt="code icon" />
          <div className="text" style={{marginTop : "14px"}}>
            {profileData.aboutContent.map((para, index) => (
              <p key={index} >{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

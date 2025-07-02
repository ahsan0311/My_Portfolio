import React from "react";
import "./education.css";
import { educationData } from "../utils/education.js";
import { PiIntersectThreeDuotone } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import "../index.css"

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="section-title">
        <span className="faded"><PiIntersectThreeDuotone className="icon"/> This is my</span>
        <br />
        <span className="highlight">Educational</span> Background
      </h2>

      {educationData.map((item) => (
        <div className="edu-card" key={item.id}>
          <div className="edu-left">
            <img src={item.logo} alt="Logo" className="edu-logo" />
          </div>
          <div className="edu-right">
            <div className="edu-header">
              <h3>
                <span className="highlight-small">{item.degree.split(" ")[0]}</span>{" "}
                {item.degree.split(" ").slice(1).join(" ")}
              </h3>
              <span className="edu-date">{item.date}</span>
            </div>
            <p className="edu-university"><FaUniversity /> {item.university}</p>
            <p className="disc">{item.description}</p>
            <ul>
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <p className="disc-2">{item.conclusion}</p>
            <div className="edu-tags">
              {item.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
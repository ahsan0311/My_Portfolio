import React, { useState } from "react";
import "./Projects.css";
import { data } from "../utils/project";
import { PiIntersectThreeDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";



const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

 

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">
        <h3 > <PiIntersectThreeDuotone className="icon"/> Take a look at </h3>  <h4 className="portfolio"> <span> My </span> Portfolio</h4>
      </h2>
     
      <div className="cards">
  {data.map((item, index) => (
    <div className="single-card" key={index}>
      <div className="icon-circle">
        <img src={item.project_icon} alt={item.title} />
      </div>
      <h3 className="card-title">{item.title}</h3>
     
      <div className="tags">
        {item.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      <p className="description">{item.description}</p>

     <div className="links">
      <a href={item.github} target="_blank" rel="noopener noreferrer" className="view-link"><FaGithub /></a>
       <a href={item.link} target="_blank" rel="noopener noreferrer" className="view-link"><FaLink /></a>
     </div>

    </div>
  ))}
</div>

    </div>
  );
};



export default Portfolio;
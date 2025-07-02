
import "./Skill.css";
import { PiIntersectThreeDuotone } from "react-icons/pi";
import { FaTableColumns } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { frontendSkills } from "../utils/Frontend_Skill";
import { backendSkills } from "../utils/backend_Skill";
import { languages } from "../utils/language";





const SkillSet = () => {
  return (
    <div className="skillset-container">
      <h3 className="section-subtitle">
        <PiIntersectThreeDuotone className="icon" /> Explore
      </h3>
      <h2 className="section-title">
        My <span>Skill Set</span>
      </h2>

      <div className="cards-wrapper">
        <div className="card">
          <div className="icons">
            <FaTableColumns />
          </div>
          <h3>
            <span className="green-text">Website</span> Development
          </h3>
          <p>I can bring your best ideas into life and make them a reality!</p>
        </div>

        <div className="card">
          <div className="icons">
            <CgWebsite />
          </div>
          <h3 style={{marginTop:"22px"}}>
            <span className="green-text" >Frontend</span> Development
          </h3>
          <p>
            I specialize in building responsive, interactive, and user-friendly interfaces using modern frontend technologies.
          </p>
        </div>
      </div>

      <h3 className="backend-title">Frontend Stack</h3>
      <div className="stack-grid">
        {frontendSkills.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}
      </div>

      <h3 className="backend-title">Backend Stack</h3>
      <div className="stack-grid">
        {backendSkills.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}
      </div>

        <div className="language-section">
      <h3 className="backend-title">Languages</h3>
      <ul className="language-list">
        {languages.map((lang, index) => (
          <li key={index} className="language-item">
            <img src={lang.flag} alt={lang.name} className="flag-icon" />
            <div>
              <strong>{lang.name}</strong> - <span className="level">{lang.level}</span>
              <p className="desc">{lang.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

const SkillBar = ({ tech, level, desc, exp, iconUrl }) => (
  <div className="skill-bar">
    <div className="bar-header">
      <div className="tech-icon">
        <img src={iconUrl} alt={tech} />
        <strong style={{ fontSize: "22px" }}>{tech}</strong>
      </div>
      <span>{level}%</span>
    </div>
    <div className="bar-bg">
      <div className="bar-fill" style={{ width: `${level}%` }}></div>
    </div>
    {exp && <p className="exp">{exp}</p>}
    {desc && <p className="desc">{desc}</p>}
  </div>


  
);

export default SkillSet;

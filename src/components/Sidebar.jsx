


import React, { useEffect } from 'react'; 
import './sidebar.css';
import {
  FaUserAlt, FaGraduationCap, FaTools, FaFolderOpen,
  FaEnvelope, FaCaretLeft, FaCaretRight
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import TextChanger from './TextChanger';
import TypingEffect from './TextChanger';
import Settings from './Setting';


const Sidebar = ({ isOpen, setIsOpen }) => {

 
  const toggleSidebar = () => {
    if (window.innerWidth >= 950) {
      setIsOpen(!isOpen);
    }
  };

  const location = useLocation();

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 950) {
        setIsOpen(false); 
      }
     
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsOpen]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="profile-section">
        <img
          src="/assets/my.jpg"
          alt="Profile"
          className={`profile-img ${isOpen ? '' : 'small'}`}
        />
        {isOpen && (
          <>
            <h2 style={{marginRight : "18px"}}><img src="/assets/logo.svg" alt="" className='icon' /> Ahsan <span>Khan</span></h2>
            <TypingEffect/>
          </>
        )}
      </div>
      <div className={`nav-links ${isOpen ? '' : 'centered'}`}>
      <ul>
      <Link to="/" className="Link">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <FaUserAlt /> {isOpen && 'About me'}
        </li>
      </Link>

      <Link to="/Education" className="Link">
        <li className={location.pathname === '/Education' ? 'active' : ''}>
          <FaGraduationCap /> {isOpen && 'Education'}
        </li>
      </Link>

        <Link to="/Skills" className="Link">
      <li className={location.pathname === '/Skills' ? 'active' : ''}>
          <FaTools /> {isOpen && 'Skills'}
      </li>
        </Link>

        <Link to="/Projects" className="Link">
      <li className={location.pathname === '/Projects' ? 'active' : ''}>
          <FaFolderOpen /> {isOpen && 'Projects'}
      </li>
        </Link>

        <Link to="/Contact" className="Link">
      <li className={location.pathname === '/Contact' ? 'active' : ''}>
          <FaEnvelope /> {isOpen && 'Contact'}
      </li>
        </Link>
    </ul>

      </div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <FaCaretLeft /> : <FaCaretRight />}
      </button>

      {/* <Settings/> */}
    </div>

    
  );
};

export default Sidebar;

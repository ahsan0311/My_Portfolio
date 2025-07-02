// components/Settings.jsx
import React, { useState } from 'react';
import './Setting.css';
import { FaMoon } from 'react-icons/fa';
import { FaWandMagicSparkles } from 'react-icons/fa6';

const Settings = ({ toggleTheme, toggleCursor }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="settings-container">
      <button className="settings-btn" onClick={() => setOpen(!open)}>
        ⚙️
      </button>

      {open && (
        
        <div className="settings-panel">
          <button onClick={toggleTheme}> <FaMoon /></button>
          <button onClick={toggleCursor}><FaWandMagicSparkles /></button>
        </div>
      )}
    </div>
  );
};

export default Settings;

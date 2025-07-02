// import React from 'react';
// import '../App.css';
// import AboutSection from './About';
// import { motion } from 'framer-motion';

  
//   const MainContent = ({ isOpen, children }) => {
//     return (
//       <div className={`main-content ${!isOpen ? 'expanded' : ''}`}>
       
//         {children}
     
//       </div>
//     );
//   };


// export default MainContent;

// // components/MainContent.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const MainContent = ({ isOpen, children }) => {
  return (
    <motion.div className={`main-content ${isOpen ? 'expanded' : ''}`}
        key={location}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
  );
};

export default MainContent;

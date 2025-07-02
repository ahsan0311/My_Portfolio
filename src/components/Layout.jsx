// // components/Layout.jsx
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import MainContent from './MainContent';
// import { Outlet } from 'react-router-dom';

// const Layout = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="app">
//       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
//       <MainContent isOpen={isOpen}>
//         <Outlet /> {/* This renders routed pages inside MainContent */}
//       </MainContent>
//     </div>
//   );
// };

// export default Layout;


// components/Layout.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="app">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainContent isOpen={isOpen}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-20%', opacity: 0 }}
            transition={{ duration: .6, ease: 'easeInOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </MainContent>
    </div>
  );
};

export default Layout;




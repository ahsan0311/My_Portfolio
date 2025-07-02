import React, { useEffect, useRef, useState } from 'react';

const MouseBall = () => {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const target = useRef({ x: 0, y: 0 });      // actual mouse
  const current = useRef({ x: 0, y: 0 });     // ball position
  const ballRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    const handleMouseOver = (e) => {
      if (e.target !== document.body && e.target !== document.documentElement) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      // Smooth follow using lerp
      current.current.x += (target.current.x - current.current.x) * 0.03;
      current.current.y += (target.current.y - current.current.y) * 0.03;


      const size = isHovering ? 28: 28;
      if (ballRef.current) {
        ballRef.current.style.top = `${current.current.y - size / 2}px`;
        ballRef.current.style.left = `${current.current.x - size / 2}px`;
        ballRef.current.style.width = `${size}px`;
        ballRef.current.style.height = `${size}px`;
      }

      requestAnimationFrame(followMouse);
    };

    followMouse(); // Start animation loop
  }, [isHovering]);

  if (!visible) return null;

  return (
    <div
      ref={ballRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: '#c2c2c24e',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'width 0.2s, height 0.2s, background-color 0.2s',
      }}
    />
  );
};

export default MouseBall;

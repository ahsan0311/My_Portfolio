import React, { useEffect, useState } from "react";

const TypingEffect = () => {
  const texts = ["Web Developer", "Frontend Developer", "React.js Developer", "MernStack Developer"];
  const [index, setIndex] = useState(0);       // Current text index
  const [subIndex, setSubIndex] = useState(0); // Current character index
  const [deleting, setDeleting] = useState(false); // Typing or deleting
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000); // Pause before deleting
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100); // Faster deleting

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <p style={{ fontSize: "18px", fontWeight: "semibold", color: "#888; ", marginRight : "10px"}} >
      {texts[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0 }}>|</span>
    </p>
  );
};

export default TypingEffect;

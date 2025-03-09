"use client"
import React, { useState, useEffect } from 'react';

const AutoWriteText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [text, speed]);

  return (
    <div style={{ fontFamily: 'Courier, monospace', fontSize: '24px', whiteSpace: 'nowrap', overflow: 'hidden'  }}>
      {displayedText}
      <span style={{ borderRight: '2px solid black', animation: 'blink 0.8s infinite' }}></span>
    </div>
  );
};

export default AutoWriteText;

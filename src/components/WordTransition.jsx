import React, { useState, useEffect } from 'react';

const words = ['Blockchain DApps', 'Websites', 'Flutter Apps', 'ML applications', 'Unity 3D Games'];

const WordTransition = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Use setInterval to change the word every 3 seconds
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="word-transition">
      {words.map((word, index) => (
        <div
          key={index}
          className={`word ${index === currentWordIndex ? 'active' : ''}`}
        >
          {word}
        </div>
      ))}
    </div>
    
  );
};

export default WordTransition;

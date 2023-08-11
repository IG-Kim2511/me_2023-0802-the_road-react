import React, { useState } from 'react'
// import  "./Test.css";



const Test = () => {
    const [isDivVisible, setIsDivVisible] = useState(false);
    const [zIndex, setZIndex] = useState(0);
  
    const toggleDiv = () => {
      setIsDivVisible(prevState => !prevState);
      setZIndex(prevZIndex => (prevZIndex === 0 ? 1 : 0));
    };
  
    return (
      <div className="app">
        <button onClick={toggleDiv} className="toggle-button">
          Toggle Div
        </button>
        <div
          className={`content ${isDivVisible ? 'visible' : ''}`}
          style={{ zIndex }}
        >
          {/* Your div content here */}
          This is the content of the div.
        </div>
      </div>
    );
}

export default Test
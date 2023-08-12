import React, { useState } from 'react';

import './App2.css'

const App2 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(prevVisible => !prevVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {isVisible ? (
        <div className="transition-effect">
          {/* 이곳에 효과를 넣을 컨텐츠 */}
          <h1>gogogo</h1>
        </div>
      ) : null}
    </div>
  );
};

export default App2;

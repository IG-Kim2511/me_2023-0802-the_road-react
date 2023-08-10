import React from 'react'
import "./Header.css";
import balloon from '../assets/air-balloon.png';

const Header = () => {
  return (
    <div>    
    <header className="header center">
        <div className="header-text">
            <h1 className="heading"></h1>
            <p className="header-paragraph">
            "Balloon Traveling"
            </p>
        </div>

        <img
            className="header-image"
            src={balloon}
            alt="Header image"
        />
        <div className="logo">
            <h1>
            <span className="center">t</span>
            <span className="center">h</span>
            <span className="center">e</span>
            <span className="center">r</span>
            <span className="center">o</span>
            <span className="center">a</span>
            <span className="center">d</span>
            </h1>
        </div>
    </header>
    </div>
  )
}

export default Header
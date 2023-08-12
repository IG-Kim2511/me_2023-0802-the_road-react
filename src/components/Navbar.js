import React, { useState } from 'react'
import "./Navbar.css"

import navbarBg from '../assets/navbar-bg.jpg'
import { keyframes, styled } from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const Navbar = () => {


  const styleNavbar ={
    background: `url(${navbarBg})`
  }
  
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  
   const bounceAnimation = keyframes`
  0% {
    top: -100%;
  }
  50% {
    top: 0;
  }
  `;

const NavLink = styled.div`
  /* transition: all 30s ease;        */
  animation: ${bounceAnimation} 5s ease ;
`;




return (
    <div>
  {/*      [navbar] 
       CSS 26 : center 
       js 06  */}
      <div className="open-navbar-icon navbar-icon center" onClick={()=>{setToggle(!toggle)}}>
        <div className="line" ></div>
        <div className="line" ></div>
        <div className="line" ></div>

      </div>

          {/*  [navbar wrap] 클릭해서 x모양으로 바뀔 때 */}
          <div>

            {
              toggle?          
              <div className="navbar-wrapper">
                <nav className="navbar" style={styleNavbar}>
              {/*      CSS 26 : center  */}
                  <div className="close-navbar-icon navbar-icon center" onClick={()=>{setToggle(!toggle)}}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                  </div>
              {/*      js 04  */}
                  <NavLink className="nav-list">
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Home</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Tours</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>About us</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Offer</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Contact</a>
                  </NavLink> 
                </nav>
              </div>
              :null
            }
        
        </div>
    </div>
  )
}

export default Navbar
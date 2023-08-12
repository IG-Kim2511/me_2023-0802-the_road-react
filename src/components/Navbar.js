import React, { useState } from 'react'
import "./Navbar.css"

import navbarBg from '../assets/navbar-bg.jpg'
import { keyframes, styled } from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const Navbar = () => {


  const styleNavbar = {
    background: `url(${navbarBg})`,
    bottom: '0%',
    opacity: 1,

    /* CSS 40 */
    /* The speed of coming up from the bottom, the speed of opacity being applied, delay until being displayed */
    transition: 'bottom 0.5s, opacity 0.2s 0.25s',
  };
  
  const [toggle, setToggle] = useState(false)
  



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
      {/*     {toggle?
            
            :
          } */}

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
                  <div className="nav-list">
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Home</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Tours</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>About us</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Offer</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Contact</a>
                  </div>
                </nav>
              </div>
              :
                <div className="navbar-wrapper">
                  <nav className="navbar" >
                {/*      CSS 26 : center  */}
                    <div className="close-navbar-icon navbar-icon center" onClick={()=>{setToggle(!toggle)}}>
                      <div className="line line-1"></div>
                      <div className="line line-2"></div>
                    </div>
                {/*      js 04  */}
                    <div className="nav-list">
                      <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Home</a>
                      <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Tours</a>
                      <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>About us</a>
                      <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Offer</a>
                      <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Contact</a>
                    </div>
                  </nav>
                </div>
            }
        
        </div>
    </div>
  )
}

export default Navbar
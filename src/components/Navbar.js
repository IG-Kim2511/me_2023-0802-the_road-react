import React, { useState } from 'react'
import "./Navbar.css"

import navbarBg from '../assets/navbar-bg.jpg'
import { styled } from 'styled-components'

const Navbar = () => {


  const styleNavbar ={
    background: `url(${navbarBg})`
  }
  

  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  

  
  const NavLink = styled.div`
        transition: all 3s ease;       
  `;


  // const StyledButton = styled.button`
  //     padding: 10px 20px;
  //     background-color: #3498db;
  //     color: white;
  //     border: none;
  //     cursor: pointer;
  //     transition: background-color 3s ease; /* Specify the property to transition */

  //     &:hover {
  //       background-color: red; /* New value for the property */
  //     }
  //   `;


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
                  <a href="#" className="nav-link center">Home</a>
                  <a href="#" className="nav-link center">Tours</a>
                  <a href="#" className="nav-link center">About us</a>
                  <a href="#" className="nav-link center">Offer</a>
                  <a href="#" className="nav-link center">Contact</a>
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
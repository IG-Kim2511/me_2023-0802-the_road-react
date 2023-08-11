import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <h2></h2>
        <footer className="footer">
            <div className="footer-list">
           {/*  <!-- T: 
                href를 없애면 제자리에서 안움직임.
                #넣으면 맨위로 이동 , 
                '#name' 넣고 "id='name'"넣으면 그곳으로 이동 - JS로 굳이 만들이유가 없이 html로 되는...데??? ;;; --> */}
            <a className="footer-link">Home</a>
            <a href="#" className="footer-link">Tours</a>
            <a
                href="https://www.youtube.com/results?search_query=email+react"
                className="footer-link"
                >About Us</a
            >
            <a href="#" className="footer-link">Offer</a>
            <a href="#contact" className="footer-link">Contact</a>
            </div>
            <p className="footer-paragraph">           
            
            </p>
        </footer>
    </div>
    
  )
}

export default Footer
import React from 'react'

import "./Contact.css"
import contactBg from '../assets/contact-us-bg.png'



const Contact = () => {

    /* 🦄r60 style*/
    /* 🦄r60 style, style을 변수화해서 데이터바인딩 할 수 있음 */
    const contactStyle = {
        background: `url(${contactBg}) center no-repeat`,
        
      };

  return (
    <div>
        {/* 👉r60 */}
        <section className="contact" id="contact" style={contactStyle}>
        <h1 className="contact-heading">Contact me</h1>

    {/*      <!-- T: form. label. input-text,email, textarea,placeholder -->
        <!--  CSS 16: center --> */}
        <form className="contact-form" center action="">
            <div className="input-group">
            <label for="">Full name</label>
            <input
                className="contact-input"
                type="text"
                placeholder="Enter your name"
            />
            </div>
            <div className="input-groups">
            <div className="input-group">
                <label for="">Email</label>
                <input
                className="contact-input"
                type="email"
                placeholder="Enter your email"
                />
            </div>
            <div className="input-group">
                <label for="">Phone</label>
                <input
                className="contact-input"
                type="text"
                placeholder="Enter phone number"
                />
            </div>
            </div>

            <div className="input-group">
            <label for="">Message</label>
            <textarea
                className="form-textarea"
                placeholder="your message here"
                name=""
                id=""
            ></textarea>
            </div>

            {/* <!-- T: submit. value --> */}
            <input className="form-btn" type="submit" value="submit" />
        </form>
        </section>
    </div>
  )
}

export default Contact
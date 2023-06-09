import React from "react";
import "./contact.css";
const Contact = () => {
  return(
    <div className="main_div">
      <form   action="https://formspree.io/f/xyyabjvd" method="POST" className="contact_main_div">
        <div id="contact_main_div" className="contact_div">
        <div className="name_div">
          <input type="text" placeholder="Name" className="name" name='name' />
          <div className="namediv">
          </div>
        </div>
        <div className="email_div">
          <input type="email" placeholder="Email" className="email" name='email' required/>
          <div className="emaildiv">
          </div>
        </div>
        <div className="message_div">
          <input type="text" placeholder="Message" className="message" name='message' />
          <div className="messagediv">
          </div>
        </div>
        <button type="submit" className="submit_button">Submit</button>
        <div className="myemail_div">
          <p className="myemail">daggulamadhu63@gmail.com</p>
          <div className="color_full_line"></div>
        </div>
        </div>
      </form>
      <div id="freelancer_main_div" className="freelancer_main_div">
      <div>
        <div>
          <p className="freelancer_para">Hi,</p>
        </div>
        <h1>Open To work with any one</h1>
      </div>
      </div>
    </div>
  )
};

export default Contact;

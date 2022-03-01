import React from 'react'
import '../styles/Contact.css';
import ContactImage from '../assets/photo.jpeg';

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{backgroundImage: `url(${ContactImage})`}}>
            
        </div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor='name'>Full Name</label>
                <input name="name" type="text" placeholder='Enter Your Name' />
                
                <label htmlFor='email'>Email</label>
                <input name="name" placeholder='Enter Your Email' type="email" />

                <label htmlFor='message'>Message</label>
                
                <textarea name="message" id=" " placeholder="Enter your message" rows="7"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>  
    )
}

export default Contact
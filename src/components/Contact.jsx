import 'animate.css';
import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import linkedin from '../images/linkedin.webp';
import github from '../images/github.png';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    init('DEchiZdcaDwjL5lIo');

    const submit = () => {
      if (name && isValidEmail(email) && message) {
          const serviceId = 'service_60baqok';
          const templateId = 'template_tx8b6pp';
          const templateParams = {
            name,
            email,
            message
          }

          emailjs.send(serviceId, templateId, templateParams).then(response => console.log(response))
          .then(error => console.log(error));
          
          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
      } else {
          alert('Please fill in all fields, and double check your email is correctly formatted');
      }
    }

    const isValidEmail = email => {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(email).toLowerCase());
    };

    return (
      <div className="Contact">
        <div>
          <h1 className="title">CONTACT</h1>
          <input className="contact-input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input className="contact-input" type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
          <textarea rows="8" className="contact-input" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          <div className="Experience-Button">
            <button className="Experience-Button" onClick={submit}>Send Message</button>
          </div>
          <span className={emailSent ? 'visible' : 'hidden'}>Thank you for your message! Here's some cake: 🎂</span>
        </div>

        <div className="contact-links">
            <p>paigethompson150@gmail.com</p>
            <div className="contact-imgs">
              <img src={linkedin} alt="linkedin" />
              <img src={github} alt="linkedin" />
            </div>
          </div>
      </div>
    );
};

export default Contact;
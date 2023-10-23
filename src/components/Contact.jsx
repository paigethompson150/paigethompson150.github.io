import 'animate.css';
import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

const Contact = () => {
  /* Importing Script for Linkedin badge */
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  /* Setting up React Email */
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
          <div>
            <button onClick={submit}>Send Message</button>
          </div>
          <span className={emailSent ? 'visible' : 'hidden'}>Thank you for your message! Here's some cake: 🎂</span>
        </div>

        <div className="contact-links">
            <h3>paigethompson150@gmail.com</h3>
            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="paige-thompson-3973251a1" data-version="v1">
                <a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/paige-thompson-3973251a1?trk=profile-badge">
                </a>
              </div>
            <a target="_blank" href="https://github.com/paigethompson150" rel="noreferrer">
                <img src={github} alt="github" />
            </a>
          </div>
      </div>
    );
};

export default Contact;
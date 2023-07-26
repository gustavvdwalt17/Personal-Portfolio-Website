import React, { useRef } from 'react';
import './Contact.scss'
import { BackgroundWrap } from '../wrapper'
import emailjs from '@emailjs/browser';
const Contact = () => {


      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7udgwfa', 'template_omi6ytn', form.current, 'sIyccsAeNVNv8GvrP')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div>
        <h1 className='app__flex contact__header'>Get in Touch</h1>

        <div className='app__flex'> 

          <div className='contact__text'>

            <h3>Phone</h3>
            <small>0814782248</small>

            <h3>Address</h3>
            <small>Cape Town, South Africa</small>
            <h3>Email</h3>
            <small>goosyvdwalt@gmail.com</small>
          </div>
        
        
        {/* <div className='contact__input'>

          <form ref={form} onSubmit={sendEmail}>
          <input name='user_name' placeholder='name'/>
          <input name='user_email' placeholder='email'/>
       
        <textarea name='message' placeholder='message'/>
   
           <div className='contact__btn'>
        <button>Submit</button>
    
   </div> 
        </form>
        </div> */}
 
 
        </div>

    </div>
  )
}

export default BackgroundWrap(Contact,'blue','contact');
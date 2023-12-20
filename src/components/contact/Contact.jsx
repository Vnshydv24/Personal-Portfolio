import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css' 
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ebplc7v', 'template_5za84cg', form.current, 'tqJJXyxSwXikxaFnQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>  <br /> <br />
    <h5> Get in Touch </h5>
    <h2> Contact Me </h2>    
    <div className='container contact__container'>
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>yashyadav242@gmail.com</h5>
          <a href="mailto:yashyadav242@gmail.com"> Send a Message </a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Vansh Yadav</h5>
          <a href="https://m.me/vanshyadav.714049/"> Send a Message </a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 xxxxxxxxxx</h5>
          <a href="https://api.whatsapp.com/send?phone=918958049908"> Send a Message </a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Fulll Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required> </textarea>
        <button type="submit" className='btn btn-primary'> Send Message </button>
      </form>
    </div>
    </section>
  )
}

export default Contact
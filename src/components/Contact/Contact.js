import React from 'react'
import './Contact.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SERVICE_ID = "service_7i4fl6q";
const TEMPLATE_ID = "template_8vkchnb";
const PUBLIC_KEY = "PK0qBAgkdGRfZ817S"

const Contact = () => {
  const form = useRef();

  const notify = () => {
    toast.success('Message Sent!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        notify();
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section data-aos="fade-bottom" data-aos-delay="100" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" id="contact">
      <ToastContainer />
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>randomuser@gmail.com</h5>
            <a href="mailto:randomuser@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>user1</h5>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=16479871234" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" autoComplete='off' name='name' placeholder='Your Full Name' required />
          <input type="email" autoComplete='off' name='email' placeholder='Your Email' required />
          <textarea name="message" autoComplete='off' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
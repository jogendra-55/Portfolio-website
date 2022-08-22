import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiWhatsapp} from 'react-icons/si'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
 


const Contact = () => {
  const form=useRef();

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_m188hkh', 'template_f7d4bwf', form.current,'OAZUBOhCT-UfO2Hqg')

    e.target.reset()
    
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>jogendrabalotiya61@gmial.com</h5>
            <a href="mailto:jogendrabalotiya61@gmail.com" target='__blank'>Send a message</a>
          </article>
          {/* <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Jogendra Balotiya</h5>
            <a href="jogendrabalotiya61@gmail.com" target='__blank'>Send a message</a>
          </article> */}
          <article className="contact_option">
            <SiWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>7900119158</h5>
            <a href="https://api.whatsapp.com/send?phone=7900119158" target='__blank' >Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
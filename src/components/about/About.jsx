import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { TiFolderOpen } from 'react-icons/ti'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__img">

          <div className="about_me_img">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <artice className="about_card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>0 year .</small>
            </artice>
            <artice className="about_card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Not yet.</small>
            </artice>
            
              <artice className="about_card">
                <TiFolderOpen className='about__icon' />
                <a href="/myprojects"  ><h5>Projects</h5></a>
                <small>3+ projects completed</small>
              </artice>
            

          </div>
          <p>
            Myself Jogendra Balotiya, currently pursuing BE degree in Electronics Engineering from Vivekanand
            Eduaction Soceity's Institute of Technology(VESIT). I am very thrilled and excited to work in Full Stack Development Domain.
            I love to build beautiful, professional , responsive websites using latest technologies. For building websites, my weapons of choice
            are HTML, CSS, React, Javascript for Frontend whereas for Backened I prefer to use Django Framework as of now.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About
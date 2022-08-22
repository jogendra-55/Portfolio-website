import React from 'react'
import './Services.css'
import {TiTick} from 'react-icons/ti'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer </h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <TiTick className='service__list-icon'/>
              <p>React : To build single page application.</p>
            </li>
            <li>
              <TiTick className='service__list-icon'/>
              <p>Javascript : To build different dynamic website.</p>
            </li>
            <li>
              <TiTick className='service__list-icon'/>
              <p>HTML , CSS ,Bootstrap.</p>
            </li>
            <li>
              <TiTick className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TiTick className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TiTick className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <TiTick className='service__list-icon'/>
              <p>Django : To create large application/website.</p>
            </li>
            <li>
              <TiTick className='service__list-icon'/>
              <p>NodeJs : To build scalable applications.</p>
            </li>
            <li>
              <TiTick className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TiTick className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TiTick className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TiTick className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB-DEVELPT */}
        
      </div>

    </section>
  )
}

export default Services
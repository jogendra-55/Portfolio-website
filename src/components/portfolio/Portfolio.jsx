import React from 'react'
import './Portfolio.css'
import M1 from '../../assets/Mart_1.jpeg'
import C1 from '../../assets/Chat_app_1.jpeg'
import E1 from '../../assets/E_1.jpeg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={M1} alt="" />
          </div>
          <h3>AJPS Mart</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jogendra-55/AJPS-Mart" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com/jogendra-55" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={E1} alt="" />
          </div>
          <h3>Color Identifier</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jogendra-55/Chrome_Extension-Color_Identifier" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com/jogendra-55" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={C1} alt="" />
          </div>
          <h3>Chat Application</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jogendra-55" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com/jogendra-55" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        
        
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio6.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ChatGPT Clone',
    github: 'https://chatgpt-clone-zf6s.onrender.com',
    demo: 'https://youtu.be/ki2X6bPT75w'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Sentimental Feedback Recorder',
    github: 'https://github.com/Vnshydv24/Sentimental_Analysis_Feedback',
  },
  {
    id: 6,
    image: IMG3,
    title: 'Real-Time Weather Checker',
    github: 'https://github.com/Vnshydv24',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <br />
      <br />
      <br />
      <h5> My Recent Work </h5>
      <h2> Projects </h2>
      <div className="containter portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"> 
                <img src= {image} alt= {title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio__item-cta">
              <a href = {github} className='btn' target='_blank' rel="noreferrer"> Github </a> 
              <a href = {demo} className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsJournalCode} from 'react-icons/bs'
import {FaUniversity} from 'react-icons/fa'
import {BiHomeAlt} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'> <br/>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src = {ME} alt = "About"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
              <article className='about__card'>
                <BsJournalCode className='about__icon' />
                <h5> Student </h5>
                <small> Computer Science Engineer </small>
                </article>

              <article className='about__card'>
                <FaUniversity className='about__icon' />
                <h5> College </h5>
                <small> Chandigarh University </small>
                </article>

              <article className='about__card'>
                <BiHomeAlt className='about__icon' />
                <h5> Residence </h5>
                <small> Haridwar, Uttarakhand </small>
                </article>
          </div>

          <p> A well-organized and goal-oriented graduate possessing problem-solving and 
              leadership skills with a flair to explore suitable avenues in Computer Science 
              Engineering while developing advanced projects with efficiency and quality.
          </p>

          <center> <a href='#contact' className='btn btn-primary'> Let's Talk </a> </center>
          
        </div>
      </div>
    </section>
  )
}

export default About
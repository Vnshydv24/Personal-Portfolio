import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <br /> 
       <h2> What Skills I Have </h2>
       
       <div className='container experience__container'>

          <div className="experience__frontend">
            <h3> Frontend Development </h3>
            <div className='experience__content'> 
              <article className='experience__details'>
               <BsFillCheckCircleFill className='experience__details-icon' /> 
                <div>
                  <h4> HTML </h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> CSS </h4>
                </div>
              </article>
              <article className='experience__details'>
               <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> JavaScript </h4>
                </div>
              </article>
              <article className='experience__details'>
               <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> ReactJS </h4>
                </div>
              </article>
              <article className='experience__details'>
               <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> BootStrapCSS </h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> TailwindCSS </h4>
                </div>
              </article>
            </div>
          </div>

          <div className="experience__backend">
            <h3> Backend Development </h3>
            <div className='experience__content'>   
              <article className='experience__details'>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> NodeJS </h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> MongoDB </h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> SQL </h4>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> Python </h4>
                </div>
              </article>
            </div>
          </div>

          <div className="experience__frontend">
            <h3> Data Science Tools </h3>
            <div className='experience__content'> 
              <article className='experience__details'>
               <BsFillCheckCircleFill className='experience__details-icon' /> 
                <div>
                  <h4> Hadoop </h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> WEKA </h4>
                </div>
              </article>
              <article className='experience__details'>
               <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> IBM Cognos </h4>
                </div>
              </article>
              <article className='experience__details'>
               <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> IBM SPSS Modeller </h4>
                </div>
              </article>
              <article className='experience__details'>
               <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> MS Excel </h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> Jupyter Notebook </h4>
                </div>
              </article>
            </div>
          </div>

          <div className="experience__frontend">
            <h3> Python Libraries </h3>
            <div className='experience__content'> 
              
              <article className='experience__details'>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> NLTK </h4>
                </div>
              </article>
              <article className='experience__details'>
               <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> Pandas </h4>
                </div>
              </article>
              <article className='experience__details'>
               <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> Numpy </h4>
                </div>
              </article>
              <article className='experience__details'>
               <BsFillCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4> Flask </h4>
                </div>
              </article>
            </div>
          </div>

      </div>
    </section>
  )
}

export default Experience
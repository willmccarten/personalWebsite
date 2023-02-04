import React from 'react'
import './about.css'
import ME from '../../assets/me_plusFam.JPG'
import {MdWork} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {ImCamera} from 'react-icons/im'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWork className='about__icon'/>
              <h5>Experience</h5>
              <small>Looking Still Lol</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>This Website</small>
            </article>

            <article className="about__card">
              <ImCamera className='about__icon'/>
              <h5>Hobbies</h5>
              <small>Photography, Hiking, Sports</small>
            </article>
          </div>

          <p>
            I am a third year computer science student at the University of Florida, with an expected graduation of May of 2024.
            I am currently in search of an software engineering internship for the summer of 2023. My interests include web development, mobile development, and UX Design.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
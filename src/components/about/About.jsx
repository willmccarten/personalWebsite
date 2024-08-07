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
              <small>Project Management, Business Analyst, Client Services, check out CV for more!</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>Gator Atlas, Project A.M.A.N., Portfolio Website, More coming soon!</small>
            </article>

            <article className="about__card">
              <ImCamera className='about__icon'/>
              <h5>Hobbies</h5>
              <small>Photography, Hiking, Sports, Design</small>
            </article>
          </div>

          <p>
            I am a fourth year computer science student at the University of Florida, with an expected graduation of May of 2024.
            I am currently in search of a full-time software development, technology analyst, business anlayst, or project management position starting the summer of 2024. My professional interests include Web Development, Artificial Intelligence, and UX Design.
            In my free time, I enjoy street and nature photography, hiking, and playing sports with friends.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
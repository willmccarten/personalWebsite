import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Will McCarten</a>

      <ul className='permalinks'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/*
        <li>
          <a href="#services">Services</a>
        </li>
        */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/*
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        */}
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href='https://linkedin.com/in/william-mccarten' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/willmccarten' target="_blank" rel='noreferrer'><BsGithub/></a>
      </div>

      {/*
        <div className="footer__copyright">
          <small>&copy; EGATOR Tutorials. All rights reserved.</small>
        </div>
      */}
    </footer>
  )
}

export default Footer
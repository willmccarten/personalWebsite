import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive application what look great on all devices</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Flexible and creative solutions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Everything you see on this site, I can do for you</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Content Creation?</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Put some words here about my stuff</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/atlas.PNG'
import IMG2 from '../../assets/aman.PNG'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 2,
    image: IMG1,
    title: 'Gator Atlas',
    github: 'https://github.com/matbensch/DragonBallSWE',
    demo: 'https://youtu.be/76k2--H7xm8'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Project A.M.A.N.',
    github: 'https://github.com/jkirkland722/Project-AMAN',
    demo: 'https://youtu.be/aN7y0A3oTF0'
  },

  /*
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Item 3',
    github: 'https://github.com/willmccarten',
    demo: 'https://github.com/willmccarten'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio Item 4',
    github: 'https://github.com/willmccarten',
    demo: 'https://github.com/willmccarten'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio Item 5',
    github: 'https://github.com/willmccarten',
    demo: 'https://github.com/willmccarten'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio Item 6',
    github: 'https://github.com/willmccarten',
    demo: 'https://github.com/willmccarten'
  }
  */

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <Swiper className="container portfolio__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}>

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <SwiperSlide key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>

      
    </section>
  )
}

export default Portfolio
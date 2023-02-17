import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Item 1',
    github: 'https://github.com/willmccarten',
    demo: 'https://github.com/willmccarten'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio Item 2',
    github: 'https://github.com/willmccarten',
    demo: 'https://github.com/willmccarten'
  },
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
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>

                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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
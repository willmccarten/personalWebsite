import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Testimonials from './components/testimonials/Testimonials'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'

/// Blob mouse JS stuff
const blob = document.getElementById('blob')
document.body.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: 'forwards'});
} 


const App = () => {
  return (
    <>
        <div id='blob'></div>
        <div id='blur'></div>
        <Header />
        <Nav />
        <About />
        <Experience />
        {/*<Services />*/}
        <Portfolio />
        {/*<Testimonials />*/}
        <Contact />
        <Footer />
    </>
  )
}

export default App

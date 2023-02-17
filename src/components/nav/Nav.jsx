import React from 'react'
import './nav.css'
import {IoIosHome} from 'react-icons/io'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'
import {BiCodeAlt} from 'react-icons/bi'
import {FiBriefcase} from 'react-icons/fi'
import {BsHouse} from 'react-icons/bs'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className="nav">
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BsHouse/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiCodeAlt/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FiBriefcase/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav
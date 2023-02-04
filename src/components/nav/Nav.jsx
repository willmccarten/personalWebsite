import React from 'react'
import './nav.css'
import {IoIosHome} from 'react-icons/io'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav className="nav">
      <a href="#header"><IoIosHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BsBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contacts"><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav
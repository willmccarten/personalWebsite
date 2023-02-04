import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/william-mccarten' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/willmccarten' target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href='https://twitter.com/willmccarten' target="_blank" rel='noreferrer'><FaTwitterSquare/></a>
    </div>
  )
}

export default HeaderSocials
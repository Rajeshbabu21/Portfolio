import React from 'react'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://github.com/Rajeshbabu21'
        className='home__social-icon'
        target='__blank'
      >
        <FaGithub />
      </a>

      <a
        href='https://www.linkedin.com/in/rajeshbabu2004/'
        className='home__social-icon'
        target='__blank'
      >
        <FaLinkedin />
      </a>

      <a href='' className='home__social-icon' target='__blank'>
        <FaInstagram />
      </a>
    </div>
  )
}

export default Social
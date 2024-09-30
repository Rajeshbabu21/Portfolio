import React from 'react'
// import { LuAward } from 'react-icons/lu'
import { PiCertificate } from 'react-icons/pi'
import { FiBriefcase } from 'react-icons/fi'
import { FaHeadphonesAlt } from 'react-icons/fa'
import {Link} from "react-router-dom"
import './about.css'
const Intro = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <h3 className='about__title'>
          <span className='about__icon'>
            <PiCertificate />
          </span>
          Certificate
        </h3>
        <span className='about__subtitle'>1 Earned</span>
      </div>

      <div className='about__box'>
        <h3 className='about__title'>
          <span className='about__icon'>
            <FiBriefcase />
          </span>
          Completed
        </h3>
        <span className='about__subtitle'>3 Projects</span>
      </div>

      <Link to='/contact' className=''>

      <div className='about__boxc'>
        <span className='about__icon'>
          <FaHeadphonesAlt />
        </span>
        <h3 className='about__title'>Contact</h3>
        <span className='about__subtitle'>Online 24/7</span>
      </div>
      </Link>
    </div>
  )
}

export default Intro
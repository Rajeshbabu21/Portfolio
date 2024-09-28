import React from 'react'
// import Profile from "../../assets/home.jpg" 
// import Profile from '../../assets/home.jpg'
import Profile from "../../assets/home.jpg"

import {Link} from "react-router-dom"
import { FaArrowRight } from 'react-icons/fa'
import "./home.css"

const Home = () => {
  return (
    <section className='home grid section'>
      <img src={Profile} alt='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Rajeshbabu.</span>
            Front-End Developer & DSA Enthusiast
          </h1>

          <p className='home__description'>
            Hey there! I'm Rajeshbabu, a Front-End Developer and DSA Enthusiast.
            I build clean, responsive websites with HTML, CSS, React.js, and
            Tailwind CSS. With a passion for problem-solving through Data
            Structures and Algorithms in JAVA, I aim to create impactful software. Let’s
            create something awesome together!
          </p>

          <Link to="/about" className='button'>
          More About Me {' '}
          <span className='button__icon'>
            <FaArrowRight />
          </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
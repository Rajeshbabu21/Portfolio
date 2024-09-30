import React from 'react'
// import Profile from "../../assets/home.jpg"
// import Profile from '../../assets/home.jpg'
import Profile from '../../assets/home1.jpeg'

import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'

const Home = () => {
  return (
    <section className='home grid section'>
      <img src={Profile} alt='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Rajeshbabu.</span>
            <pre></pre>
            Front-End Developer & DSA Enthusiast
          </h1>

          <p className='home__description'>
            I'm a passionate and dedicated front-end developer with a strong
            interest in Data Structures and Algorithms.
          </p>

          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className='color__block'></div>
    </section>
  )
}

export default Home

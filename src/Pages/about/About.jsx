import React from 'react'
import "./about.css"
// import Photo from "../../assets/about
import Photo from "../../assets/about.png"
import CV from "../../assets/steve-Cv.pdf"
import Info from '../about/Intro'
import { SlEnvolopeLetter } from 'react-icons/sl'

const About = () => {
  return (
    <section className='about section' id='about'>
      <h1 className='section__title'>About Me</h1>
      {/* <span class='underline'></span> */}
      <div class='underline'></div>
      <span className='section__subtitle'>My Introduction</span>

      

      <div className='about__container container '>
        <img src={Photo} alt='' className='about__img' />

        <div className='about__data'>
          <Info />

          <p className='about__description'>
            I'm Rajeshbabu, an aspiring Front-end Developer from Chennai, India,
            currently pursuing a Bachelor's degree in Information Technology at
            the College of Engineering, Guindy. I specialize in building clean,
            responsive websites using HTML, CSS, React.js, and Tailwind CSS.
            With a strong passion for problem-solving through Data Structures
            and Algorithms in Java, my goal is to create impactful software that
            makes a difference.
            <pre className='tospan'></pre>
            <span className='together'>
              Let’s create something awesome together!
            </span>
            <pre></pre>
            <a download='' href={CV} className='button button--flex'>
              <span className='letter'>
                Download CV{' '}
                <span className='letter_sym'>
                  <SlEnvolopeLetter />
                </span>
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
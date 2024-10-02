import React from 'react'
import './about.css'
import { FaGraduationCap } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'

const Qualification = () => {
  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <div className='underline'></div>
      <span className='section__subtitle'>My Personal Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div className='qualification__button qualification__active button--flex'>
            <span>
              <FaGraduationCap />
              Education
            </span>
          </div>
        </div>

        <div className='qualification__sections'>
          <div className='qualification__content qualification__content-active'>
            {/* First Qualification Entry */}
            <div className='qualification__data'>
              <div className='college'>
                <h3 className='qualification__title'>
                  College of Engineering - Guindy, Anna University
                </h3>
                <span className='qualification__subtitle'>
                  Pursuing MSc Integrated Information Technology
                </span>
                <div className='qualification__calender'>
                  <span className='qualification__icon'>
                    <SlCalender />
                    <span  className='year'>2023-2027</span>
                  </span>
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* Second Qualification Entry */}
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>
                  Infact Jesus Matric Higher Secondary School
                </h3>
                <span className='qualification__subtitle'>
                  From 11th standard to 12th standard
                </span>
                <div className='qualification__calender'>
                  <span className='qualification__icon'>
                    <SlCalender />
                    <span  className='year'>2020-2022</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Third Qualification Entry */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  A.V.P. Trust Matric Higher Secondary School
                </h3>
                <span className='qualification__subtitle'>
                  From 7th standard to 10th standard
                </span>
                <div className='qualification__calender'>
                  <span className='qualification__icon'>
                    <SlCalender />
                    <span  className='year'>2017-2020</span>
                  </span>
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* Fourth Qualification Entry */}
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>
                  Prema Matric Higher Secondary School
                </h3>
                <span className='qualification__subtitle'>
                  From 1st standard to 6th standard
                </span>
                <div className='qualification__calender'>
                  <span className='qualification__icon'>
                    <SlCalender />
                    <span className='year'>2009-2015</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification

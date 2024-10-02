import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  

} from "react-icons/fa"
import {FiSend} from "react-icons/fi"

import "./contact.css"


const Contact = () => {
  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In <span>Touch</span>
        <div className='underline'></div>
      </h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be Shy!</h3>

          <p className='contact__description'>
            I am interested in Internship opportunities Feel free to reach out
            to me anytime. Iam always open to discuss new projects,creative
            ideas or oppurtunities to be part of your visions.
          </p>

          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>rajeshsekar062004@gmail.com</h4>
              </div>
            </div>

            {/* second */}

            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>9159423290</h4>
              </div>
            </div>
          </div>

          <div className='contact__socials'>
            <a href='' className='contact__social-link'>
              <FaGithub />
            </a>

            <a href='' className='contact__social-link'>
              <FaLinkedin />
            </a>

            <a href='' className='contact__social-link'>
              <FaInstagram />
            </a>
          </div>
        </div>

        <form className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input
                type='text'
                placeholder='Your Name'
                className='form__control'
              />
            </div>

            {/* second */}
            <div className='form__input-div'>
              <input
                type='email'
                placeholder='Your Email'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type='text'
                placeholder='Your Subject'
                className='form__control'
              />
            </div>
          </div>

          {/* fourth */}
          <div className='form__input-div'>
            <textarea
              className='form__control textarea'
              placeholder='Your Message'
            ></textarea>
          </div>

          <button className='button'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
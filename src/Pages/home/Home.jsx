import React from 'react'
import Profile from "../../assets/home1.jpeg"
import Social from "./Social"

import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
import Data from "./Data"


const Home = () => {
  return (

    <section className="home section" id = "home">
      <div className="home__container container grid">
        <div className="home__content grid">
            <Social/>


            <div className="home__img">
              {/* <img src={Profile} alt="" /> */}

            </div>


            <Data/>
        </div>
      </div>
    </section>
    
  )
}

export default Home

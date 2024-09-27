import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import "./App.css"

// for routing
import Navbar from "./components/Navbar"

import Home from "./Pages/home/Home"
import About from "./Pages/about/About"
import Contact from "./Pages/contact/Contact"
import Portfolio from "./Pages/portfolio/Portfolio"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element = {<Home/>} />
      <Route path = "about" element = {<About/>}/>
      <Route path = "portfolio" element = {<Portfolio/>}/>
      <Route path = "contact" element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Work from '../component/Work'
import Skills from '../component/Skills'
import About from '../component/About'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Work/>
    <Skills/>
    <About/>
    </div>
  )
}

export default Home
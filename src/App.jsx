import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import About from './components/about'
import Summary from './components/summary'
import Skills from './components/skills'
import LookingFor from './components/lookingFor'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
function App() {

  return (
    <>
    <Navbar/>
    <About/>
    <Summary/>
    <Skills/>
    <LookingFor/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

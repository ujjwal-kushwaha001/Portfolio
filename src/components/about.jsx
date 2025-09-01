import React from 'react'
import '../App.css'
import photo from '../assets/photo.jpg'
import Resume from '../assets/Resume/UjjwallResume.pdf'

import javascript from '../assets/javascript.png'
import css from '../assets/css.svg'
import html from '../assets/html.png'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.svg'

const About = () => {
  return (
    <>
      <div  className="about-section d-flex justify-content-between  min-vh-55 bg-primary my-5">
        <div className="left-content d-flex flex-column mt-2">
            <h1>Ujjwal Kushwaha</h1>
            <h3>Web Developer</h3>
            <p>I'm passionate about -</p>
            <div className="lang-logo d-flex gap-2">
              <img src={html} width={50} alt="" />
              <img src={css} width={50} alt="" />
              <img src={javascript} width={50} alt="" />
              <img src={react} width={50} alt="" />
              <img src={tailwind} width={50} alt="" />
              <img src={bootstrap} width={50} alt="" />
            </div>
            <div className="button my-4">
              <a className=' text-decoration-none text-black' href={Resume}><button className=' px-4 py-2 border-0'>Download CV</button></a>
            </div>
        </div>
        <div className="right-image d-flex align-items-center">
            <img className='photo position-relative top-3' src={photo} alt="" />
        </div>
      </div>
    </>
  )
}

export default About

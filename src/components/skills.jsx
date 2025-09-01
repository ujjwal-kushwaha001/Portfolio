import React from 'react'
import '../App.css'

const skills = () => {
  return (
    <>
      <div className="skill w-80 m-auto">
        <h4>Skill</h4>
        <div className=" d-flex flex-column py-3 gap-3">
            <div className="d-flex align-items-center justify-content-between gap-2">
                HTML
            <input className='w-75' type="range" name="html" id="html" value={90}/>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
                CSS
            <input className='w-75' type="range" name="css" id="css" value={80}/>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
                JS
            <input className='w-75' type="range" name="js" id="js" value={60}/>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
                React.js
            <input className='w-75' type="range" name="react" id="react" value={60}/>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
                Tailwind CSS
            <input className='w-75' type="range" name="tailwind" id="tailwind" value={80}/>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
                Bootstrap
            <input className='w-75' type="range" name="bootstrap" id="bootstrap" value={80}/>
            </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default skills

import React from 'react'

const navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar d-flex align-items-center px-5">
            <div className="logo display-6">U Works</div>
            <div className="lists">
                <ul className='d-flex m-0 gap-3 list-unstyled'>
                    <li className='cursor-pointer'><a className='text-decoration-none text-secondary' href="#home">Home</a></li>
                    <li className='cursor-pointer'><a className='text-decoration-none text-secondary' href="#about">About</a></li>
                    <li className='cursor-pointer'><a className='text-decoration-none text-secondary' href="#projects">Projects</a></li>
                    <li className='cursor-pointer'><a className='text-decoration-none text-secondary' href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default navbar

import React from 'react'

const footer = () => {
  return (
    <>
      <div className="footer w-100 bg-primary d-flex flex-column align-items-center p-5">
        <div className="m-3 d-grid grid-temp-col gap-2">
            <div className=""><a className='text-dark gap-1 d-flex align-items-center text-decoration-none' href="https://github.com/ujjwal-kushwaha001"><i className="fa-brands fa-github"></i>GitHub</a></div>
            <div className=""><a className='text-dark gap-1 d-flex align-items-center text-decoration-none' href="https://www.linkedin.com/in/ujjwal-kushwaha001/"><i className="fa-brands fa-linkedin"></i>LinkedIn</a></div>
            <div className=""><a className='text-dark gap-1 d-flex align-items-center text-decoration-none' href=""><i className="fa-brands fa-instagram"></i>Instagram</a></div>
            <div className=""><a className='text-dark gap-1 d-flex align-items-center text-decoration-none' href=""><i className="fa-brands fa-facebook"></i>Facebook</a></div>
            <div className=""><a className='text-dark gap-1 d-flex align-items-center text-decoration-none' href=""><i className="fa-brands fa-x-twitter"></i>Twitter</a></div>
        </div>
        <div className="min-h-1px w-75 bg-secondary"></div>
        <div className="d-flex justify-content-center m-3">
            &copy; Copyright 2025, U Works
        </div>
      </div>
    </>
  )
}

export default footer

import React from 'react'

const footer = () => {
  return (
    <>
      <div className="footer w-100 bg-primary d-flex flex-column align-items-center p-5">
        <div className="m-3 d-grid grid-temp-col gap-2">
            <div className="d-flex align-items-center gap-1"><i class="fa-brands fa-github"></i>GitHub</div>
            <div className="d-flex align-items-center gap-1"><i class="fa-brands fa-linkedin"></i>LinkedIn</div>
            <div className="d-flex align-items-center gap-1"><i class="fa-brands fa-instagram"></i>Instagram</div>
            <div className="d-flex align-items-center gap-1"><i class="fa-brands fa-facebook"></i>FaceBook</div>
            <div className="d-flex align-items-center gap-1"><i class="fa-brands fa-x-twitter"></i>Twitter</div>
            <div className="d-flex align-items-center gap-1"></div>
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

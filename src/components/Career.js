import React from 'react'
import ErrorPage from "../assets/images/Error-Page.png"


function Career() {
  return (
    <div className='ErrorImage row d-flex justify-content-center align-items-center '>
       <img src={ErrorPage} alt='Image Not Found' className='col-sm-12 col-md-4 col-lg-4'  />
    </div>
  )
}

export default Career
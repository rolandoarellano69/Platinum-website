import React from 'react'

const Tour360 = () => {
  return (
    <div id='Tour360'className='bg-white '>
      <h1 className='text-center text-thin text-[36px] p-8'>360° <span className='text-[#1c2e60]'>TOUR</span>
         </h1>
      <iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/collection/7JqlK?logo=-1&card=1&info=0&fs=1&vr=1&zoom=1&autorotate=0.08&thumbs=1&inst=es" className='md:p-8  border-[#1c2e60] bg-white'>
      </iframe>
    </div>
  )
}

export default Tour360
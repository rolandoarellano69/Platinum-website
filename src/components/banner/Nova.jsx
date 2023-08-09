import React from 'react'
import NovaPlusPeek from '../../assets/image/PLATINUM CON TERRAZA 4K.JPG'
const Nova = () => {

  return (
    <div className="grid grid-cols-3 grid-rows-1 ">
      <div className='border-r-8 border-[#1c2e60] col-span-2' >
        <img src={NovaPlusPeek} alt="" />
        
      </div>
      <div className='border-l-8 border-[#1c2e60]'>
        <div>
        <h3>Modelo</h3>
        <h1>NOVA</h1>

        </div>
        <h3>Modelo</h3>
        <h1>NOVA</h1>


      </div>
    </div>
  )
}

export default Nova
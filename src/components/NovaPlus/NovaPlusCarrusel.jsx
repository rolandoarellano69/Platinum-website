import React from 'react'
import NovaPlusN1 from '../../assets/image/NIVEL 1 PLATINUM.png'
import NovaPlusN2 from '../../assets/image/PLANTA ALTA PLATINUM.png'
import NovaPlusN3 from '../../assets/image/ROOFTOPLATINUM.png'




function NovaPlusCarrusel() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-0">
      <div className='bg-white'>Caracteristicas</div>
      <div className='bg-red-500'>Imagenes modelo
        <div className="grid grid-cols-3 grid-rows-1 gap-4 bg-[#404040]">
          <div ><img src={NovaPlusN1} alt="" />
          <div className='bg-gray-500 relative'>Planta Baja</div>
          </div>
          <div ><img src={NovaPlusN2} alt="" />
          <div className='bg-gray-500 relative'>Planta Alta</div>
          </div>
          <div ><img src={NovaPlusN3} alt="" />
          <div className='bg-gray-500 relative'>Roof Top</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NovaPlusCarrusel
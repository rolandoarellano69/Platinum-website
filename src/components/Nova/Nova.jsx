import React from 'react'
import NovaPeek from '../../assets/image/PLATINUM SIN TERRAZA 4K.JPG'
import CamaPeek from '../../assets/image/iconos platinum-01.png'
import GanchoPeek from '../../assets/image/iconos platinum-02.png'
import LavaPeek from '../../assets/image/iconos platinum-03.png'
import CocheraPeek from '../../assets/image/iconos platinum-04.png'
import NameNovaPeek from '../../assets/image/iconos atributos-16.png'
const Nova = () => {
  return (
    <div className="bg-white border-t-[20px] border-[#1c2e60]  ">
      <div className="md:flex md:justify-between">
        <div className="md:w-2/3 md:pr-4">
          <img src={NovaPeek} alt="Nova" className="w-full h-full shadow-md" />
        </div>
        <div className="md:w-1/3 md:pl-4">
          <div className="text-center pt-6">
            <img src={NameNovaPeek} alt="Nova" className="h-auto mx-auto mb-4" />
          </div>
          <h3 className="text-center text-2xl md:text-6xl font-thin mb-4">Atributos</h3>
          <hr className="w-16 h-1 mx-auto my-2 mt-8 bg-[#1c2e60]" />
          <div className="grid grid-cols-2 gap-4  md:mt-20 mt-8 md:grid-cols-1 md:gap-4 text-center">
            <div className="flex items-center justify-center mt-4  gap-8 ">
              <img src={CamaPeek} alt="Cama" className="w-16 md:w-28 h-auto" />
              <img src={GanchoPeek} alt="Gancho" className=" w-16 md:w-28 h-auto " />
            </div>
            <div className="flex items-center justify-center mt-4 gap-8 ">
              <img src={LavaPeek} alt="Lava" className="w-16 md:w-28 h-auto " />
              <img src={CocheraPeek} alt="Cochera" className=" w-16 md:w-28 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nova
import React from 'react'
import NovaPlusPeek from '../../assets/image/PLATINUM CON TERRAZA 4K.JPG'
import CamaPeek from '../../assets/image/iconos platinum-01.png'
import GanchoPeek from '../../assets/image/iconos platinum-02.png'
import LavaPeek from '../../assets/image/iconos platinum-03.png'
import CocheraPeek from '../../assets/image/iconos platinum-04.png'
import TerrazaPeek from '../../assets/image/iconos platinum-05.png'
import NovaPlusNamePeek from '../../assets/image/iconos atributos platinum-06-06.png'

const NovaPlus = () => {

  return (
    <div className="bg-white border-t-[20px] border-[#1c2e60]">
      <div className="md:flex md:justify-between">
        <div className="md:w-2/3 md:pr-4">
          <img src={NovaPlusPeek} alt="Nova Plus" className="w-full h-full shadow-2xl" />
        </div>
        <div className="md:w-1/3 md:pl-4">
          <div className="text-center pt-6 mb-10">
            <img src={NovaPlusNamePeek} alt="Nova Plus" className="w-[60%] h-auto mx-auto mb-4" />
          </div>
          <h3 className="text-center text-2xl md:text-6xl font-thin mb-4">Atributos</h3>
          <hr className=" w-16 h-1 mx-auto my-2 mt-8 bg-[#1c2e60]" />

          <div className="flex flex-col md:mt-24 mt-8 pb-2 items-center justify-center space-y-4">
            {/* Primer conjunto de imágenes */}
            <div className="flex justify-center items-center w-full md:w-1/2 space-x-4">
              <img src={CamaPeek} alt="Cama" className="w-14 md:w-28 h-auto" />
              <img src={GanchoPeek} alt="Gancho" className="w-14 md:w-28 h-auto" />
            </div>

            {/* Segundo conjunto de imágenes */}
            <div className="flex justify-center items-center w-full md:w-1/3 space-x-4">
              <img src={LavaPeek} alt="Lava" className="w-14 md:w-28 h-auto" />
              <img src={CocheraPeek} alt="Cochera" className="w-14 md:w-28 h-auto" />
              <img src={TerrazaPeek} alt="Terraza" className="w-14 md:w-28 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NovaPlus
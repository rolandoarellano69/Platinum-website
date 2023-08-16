import React from 'react'
import EntradaPeek from '../../assets/image/ACCESO SALIDA PLATINUM 4K.jpg'
import AmenidadesPeek from '../../assets/image/iconos atributos platinum-14.png'
import AccsControlPeek from '../../assets/image/iconos atributos platinum-07.png'
import BardaperiPeek from '../../assets/image/iconos atributos platinum-08.png'
import UbicacionPeek from '../../assets/image/iconos atributos platinum-09.png'
import AreasVerdesPeek from '../../assets/image/iconos atributos platinum-10.png'
import VideoVigiPeek from '../../assets/image/iconos atributos platinum-11-11.png'
import ParkingPeek from '../../assets/image/icono estacionamiento.png'
import IconAmenidadesPeek from '../../assets/image/iconos atributos platinum-13.png'

const Amenidades = () => {
  return (
    <div className='bg-white  w-full h-full p-8 border-t-[20px] border-[#1c2e60]'>
      <div className='md:hidden grid grid-cols-1 gap-2 justify-center'>
        {/* Organizar las imágenes en parejas */}
        <div className='flex justify-center items-center'>
          <img src={IconAmenidadesPeek} alt='Icono Amenidades' className='w-full ' />
        </div>
        <div className='w-2/4 p-4 '>
          <div className='flex gap-8  '>
            <img src={UbicacionPeek} alt='Ubicación' className='w-full' />
            <img src={AreasVerdesPeek} alt='Áreas Verdes' className='w-full' />
          </div>
          <div className='flex gap-8 '>
            <img src={BardaperiPeek} alt='Estacionamiento' className='w-full' />
            <img src={VideoVigiPeek} alt='Video Vigilancia' className='w-full' />
          </div>
          <div className='flex gap-8'>
            
            <img src={AccsControlPeek} alt='Video Vigilancia' className='w-full' />
            <img src={ParkingPeek} alt='Estacionamiento' className='w-full h-auto' />
          </div>

        </div>

      </div>

      <div className='hidden md:grid grid-cols-1 '>
        {/* Imágenes en modo escritorio */}
        <img src={EntradaPeek} alt='Entrada' className='w-full h-auto' />
        <div className='bg-white w-full h-full  '>
          <img src={AmenidadesPeek} alt='Amenidades' className='w-auto h-auto ' />
        </div>
      </div>
      {/* <img src={EntradaPeek} alt="" className=''/>
    <div className='bg-white w-full h-full  border-t-[20px] border-[#1c2e60]'> 
    <img src={AmenidadesPeek} alt="" className='w-full h-full' />
    </div> */}

    </div>
  )
}

export default Amenidades 
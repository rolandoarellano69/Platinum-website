import React from 'react'
import {RxTriangleRight} from "react-icons/rx"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PeekLevel1 from '../../assets/image/plantas platinum-17.png'
import PeekLevel2 from '../../assets/image/plantas platinum-18.png'
import NovaNamePeek from '../../assets/image/iconos atributos-16.png'
const NovaCarrusel = () => {
  return (
    <div className="border-t-[20px] border-[#1c2e60] grid grid-cols-1 md:grid md:grid-cols-3 grid-rows-1 ">
    <div className='col-span-2 pl-10 bg-white'>
    <div className='h-auto w-auto flex items-end justify-end '> <img src={NovaNamePeek} alt=""className='lg:w-[525px]' /></div>
    <div className='pl-8'>
    <ul>
          <li className='p-8 font-thin text-2xl'>
            <span className=' font-thin rounded-tl-lg bg-[#1c2e60] text-gray-200 p-2 text-3xl'>
              Planta Baja
            </span>
          
              <li className=' mt-4 flex items-center'>
                <RxTriangleRight className='mr-2 text-[#1c2e60]' />Sala
              </li>
              <li className='flex items-center'>
                <RxTriangleRight className='mr-2 text-[#1c2e60]' />Cocina
              </li>
              <li className='flex items-center'>
                <RxTriangleRight className='mr-2 text-[#1c2e60]' /><p className='diagonal-fractions'>1/2 Baño</p> 
              </li>
              <li className='flex items-center'>
                <RxTriangleRight className='mr-2 text-[#1c2e60]' />Patio trasero
              </li>
              <li className='flex items-center '>
                <RxTriangleRight className='mr-2 flex text-[#1c2e60] '/>
                Estacionamiento techada (para dos autos)
              </li>
            
          </li>
          <li className=' font-thin p-4 text-2xl'>
            <span className='font-thin rounded-tl-lg bg-[#1c2e60] p-2 text-gray-200 text-3xl'>Planta Alta</span>
            <ol className='pl-6 mt-4 space-y-1'>
              <li className='flex items-center'>
                <RxTriangleRight className='mr-2 text-[#1c2e60]' />Recámara principal (con walk-in closet y baño) 
              </li>
              <li className='flex items-center'>
                <RxTriangleRight className='mr-2 text-[#1c2e60]' />2 Recámaras secundarias 
              </li>
              <li className='flex items-center'>
                <RxTriangleRight className='mr-2 text-[#1c2e60]' />Baño completo
              </li>
              <li className='flex items-center'>
                <RxTriangleRight className='mr-2 text-[#1c2e60]' />Balcón
              </li>
              <li className='flex items-center'>
                <RxTriangleRight className='mr-2 text-[#1c2e60]' />
                Área de lavado / usos múltiples
              </li>
            </ol>
          </li>
        </ul>
    </div>
    
    
    </div>
    <div className=' md:flex items-center justify-center  p-[10%] pl-8 bg-white'>
    <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        onSwipeMove={true}
        showIndicators={false}
        autoPlay={true}
        interval={3000}
        className=" md:w-[80%] h-auto "
        >
    <div className='w-full h-auto'>
            <img src={PeekLevel1} alt="Nivel 1" className='w-full h-auto' />
          </div>
          <div className='w-full h-auto'>
            <img src={PeekLevel2} alt="Planta Alta" className='w-full h-auto' />
          </div>
      </Carousel>
    </div>
  </div>
  )
}

export default NovaCarrusel
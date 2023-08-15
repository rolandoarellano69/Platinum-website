import React from 'react'
import {RxTriangleRight} from "react-icons/rx"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import NovaPlusN1 from '../../assets/image/plantas arquitectonicas-18.png'
import NovaPlusN2 from '../../assets/image/plantas arquitectonicas-19.png'
import NovaPlusN3 from '../../assets/image/plantas arquitectonicas-20.png'
import IconNovaPlusPeek from '../../assets/image/nova-16.png'



function NovaPlusCarrusel() {
  return (
    <div className="border-t-[20px] border-[#1c2e60] grid grid-cols-1 md:grid md:grid-cols-2 grid-rows-1 gap-0">
      <div className='p-8 bg-white'>
      <div className='h-auto w-auto items-center justify-center pl-10 pr-10'> <img src={IconNovaPlusPeek} alt=""className='' /></div>
      <ul>
            <li className='p-4 font-thin text-2xl'>
              <span className='font-thin rounded-tl-lg bg-[#1c2e60] text-gray-200 p-2 text-3xl'>
                Planta Baja
              </span>
              <ol className='pl-8 mt-4 space-y-1'>
                <li className='flex items-center'>
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
                <li className='flex items-center'>
                  <RxTriangleRight className='mr-2 text-[#1c2e60]' />
                  cochera techada (para dos autos)
                </li>
              </ol>
            </li>
            <li className=' font-thin p-8 text-2xl'>
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
                  <RxTriangleRight className='mr-2 text-[#1c2e60]' />Balcon
                </li>
                <li className='flex items-center'>
                  <RxTriangleRight className='mr-2 text-[#1c2e60]' />
                  Área de lavado / usos múltiples
                </li>
              </ol>
            </li>
            <li className='mb-4 font-thin p-8 text-2xl'>
              <span className='font-thin rounded-tl-lg bg-[#1c2e60] p-2 text-gray-200 text-3xl'>Roof Top</span>
              <ol className='pl-6 mt-4 space-y-1'>
                <li className='flex items-center'>
                  <RxTriangleRight className='mr-2 text-[#1c2e60]' />Terraza
                </li>
                <li className='flex items-center'>
                  <RxTriangleRight className='mr-2 text-[#1c2e60]' /><p className='diagonal-fractions'>1/2 Baño</p> 
                </li>
                <li className='flex items-center'>
                  <RxTriangleRight className='mr-2 text-[#1c2e60]' />Espacio para asador
                </li>
              </ol>
            </li>
          </ul>
      
      </div>
      <div className=' md:flex items-center bg-[#404040] justify-center'>
      <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            autoPlay={true}
            interval={2000}
            className=" w-[390px] h-auto"
          >
      <div className='w-full h-auto'>
              <img src={NovaPlusN1} alt="Nivel 1" className='w-full h-auto' />
            </div>
            <div className='w-full h-auto'>
              <img src={NovaPlusN2} alt="Planta Alta" className='w-full h-auto' />
            </div>
            <div className='w-full h-auto'>
              <img src={NovaPlusN3} alt="Roof Top" className='w-full h-auto' />
            </div>
        </Carousel>
      </div>
    </div>
  )
}

export default NovaPlusCarrusel
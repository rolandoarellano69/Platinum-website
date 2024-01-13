import React from 'react'
import {RiDraftFill} from 'react-icons/ri'
import { Carousel } from 'react-responsive-carousel'
import Peek1 from '../../assets/image/RECAMARA PLATINUM 4K.jpg'
import Peek2 from '../../assets/image/SALA PLATINUM 4K.jpg'
import Peek3 from '../../assets/image/COMEDOR PLATINUM 4K.jpg'
const Formulario = () => {
  return (
    <div  className='bg-[#404040]  text-white border-t-[20px] border-[#1c2e60] '>
      <span  id='Formulario' className=' flex gap-4 text-center items-center justify-center text-[45px] m-4 font-thin '>Contacto <RiDraftFill className=' m-4 text-[55px]'/></span>
      <p className='text-center text-gray-400 text-[25px] mb-10 font-thin '>Realiza el formulario, nos comunicaremos a la brevedad</p>
      <div  className="md:grid grid-cols-3 md:grid-rows-1 mb-8 ">
        <div className='bg-white'>
          <iframe  width='100%' height='590px'  src='https://forms.zohopublic.com/obrgroup/form/PlatinumResidencial/formperma/rWZBiNta5fy34hdxlfZvnoJIMp1U1qFoce-pO_dF5xo' className=''></iframe>
         
        </div>
        <div className="col-span-2 ">

          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={true}
            autoPlay={true}
            interval={3000}
            className=" w-full h-full md:h-[100%]"
          >
            <div className='w-full h-auto'>
              <img src={Peek1} alt="Nivel 1" className='w-full h-auto' />
            </div>
            <div className='w-full h-auto'>
              <img src={Peek2} alt="Planta Alta" className='w-full h-auto' />
            </div>
            <div className='w-full h-auto'>
              <img src={Peek3} alt="Planta Alta" className='w-full h-auto' />
            </div>
          </Carousel>
        </div>
      </div></div>
  )
}

export default Formulario
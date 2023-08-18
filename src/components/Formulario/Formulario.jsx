import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Peek1 from '../../assets/image/RECAMARA PLATINUM 4K.jpg'
import Peek2 from '../../assets/image/SALA PLATINUM 4K.jpg'
import Peek3 from '../../assets/image/COMEDOR PLATINUM 4K.jpg'
const Formulario = () => {
  return (
    <div id='Formulario' className='bg-[#404040] p-8  text-white border-t-[20px] border-[#1c2e60] '>
      <h1 className='text-center text-[55px] m-4 font-thin '>Contactanos</h1>
      <div className="md:grid grid-cols-3 md:grid-rows-1 mb-8 gap-4">
        <div>
          <iframe width='100%' height='690px' src='https://crm.zoho.com/crm/WebFormServeServlet?rid=ab9ffff6c56c4470d599b792c0f9089b8a29fc4805fdf067bd110e444a3a40begid1250c6f36c588699a4f2cad1500d2088c72dea3f78890524ab07eb17039e409a' className=''></iframe>
          {/* <form action="">
            <label className="block text-sm font-thin ">Nombre</label>
            <div className="mt-2 mb-4">
              <input type="text" name="nombre" id="nombre" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 " />
            </div>
            <label className="block text-sm font-thin">Correo</label>
            <div className="mt-2 mb-4">
              <input type="email" name="correo" id="correo" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 " />
            </div>
            <label className="block text-sm font-thin ">Telefono</label>
            <div className="mt-2 mb-4">
              <input type="number" name="telefono" id="telefono" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 " />
            </div>
            <label className="block text-sm font-thin">Mensaje</label>
            <div className="mt-2 mb-4">
              <textarea type="text" name="mensaje" id="mensaje" className="shadow-sm  focus:ring-[#1c2e60] focus:border-[#1c2e60] block w-full sm:text-sm border-[#1c2e60] "></textarea>
            </div>
            <div className="mt-4">
              <button type="submit" className="w-full px-4 py-2 text-white bg-[#1c2e60] hover:bg-indigo-600">Enviar</button>
            </div>


          </form> */}
        </div>
        <div className="col-span-2 ">

          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            autoPlay={true}
            interval={3000}
            className=" w-full h-auto md:h-[710px]"
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
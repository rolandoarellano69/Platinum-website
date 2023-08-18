import React from 'react'
import { RiPhoneFill, RiFacebookBoxFill,RiInstagramLine } from "react-icons/ri";
import Logofooter from '../../assets/image/logogtipo OBR versiones de color-03-02.png'
import logoBanner from '../../assets/image/logo platinum png-04.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   
    <footer className="bg-[#1c2e60]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between mt-16">
          <div className="mb-6 md:mb-0">
            <Link to="/" class=" flex  gap-2 items-center">
              {/* <img src="/images/LOGO AUREO -01.png" class="h-8 mr-3" alt="FlowBite Logo" /> */}
              <img src={logoBanner} alt="" className='h-[100px] w-[164px] mb-0 ' />
              <img src={Logofooter} alt="" className='h-[60px] w-[164px] mb-4 ' />
            </Link>
            <span className="self-center text-sm   text-gray-200 ">Platinum Residencial es un desarrollo <br /> inmobiliario de OBR Group</span>
            <div className='flex relative '>
              <RiPhoneFill className='mt-10 text-gray-200 text-[34px]  ' /> <span className=' text-[#B4B1B2] text-xl absolute bottom-0 left-10 '>663 113 8555 </span>
            </div>
          </div>

          <div className="grid grid-cols-2  gap-16 sm:gap-6 sm:grid-cols-3">
            <div className=' right-0'>
              <h2 className="mb-6 text-sm m-8 text-gray-200 uppercase ">HORARIOS DE ATENCIÓN</h2>
              <table className='w-full m-8'>
                <tbody >
                  <tr className='text-[#898783]' >
                    <td>Lunes</td>

                    <td className='text-gray-200 text-right'>9am - 6pm</td>
                  </tr>
                  <tr className='text-[#898783]'>
                    <td>Martes</td>

                    <td className='text-gray-200  text-right'>9am - 6pm</td>
                  </tr>
                  <tr className='text-[#898783]'>
                    <td>Miercoles</td>

                    <td className='text-gray-200  text-right'>9am - 6pm</td>
                  </tr>
                  <tr className='text-[#898783]'>
                    <td>Jueves</td>

                    <td className='text-gray-200  text-right'>9am - 6pm</td>
                  </tr>
                  <tr className='text-[#898783]'>
                    <td>Viernes</td>

                    <td className='text-gray-200  text-right'>9am - 6pm</td>
                  </tr>
                  <tr className='text-[#898783] '>
                    <td>Sab - Dom</td>
                    <td className='text-gray-200  text-right'>10am - 4pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
            </div>
            <div className=''>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase "></h2>
              <ul className="text-gray-200 flex gap-10 font-medium">
                <li className="mb-4 ">
                  <RiFacebookBoxFill className='hover:text-gray-200 cursor-pointer text-[46px]' onClick={() => window.open('https://www.facebook.com/PlatinumResidencial')}/>
                  {/* <a href="#" class="hover:underline">Privacy Policy</a> */}
                </li>
                <li>
                  <RiInstagramLine className='hover:text-gray-200 cursor-pointer text-[46px]' onClick={() => window.open('https://www.instagram.com/platinumresidencial/')}/>
                  {/* <a href="#" class="hover:underline">Terms &amp; Conditions</a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-[#898783] sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-[#898783] sm:text-center">© Copyright 2023 Platinum Residencial </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="/aviso-privacidad" className="text-[#898783] text-sm">Aviso de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
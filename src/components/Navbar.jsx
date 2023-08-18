import React, { useState } from 'react';
import Logo from './MenuItems/Logo';
import AcercaP from './Platinum/AcercaP';
import Tour360 from './Tour360';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-scroll'
import Formulario from './Formulario/Formulario';
import Mapa from './Mapa/Mapa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='absolute top-0 left-0 right-0 bg-black bg-opacity-10 h-16 md:h-24 w-full flex items-center z-50'>
      <div className='ml-8'>
        <Logo />
      </div>
      <nav className='flex-1 text-center text-gray-200 hidden md:block'>
        <Link to='AcercaP'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='mx-2 md:mx-4 text-sm md:text-base font-semibold border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2 cursor-pointer'>
          PROYECTO </Link>

        {/* <a href="#" className='mx-2 md:mx-4 text-sm md:text-base font-semibold border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2'>
          PROYECTO
        </a> */}
        {/* <a href="#" className='mx-2 md:mx-4 text-sm md:text-base font-semibold  border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2'>
          360 TOUR
        </a> */}
          <Link to='Tour360'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='mx-2 md:mx-4 text-sm md:text-base font-semibold border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2 cursor-pointer'>
          360 TOUR </Link>

        {/* <a href={Mapa} className='mx-2 md:mx-4 text-sm md:text-base font-semibold border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2'>
          UBICACION
        </a> */}
          <Link to='ubicacion'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='mx-2 md:mx-4 text-sm md:text-base font-semibold border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2 cursor-pointer'>
          UBICACION</Link>

        {/* <a href="#" className='mx-2 md:mx-4 text-sm md:text-base font-semibold  border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2'>
          CONTACTO
        </a> */}
          <Link to='Formulario'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='mx-2 md:mx-4 text-sm md:text-base font-semibold border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2 cursor-pointer'>
          CONTACTO </Link>
      </nav>
      <div className='ml-auto mr-4 md:hidden'>
        {isMenuOpen ? (
          <RiCloseLine
            className='text-white cursor-pointer text-2xl mr-4'
            onClick={handleToggleMenu}
          />
        ) : (
          <RiMenuLine
            className='text-white cursor-pointer text-2xl mr-4'
            onClick={handleToggleMenu}
          />
        )}
      </div>
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 w-full  bg-[#1c2e60]'>
          <Link to='AcercaP' 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='block py-2 text-white hover:bg-[#404040] text-center'>PROYECTO</Link>
          {/* <a href="#" className='block py-2 text-white hover:bg-[#404040] text-center'>
            PROYECTO
          </a> */}
            <Link to='Tour360'  
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='block py-2 text-white hover:bg-[#404040] text-center'>360 TOUR</Link>
          {/* <a href="#" className='block py-2 text-white hover:bg-[#404040] text-center'>
            360 TOUR
          </a> */}
            <Link to='ubicacion'  
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='block py-2 text-white hover:bg-[#404040] text-center'>UBICACION</Link>
          {/* <a href="#" className='block py-2 text-white hover:bg-[#404040] text-center'>
            UBICACION
          </a> */}
            <Link to='Formulario'  
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='block py-2 text-white hover:bg-[#404040] text-center'>CONTACTO</Link>
          {/* <a href="#" className='block py-2 text-white hover:bg-[#404040] text-center'>
            CONTACTO
          </a> */}
        </div>
      )}
      <button className='hidden md:block mr-8 md:mr-16 bg-[#1c2e60] hover:bg-[#32426f] text-white text-xs font-bold px-6 py-4'>
        AGENDAR UNA CITA
      </button>
    </header>
  );
};

export default Navbar;


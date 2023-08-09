import React, { useState } from 'react';
import Logo from './MenuItems/Logo';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

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
        <a href="#" className='mx-2 md:mx-4 text-sm md:text-base font-semibold border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2'>
          PROYECTO
        </a>
        <a href="#" className='mx-2 md:mx-4 text-sm md:text-base font-semibold  border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2'>
          360 TOUR
        </a>
        <a href="#" className='mx-2 md:mx-4 text-sm md:text-base font-semibold border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2'>
          UBICACION
        </a>
        <a href="#" className='mx-2 md:mx-4 text-sm md:text-base font-semibold  border-b-2 border-transparent hover:border-[#A7A9AC] hover:pb-2'>
          CONTACTO
        </a>
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
          <a href="#" className='block py-2 text-white hover:bg-[#404040] text-center'>
            PROYECTO
          </a>
          <a href="#" className='block py-2 text-white hover:bg-[#404040] text-center'>
            360 TOUR
          </a>
          <a href="#" className='block py-2 text-white hover:bg-[#404040] text-center'>
            UBICACION
          </a>
          <a href="#" className='block py-2 text-white hover:bg-[#404040] text-center'>
            CONTACTO
          </a>
        </div>
      )}
      <button className='hidden md:block mr-8 md:mr-16 bg-[#1c2e60] hover:bg-[#32426f] text-white text-xs font-bold px-6 py-4'>
        AGENDAR UNA VISITA
      </button>
    </header>
  );
};

export default Navbar;


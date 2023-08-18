import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Importa Link de react-scroll

import { RiArrowDownSLine } from 'react-icons/ri';
import Banner1Peek from '../../assets/image/ACCESO ENTRADA PLATINUM 4K.jpg';
import Banner2Peek from '../../assets/image/ACCESO SALIDA PLATINUM 4K.jpg';
import logoBanner from '../../assets/image/logo platinum png-04.png';

const images = [Banner1Peek, Banner2Peek];
const Banner1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='relative min-h-screen flex items-center justify-center'
      style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center'>
        <img
          id='hero'
          src={logoBanner}
          alt='HERO'
          className='w-[300px] h-auto md:w-[400px] lg:w-[500px] mx-auto mb-6'
        />

        <Link to='Tour360' smooth={true} duration={500}>
          <button className='hidden md:block px-10 py-2 text-white bg-[#1c2e60] hover:bg-[#32426f] font-thin'>
            Recorrido 360°
          </button>
        </Link>
      </div>

      <div className='md:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2'>
        <p className='text-white mb-1'>Desliza para ver más</p>
        <div className='flex items-center justify-center'>
          <RiArrowDownSLine className='text-white text-4xl animate-bounce' />
        </div>
      </div>
    </div>

  );
};

export default Banner1;
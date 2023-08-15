import { useState, useEffect } from 'react';
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
    <div className='relative'>
      <div className='grid grid-cols-1'>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className='w-full h-auto sm:w-2/3 md:w-full'
        />
      </div>
      <div className='absolute w-full h-full top-0 left-0'>
      <div className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-10 sm:w-2/3 md:w-full' />


      <div className='absolute bg-black bg-opacity-40 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center sm:w-2/3 md:w-full'>
  <img src={logoBanner} alt='HERO' className=' md:w-[585px] h-auto mx-auto md:mt-20 mb-20' />
  <button className='hidden md:block px-10 py-2 text-white bg-[#1c2e60] hover:bg-[#32426f] font-thin'>
    Recorrido 360°
  </button>
</div>

      </div>
    </div>
  );
};

export default Banner1;
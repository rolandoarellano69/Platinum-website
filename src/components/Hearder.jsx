import React from 'react';
import { RiFacebookCircleFill, RiInstagramLine, RiMapPin2Fill, RiPhoneFill } from 'react-icons/ri';

const Header = () => {
  return (
    <header id='home' className='flex flex-col md:flex-row items-center justify-between md:h-[20px] h-[12vh] bg-[#A7A9AC] p-4 md:p-8 text-gray-200'>
      <div className='flex gap-4 mb-[5px]'>
        <RiFacebookCircleFill size={20} onClick={() => window.open('https://www.facebook.com/PlatinumResidencial')} className='cursor-pointer' />
        <RiInstagramLine size={20} onClick={() => window.open('https://www.instagram.com/platinumresidencial/')} className='cursor-pointer' />
      </div>
      <div className='flex flex-col items-start justify-center md:flex-row md:items-center md:gap-4  md:mt-0'>
        <div className='flex items-center gap-2 md:hidden'>
          <RiMapPin2Fill className='text-[#1c2e60]' />
          <h4 className='text-xs md:text-base'>
            Blvd. Manuel J. Clouthier 18359, Col. Guaycura C.P. 22216, Tijuana, B.C.
          </h4>
        </div>
        <div className='flex items-center gap-2 mt-2 md:mt-0 md:hidden'>
          <RiPhoneFill size={16} className='text-[#1c2e60]' />
          <div className="mb-2">
            <h4 className='text-xs md:text-base'>663 113 8555</h4>
          </div>
        </div>
        <div className='hidden md:flex items-center gap-2'>
          <RiMapPin2Fill className='text-[#1c2e60]' />
          <h4 className='text-xs md:text-base'>
            Blvd. Manuel J. Clouthier 18359, Col. Guaycura C.P. 22216, Tijuana, B.C.
          </h4>
        </div>
        <div className='hidden md:flex items-center gap-2 mt-2 md:mt-0'>
          <RiPhoneFill size={16} className='text-[#1c2e60]'/>
          <h4 className='text-xs md:text-base'>663 113 8555</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
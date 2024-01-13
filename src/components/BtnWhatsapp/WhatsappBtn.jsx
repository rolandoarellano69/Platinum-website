import React from 'react';
import { Link } from 'react-scroll';
import { RiWhatsappLine } from 'react-icons/ri';

const WhatsappBtn = () => {
  return (
    <span
      className='fixed xl:bottom-24 bottom-4 left-4 shadow-2xl rounded-full py-4 px-4 text-3xl xl:left-16 items-center '
    >
     <a
      href='https://api.whatsapp.com/send?phone=526631138555&text=Hola,%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20de%20Platinum%20Residencial.' // Reemplaza con tu enlace de WhatsApp
      target='_blank'
      rel='noopener noreferrer'
      className='fixed xl:bottom-24 bottom-4 left-4 shadow-2xl rounded-full py-4 px-4 text-3xl xl:left-16 items-center bg-[#25d366] cursor-pointer'
    >
        <RiWhatsappLine className='text-center text-teal-50' />
      </a>
    </span>
  );
};

export default WhatsappBtn;
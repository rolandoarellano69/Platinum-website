import React from 'react';
import FamilyPeek from '../../assets/image/foto familia pagina web-01-01.png';
import LogoPlatinum from '../../assets/image/logo platinum png-02.png';

const AcercaP = () => {
  return (
    <section className='bg-white'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="order-first md:order-first">
          <img
            src={FamilyPeek}
            alt="Familia Feliz"
            className="w-full h-full object-cover object-center p-2 md:p-28"
          />
        </div>
        <div className="bg-[#404040] flex flex-col justify-center items-center md:p-8 order-first md:order-last">
          <img id='AcercaP' src={LogoPlatinum} alt="Logo Platinum" className="w-[492px] h-auto mb-4 p-8 " />
          <h3 className="text-gray-200 text-lg font-normal text-center md:text-justify px-4">
            Platinum Residencial es un exclusivo desarrollo de solo 18 casas ubicado en un punto muy estratégico de la
            ciudad, con el dinamismo y la actividad comercial que tu estilo de vida requiere, invierte en una zona de alta
            plusvalía.
          </h3>
          <h5 className='mt-4 mb-4 text-gray-200 text-lg font-medium text-center'>
            PLATINUM, El residencial que lo tiene todo.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default AcercaP;
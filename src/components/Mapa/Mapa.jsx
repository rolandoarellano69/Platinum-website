import React, { useState } from 'react'
import MapaPeek from '../../assets/image/mapa-21-21.png'
import { MdClose } from 'react-icons/md'
const Mapa = () => {
  const [showMap, setShowMap] = useState(false);
  const toggleMap = () => {
    setShowMap(!showMap);
  };
  const closeMap = () => {
    setShowMap(false);
  };
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeMap();
    }
  };
  return (
    <div id='ubicacion' className='w-full relative bg-white border-t-[20px] border-[#1c2e60]'>

      <h1 className='p-8'>
        <span className='text-[#1c2e60]  font-thin text-[46px]'>Ubicación</span>
      </h1>
      <img
        src={MapaPeek}
        alt='Mapa'
        className='w-full h-auto cursor-pointer'
        onClick={toggleMap}
      />
      {showMap && (
        <div
          className='fixed top-0 left-0 w-full  bg-black bg-opacity-80 z-10 flex items-center justify-center'
          onClick={handleOverlayClick} // Cierra el mapa al hacer clic en el fondo oscuro
        >
          <div className='relative min-h-screen'>
            <img src={MapaPeek} alt='Mapa' className='w-full h-auto bg-white' />
            <button
              className='absolute top-0 right-0 m-4 text-[#1c2e60] p-2 bg-slate-400 rounded-full '
              onClick={closeMap}
            >
              <MdClose size={24} className='text-[#1c2e60]text-2xl' />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Mapa
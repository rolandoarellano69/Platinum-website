import { useState, useEffect, useRef, useMemo } from 'react';
import bannerVideo from '../../assets/video/LOOP.mp4';
import bannerVideo2 from '../../assets/video/PLATINUM PAG WEB VERTICAL.mp4';
import entradapeek from '../../assets/image/ACCESO SALIDA PLATINUM 4K.jpg'

const Banner1 = () => {
  // Estado para almacenar el ancho de la ventana
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Referencia a los elementos de video
  const videoRef1 = useRef();
  const videoRef2 = useRef();

  // Ancho de la ventana almacenado en memoria caché
  const cachedWindowWidth = useMemo(() => window.innerWidth, []);

  useEffect(() => {
    // Función que actualiza el estado del ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Escuchar los cambios en el ancho de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex mx-auto border-t-[25px]  border-b-[15px] border-[#1c2e60] justify-center">
    {/* Contenedor para el video de escritorio (>= 768px) */}
    {/* <div className="flex justify-center items-center h-[800px] w-full overflow-hidden">
    <img 
        src={entradapeek} 
        alt="Descripción de la imagen" 
        className="w-full h-full object-cover object-center" 
    />
</div> */}
    <div className=' relative w-10/12 md:w-7/10 '>

        <video
          ref={videoRef1}
          className="hidden md:block "
          autoPlay
          loop
          muted
          src={bannerVideo}
        ></video>

    </div>

      {/* Video para dispositivos móviles (< 768px) */}
      <video
        ref={videoRef2}
        className="md:hidden w-full h-full object-cover max-width-[100%]"
        autoPlay
        loop
        muted
        src={bannerVideo2}
      ></video>
    </div>
  );
};

export default Banner1;
import { useState, useEffect, useRef, useMemo } from 'react';
import bannerVideo from '../../assets/video/PLATINUM HORIZONTAL LOOP.mp4';
import bannerVideo2 from '../../assets/video/PLATINUM PAG WEB VERTICAL.mp4';

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
    <div className="flex w-full ">
      {/* Video para pantallas de escritorio (>= 768px) */}
      <video 
        ref={videoRef1}
        className="hidden md:block w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        src={bannerVideo}
      ></video>
      
      {/* Video para dispositivos móviles (< 768px) */}
      <video 
        ref={videoRef2}
        className="md:hidden w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        src={bannerVideo2}
      ></video>
    </div>
  );
};

export default Banner1;
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
const BackToStartBtn = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      // Establece el estado para mostrar la flecha hacia abajo
      setShowArrow(yOffset === 0);
    };

    // Agrega un event listener para detectar el desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <span
      className={`fixed bottom-4 shadow-2xl border-4 right-4 py-2 px-2 items-center text-4xl bg-[#1c2e60] ${
        showArrow ? 'hidden' : 'flex'
      }`}
    >
      <Link to='home' smooth={true} duration={500}>
        {showArrow ? <RiArrowDownSLine className='text-white' /> : <RiArrowUpSLine className='text-white' />}
      </Link>
    </span>
  );
};

export default BackToStartBtn
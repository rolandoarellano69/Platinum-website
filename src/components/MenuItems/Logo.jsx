import React from 'react'
import LogoPeek from '/src/assets/image/logo platinum png-04.png'
import { Link } from 'react-scroll'

const Logo = () => {
  return (
    <div>
      <Link to='home'>
      <img src={LogoPeek} alt="Imagen Logo"  className='h-[93px] w-[167px] '/>
      </Link>
    </div>
  )
}

export default Logo
import React from 'react'
import Hearder from './components/Hearder'
import Navbar from './components/Navbar'
import Banner1 from './components/banner/Banner1'
import AcercaP from './components/Platinum/AcercaP'
import Footer from './components/Footer/Footer'
import Avisopriv from './pages/Avisopriv'
import Error404 from './components/Error/Error404'
import NovaPlus from './components/NovaPlus/NovaPlus'
import Tour360 from './components/Tour360'
import Nova from './components/Nova/Nova'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NovaPlusCarrusel from './components/NovaPlus/NovaPlusCarrusel'
import NovaCarrusel from './components/Nova/NovaCarrusel'



const App = () => {
  return (
    <Router>
      <div className="h-full w-full">

        <div className='relative'>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/aviso-privacidad' element={<Avisopriv />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>

        </div>
      </div>
    </Router>
  )
}
const HomePage = () => {
  return (
    <>
      <div className='h-full w-full'>
        <Hearder />
        <div className='relative'>
          <Navbar />
          <Banner1 />
          <AcercaP />
          <Nova/>
          <NovaCarrusel/>
          <NovaPlus/>
          <NovaPlusCarrusel/>
          <Tour360 />
          <Footer />
        </div>
      </div>
    </>
  );
}

const NotFoundPage = () => {
  return <Error404 />;
}
export default App
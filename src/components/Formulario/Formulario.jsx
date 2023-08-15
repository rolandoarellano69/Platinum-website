import React from 'react'

const Formulario = () => {
  return (
    <div className='bg-[#404040] p-8  text-white border-t-[20px] border-[#1c2e60] '>
      <div className="md:grid grid-cols-3 grid-rows-1 gap-4">
        <h1 className='text-center text-xl m-4 font-thin '>Contactanos</h1>
        <div>
        <script>function wfa_pstMesgFrmFom (evt){if(evt.origin === 'https://crm.zoho.com'|| evt.origin === 'https://crm.zohopublic.com'){var loc_obj=JSON.stringify({ origin:window.location.origin, pathname:window.location.pathname, search:window.location.search, hash:window.location.hash}); evt.source.postMessage(('prnt_wnd_pg_lc_rc_frm_prwindow_'+loc_obj), evt.origin);}}window.addEventListener('message', wfa_pstMesgFrmFom, false);</script>

<iframe width='610px' height='490px' src='https://crm.zoho.com/crm/WebFormServeServlet?rid=ab9ffff6c56c4470d599b792c0f9089b8a29fc4805fdf067bd110e444a3a40begid1250c6f36c588699a4f2cad1500d2088c72dea3f78890524ab07eb17039e409a'></iframe>
          {/* <form action="">
            <label className="block text-sm font-thin ">Nombre</label>
            <div className="mt-2 mb-4">
              <input type="text" name="nombre" id="nombre" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 " />
            </div>
            <label className="block text-sm font-thin">Correo</label>
            <div className="mt-2 mb-4">
              <input type="email" name="correo" id="correo" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 " />
            </div>
            <label className="block text-sm font-thin ">Telefono</label>
            <div className="mt-2 mb-4">
              <input type="number" name="telefono" id="telefono" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 " />
            </div>
            <label className="block text-sm font-thin">Mensaje</label>
            <div className="mt-2 mb-4">
              <textarea type="text" name="mensaje" id="mensaje" className="shadow-sm  focus:ring-[#1c2e60] focus:border-[#1c2e60] block w-full sm:text-sm border-[#1c2e60] "></textarea>
            </div>
            <div className="mt-4">
              <button type="submit" className="w-full px-4 py-2 text-white bg-[#1c2e60] hover:bg-indigo-600">Enviar</button>
            </div>


          </form> */}
        </div>
        <div className="col-span-2">2</div>
      </div></div>
  )
}

export default Formulario
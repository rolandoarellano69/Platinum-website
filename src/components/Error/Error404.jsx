import React from 'react';

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-x-hidden bg-[#1c2e60]">
      <h1 className="text-3xl text-gray-200 mb-4">Error 404 |</h1>
      <p className="text-xl text-gray-200">La página que buscas no existe :(</p>
    </div>
  );
}

export default Error404;
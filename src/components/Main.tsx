import Link from 'next/link';
import React from 'react';

export default function Main(){
  return (
    <>
      <div className="relative h-screen flex justify-center items-center bg-center bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/turtes.jpeg')" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b opacity-70 from-slate-600 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-slate-800 opacity-70"></div>
        </div>
 <div className="relative z-10 text-center text-white mx-0 md:mx-auto ">
  <h1 className="text-8xl md:text-8xl font-bold mb-4 text-start" style={{ fontFamily: 'RustlerBarter, sans-serif' }}>Ocean Guardian</h1>
  <p className="text-lg md:text-2xl mb-8">Junte-se a nós na proteção dos oceanos e do meio ambiente marinho.</p>
  <div className="flex justify-center md:justify-start space-x-4">
    <Link href="usuario/new" className="bg-[#07799E] text-white py-2 px-4 rounded-lg text-lg">Cadastre-se</Link>
  </div>
</div>
      </div>

      
    </>
  );
};






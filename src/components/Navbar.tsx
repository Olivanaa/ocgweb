'use client'

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full py-6 flex justify-between items-center px-6 z-50 transition-colors duration-300 ${scroll ? 'bg-slate-800' : 'bg-transparent'}`}>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full overflow-hidden">
          <img src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className='flex-grow'>
        <ul className="flex justify-center space-x-40">
          <li>
            <Link href="/" className="text-white">HOME</Link>
          </li>
          <li>
            <Link href="/sobre" className="text-white">SOBRE</Link>
          </li>
          <li>
            <Link href="/contato" className="text-white">CONTATO</Link>
          </li>
          <li>
            <Link href="/blog" className="text-white">BLOG</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <Link href='/login'>
          <button className="bg-[#07799E] text-white border border-transparent px-4 py-2 border-r-4">Login</button>
        </Link>
      </div>
    </nav>
  );
}






import Link from "next/link";

export default function Footer(){
    return(
        <footer className=" relative bottom-0 w-full py-8 px-8 md:px-16 lg:px-32 xl:px-64 bg-[#043F56]">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="/" className="text-white">Home</a>
          <a href="/sobre" className="text-white">Sobre</a>
          <a href="/contato" className="text-white">Contato</a>
        </div>
       
        <p className="text-center text-white">&copy; 2024 Ocean Guardian. Todos os direitos reservados.</p>
      </footer>
    );
}
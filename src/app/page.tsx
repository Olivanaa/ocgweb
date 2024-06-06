import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar />
    <Main />
    <div className="grid grid-cols-4 grid-rows-12 gap-2 bg-[#021922]">
      <div className="col-start-2 py-20 pr-4">
        <h2 className="text-4xl font-bold mb-4 text-white">Proteção Ambiental</h2>
        <p className="text-white mb-8">Junte-se a nós na preservação dos oceanos.</p>
      </div>
      <div className="col-start-3 row-start-2">
        <h2 className="text-4xl font-bold mb-4 text-white">Conscientização global</h2>
        <p className="text-white mb-8">O Ocean Guardian promove a conscientização global sobre a importância da preservação dos oceanos e do meio ambiente marinho, incentivando ações positivas em todo o mundo.</p>
      </div>
      <div className="col-span-4 row-span-4 row-start-3">
        <img src="/images/blue.jpeg" alt="Imagem 2" className="w-5/6 rounded-lg shadow-xl" />
      </div>
      <div className="col-span-2 col-start-2 row-start-7 py-20">
        <h2 className="text-4xl font-bold mb-4 text-white">Atividades e Eventos</h2>
        <p className="text-white mb-8">Participamos de eventos e atividades que ajudam a preservar os oceanos.</p>
      </div>
      <div className="col-span-4 row-span-4 row-start-8">
        <img src="/images/mar.jpeg" alt="Imagem 2" className="ms-auto w-5/6 rounded-lg shadow-lg" />
      </div>
      <div className="col-span-2 col-start-2 row-start-12">
        <div className="bg-[#07799E] text-white py-8 px-12 rounded text-center">
          <h2 className="text-2xl font-bold mb-4">Faça parte</h2>
          <p className="text-white mb-4">Junte-se a nós e faça parte deste movimento global para proteger nossos oceanos.</p>
          <Link href="#" className="bg-white text-cyan-800 py-2 px-6 rounded-lg text-lg inline-block">Saiba Mais</Link>
        </div>
      </div>
    </div>
    <Footer />

    </>
  );
}

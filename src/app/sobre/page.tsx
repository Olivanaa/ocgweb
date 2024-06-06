import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Sobre() {
    return (
        <>
            <Navbar />

            <div className="bg-[#021922] px-8 md:px-16 lg:px-32 xl:px-64 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
                    <div className="col-span-1 md:col-span-2 p-24">
                        <h2 className="text-7xl font-bold mb-8 text-white">Sobre nós</h2>
                        <p className="text-white mb-8 text-xl">Bem-vindo ao Ocean Guardian! Somos uma iniciativa apaixonada pela preservação dos oceanos e do meio ambiente marinho, buscando criar um impacto positivo em escala global.</p>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-white mb-8 text-2xl">O Ocean Guardian atua globalmente, fornecendo recursos e ferramentas para ajudar na preservação dos oceanos e na promoção da sustentabilidade ambiental.</h2>
                    </div>
                    <div className="col-span-1 md:col-span-2 md:flex md:justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <img src="/images/mar4.jpeg" alt="Imagem 2" className="w-full rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <img src="/images/mar2.jpeg" alt="Imagem 2" className="w-full rounded-lg shadow-lg" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 md:flex md:justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <img src="/images/mar3.jpeg" alt="Imagem 2" className="w-full rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <img src="/images/water.jpg" alt="Imagem 2" className="w-full rounded-lg shadow-lg" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-4xl font-bold mb-4 text-white">Nossa Equipe</h2>
                        <p className="text-white mb-8 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ut labore dignissimos porro asperiores nobis harum dicta quasi quisquam temporibus omnis quis maxime est sit deleniti, consequatur, tempora libero possimus!</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

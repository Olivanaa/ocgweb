import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contato() {
    return (
        <>
            <Navbar />

            <div className="bg-[#021922] px-8 md:px-16 lg:px-32 xl:px-64 py-16">
                <div className="text-center mb-16 mt-20">
                    <h2 className="text-7xl font-bold mb-4 text-white">Contato</h2>
                    <p className="text-white mb-8 text-xl">Entre em contato conosco para saber mais sobre o Ocean Guardian e como você pode se envolver.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-4xl font-bold mb-4 text-white">Envie uma mensagem</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-white text-lg font-medium mb-2" htmlFor="name">Nome</label>
                                <input type="text" id="name" className="w-full p-3 rounded bg-[#021922] border border-gray-500 text-white" />
                            </div>
                            <div>
                                <label className="block text-white text-lg font-medium mb-2" htmlFor="email">Email</label>
                                <input type="email" id="email" className="w-full p-3 rounded bg-[#021922] border border-gray-500 text-white" />
                            </div>
                            <div>
                                <label className="block text-white text-lg font-medium mb-2" htmlFor="message">Mensagem</label>
                                <textarea id="message" className="w-full p-3 rounded bg-[#021922] border border-gray-500 text-white"></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 px-6 rounded bg-[#07799E] text-white text-lg font-medium">Enviar</button>
                        </form>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-4 text-white">Informações de Contato</h3>
                        <p className="text-white mb-4 text-lg">Email: contato@oceanguardian.org</p>
                        <p className="text-white mb-4 text-lg">Telefone: +55 (11) 1234-5678</p>
                        <p className="text-white mb-4 text-lg">Endereço: Rua Exemplo, 123, Bairro Exemplo, Cidade Exemplo, País Exemplo</p>
                        <div className="mt-8">
                            <h3 className="text-4xl font-bold mb-4 text-white">Siga-nos</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white text-3xl">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-white text-3xl">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-white text-3xl">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-white text-3xl">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

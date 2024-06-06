'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { User, CalendarHeart, Camera, Download, HandCoins } from 'lucide-react';
import { getById } from "@/app/actions/usuario/get-by-id";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface UsuarioProps {
    usuario: {
        id: number;
        nome: string;
        email: string;
        telefone: string;
        senha: string;
        tipo: string;
    }
}
export default function Usuario() {
    const { id } = useParams<{ id : string }>();

    console.log( id )
 

    const [usuario, setUsuario] = useState<UsuarioProps['usuario']>({
        id: parseInt(id) ,
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        tipo: ""
    });

    useEffect(() => {  
        const fetchUsuario = async () => {
            const userData = await getById(parseInt(id));
            console.log(userData);
            setUsuario(userData); 
        };
    
        if (parseInt(id)) {
            fetchUsuario();
        }
    }, [parseInt(id)]);

    return (
        <main className="bg-[#021922] min-h-screen flex flex-col">
            <Navbar />
            <div className="min-h-screen p-4 text-white mt-20">
                <div className="flex flex-col p-4 justify-center items-center mb-7">
                    <h1 className="text-4xl font-bold mb-8">Bem vindo</h1>
                    <h2 className="text-xl font-bold">Junte-se a nós na luta contra a poluição marinha</h2>
                    <p>Nosso objetivo é proteger e preservar os oceanos para as gerações futuras.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-[#034752] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                        <Camera color="#ffffff" size={70} />
                        <h2 className="text-xl font-bold mb-4 mt-5">Relato de poluição</h2>
                        <p>Ajude-nos a identificar e combater a poluição marinha.</p>
                        <Link href= {`/reporte/new/${id}`}><button className="bg-[#07799E] text-white border border-transparent px-4 py-2 border-r-4 mt-5">Relatar Poluição</button></Link>
                    </div>

                    <div className="bg-[#034752] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                        <CalendarHeart color="#ffffff" size={70} />
                        <h2 className="text-xl font-bold mb-4 mt-3">Eventos de Limpeza</h2>
                        <p>Participe de eventos comunitários de limpeza dos oceanos.</p>
                        <Link href="#"><button className="bg-[#07799E] text-white border border-transparent px-4 py-2 border-r-4 mt-5">Saiba Mais</button></Link>
                    </div>
                    <div className="bg-[#034752] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                        <User color="#ffffff" size={70} />
                        <h2 className="text-2xl font-bold mb-4 mt-3">Perfil</h2>
                        <p>Nome: {usuario.nome}</p>
                        <p>Email: {usuario.email}</p>
                        <p>Telefone: {usuario.telefone}</p>
                        <Link href={`/usuario/${id}/edit`}><button className="bg-[#07799E] text-white border border-transparent px-6 py-2 border-r-4 mt-5">Editar</button></Link>
                    </div>
                </div>
                <div className="mt-5 p-2 rounded-lg shadow-lg flex justify-center items-center">
                    <div className="bg-[#07799E] m-4 p-10 rounded-lg shadow-lg flex flex-col items-center w-64">
                        <Download size={50} />
                        <Link href="/#" className="text-white mt-2">Baixe o aplicativo</Link>
                    </div>
                    <div className="bg-[#07799E] m-4 p-10 rounded-lg shadow-lg flex flex-col items-center w-64">
                        <HandCoins size={50} />
                        <Link href="/#" className="text-white mt-2">Doe Agora</Link>
                    </div>
                </div>



            </div>
            <Footer />
        </main>
    )
}
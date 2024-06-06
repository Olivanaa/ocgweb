'use client'

import Navbar from "@/components/Navbar";
import { getEvento } from "../actions/evento/get";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import EventoItem from "./EventoItem";


interface EventoProps {
    eventos: Array<Evento>
}

export default function Eventos({ eventos }: EventoProps) {
    const [evento, setEvento] = useState<Array<Evento>>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getEvento();
                setEvento(data || [])
            } catch (error) {
                console.error("Erro ao buscar eventos:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <main className="flex flex-col md:flex-row bg-[#021922] min-h-screen p-8 justify-center items-center">
                <div className="p-8 mt-10">
                    <h1 className="text-4xl font-bold text-white mb-8">Eventos</h1>
                    {evento.length === 0 ? (
                        <p className="text-white">Não há eventos cadastrados.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {evento.map((evento) => (
                                <EventoItem key={evento.id} evento={evento} />
                            ))}
                        </div>
                    )}
                </div>
            </main>



            <Footer />
        </>
    )
}
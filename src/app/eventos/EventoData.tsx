'use client'

import { getEvento } from "../actions/evento/get"
import EventoItem from "./EventoItem"

export default async function EventoData() {
    const eventos: Array<Evento> = await  getEvento()
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventos.map(evento => (
            <EventoItem key={evento.id} evento={evento} />
        ))}
    </div>
    )


}

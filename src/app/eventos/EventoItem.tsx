'use client'

interface EventoItemProps{
    evento: Evento
}


export default function EventoItem({evento}: EventoItemProps){
    return(
        <>
            <div className="bg-[#034752] p-6 rounded-lg shadow-lg flex flex-col mb-4">
                <span className="text-xl font-bold mb-2">{evento.nome}</span>
                <span className="mb-1">{evento.descricao}</span>
                <span className="mb-1">{evento.data}</span>
                <span className="mb-1">{evento.localizacao}</span>
                <span className="mb-1">{evento.doacao}</span>
                <span className="font-semibold">{evento.autor.nome}</span>
                
            </div>
        
        </>
        
    )

}
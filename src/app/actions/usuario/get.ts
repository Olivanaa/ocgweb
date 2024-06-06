'use server'

export async function getUsuario(id:number) {
    const resp = await fetch (`${process.env.API_BASE_URL}/usuario/${id}`, {next: {revalidate: 0}})

    if(!resp.ok){
        throw new Error("usuario não encontrado")
    }

    return await resp.json()
}
'use server'

export async function getById(id:number) {
    console.log(id)
    const resp = await fetch (`${process.env.API_BASE_URL}/usuario/${id}`, {next: {revalidate: 0}})
    
    if(!resp.ok){
        throw new Error("registro não encontrado")
    }
    return await resp.json()
    
}

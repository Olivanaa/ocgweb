'use server'

export async function getEvento() {
    const resp = await fetch (`${process.env.API_BASE_URL}/evento`, {next: {revalidate: 0}})

    return await resp.json()
}
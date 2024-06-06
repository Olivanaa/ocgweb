'use server'

export async function getById(id: number) {
    const response = await fetch(`${process.env.API_BASE_URL}/blog/${id}`)

    if (!response.ok) {
        throw new Error('Post não encontrado')
    }

    return await response.json()
}
'use server'

export async function get( mes?: number, page?: number) {
    if (!page) page = 1
    page = page - 1

    const queryParam = new URLSearchParams()
    if (mes) queryParam.append('mes', mes.toString())
    queryParam.append('page', page.toString())

    const url = `${process.env.API_BASE_URL}/blog?${queryParam.toString()}`
    console.log(url)
    const resp = await fetch(url, { next: { revalidate: 0 } })
    console.log(resp)
    const json = await resp.json()
    console.log(json)
    return json


    

}
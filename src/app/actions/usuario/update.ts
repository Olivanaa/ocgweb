'use server'

import { redirect } from "next/navigation"

export async function update(prevState: any, formData: FormData) {

    const date = formData.get("dtaNascimento");
    const partes = String(date).split('-');
    formData.set("dtaNascimento", partes[2] + '/' + partes[1] + '/' + partes[0]);

    const data = {
        id: formData.get("id"),
        nome: formData.get("nome"),
        telefone: formData.get("telefone"),
        email: formData.get("email"),
        tipo: formData.get("tipo"),
        senha: formData.get("senha")

    };

    console.log(data);

    const response = await fetch(`${process.env.API_BASE_URL}/usuario/${formData.get('id')}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log(response);


    if (!response.ok) {
        return {
            messageNome: 'Erro ao atualizar'
        }
    }

    if (response.ok) {
        redirect(`/usuario/${formData.get('id')}`)
    }
}
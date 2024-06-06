'use server'

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
  await new Promise(r => setTimeout(r, 30))

  
  const data = {
    nome: formData.get("nome"),
    telefone: formData.get("telefone"),
    email: formData.get("email"),
    tipo: formData.get("tipo"),
    senha: formData.get("senha")

  };

  console.log(data);
  
   

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const resp = await fetch(`${process.env.API_BASE_URL}/usuario`, options)

  if (resp.status === 201) {
    const userData = await resp.json();
    console.log(userData)
    redirect(`/usuario/new/endereco/${userData.id}`);
  } else if (resp.status === 400) {
    const messages = await resp.json();
    return {
      message_nome: messages.find((e: any) => e.nome === "nome")?.mensagem || "",
      message_telefone: messages.find((e: any) => e.telefone === "telefone")?.mensagem || "",
      message_email: messages.find((e: any) => e.email === "email")?.mensagem || "",
      message_senha: messages.find((e: any) => e.senha === "senha")?.mensagem || "",
      message_tipo: messages.find((e: any) => e.tipo === "tipo")?.mensagem || "",
    }
  } else {
    console.error(`Unexpected response status: ${resp.status}`);
  }
}

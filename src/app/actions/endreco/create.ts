"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
  await new Promise(r => setTimeout(r, 3000))

  const data = {
    logradouro: formData.get("logradouro"),
    numero: formData.get("numero"),
    complemento: formData.get("complemento"),
    bairro: formData.get("bairro"),
    cidade: formData.get("cidade"),
    estado:formData.get("estado"),
    cep:formData.get("cep"),
    userId:formData.get("userId")

  };


  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const resp = await fetch(`${process.env.API_BASE_URL}/endereco`, options)

  if (resp.status == 201) redirect("/login")

  if(resp.status == 400){
    const messages = await resp.json()

    return{
      message_logradouro: messages.find( (e:any) => e.logradouro == "logradouro")?.mensagem || "",
      message_numero: messages.find( (e:any) => e.numero == "numero")?.mensagem || "",
      message_complemento: messages.find( (e:any) => e.complemento == "complemento")?.mensagem || "",
      message_bairro: messages.find( (e:any) => e.bairro == "bairro")?.mensagem || "",
      message_cidade: messages.find( (e:any) => e.cidade == "cidade")?.mensagem || "",
      message_estado: messages.find( (e:any) => e.estado == "estado")?.mensagem || "",
      message_cep: messages.find( (e:any) => e.cep == "cep")?.mensagem || "",
    }
  }
}

"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData) {
  await new Promise(r => setTimeout(r, 3000));

  const date = formData.get("data");
  const partes = String(date).split('-');
  formData.set("data", partes[2] + '/' + partes[1] + '/' + partes[0]);

  const usuarioId = formData.get("usuario");

  const usuarioResp = await fetch(`${process.env.API_BASE_URL}/usuario/${usuarioId}`);
  if (usuarioResp.status !== 200) {
      console.error("Erro ao buscar dados do usuário");
      return;
  }
  const userData = await usuarioResp.json();

  const data = {
      descricao: formData.get("descricao"),
      tipo: formData.get("tipo"),
      nivel: formData.get("nivel"),
      latitude: formData.get("latitude"),
      longitude: formData.get("longitude"),
      data: formData.get("data"),
      usuario: {
          id: userData.id,
          nome: userData.nome,
          telefone: userData.telefone,
          email: userData.email,
          senha: userData.senha,
          tipo: userData.tipo
      }
  };

  console.log(data);

  const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json"
      }
  };

  const resp = await fetch(`${process.env.API_BASE_URL}/reporte`, options);

  if (resp.status === 201) {
      const responseData = await resp.json();
      console.log(responseData);
      redirect(`/usuario/${usuarioId}`);
  }

  if(resp.status == 400){

    const messages = await resp.json()

    return{
      message_descricao: messages.find( (e:any) => e.descricao == "descricao")?.mensagem || "",
      message_tipo: messages.find( (e:any) => e.tipo == "tipo")?.mensagem || "",
      message_nivel: messages.find( (e:any) => e.nivel == "nivel")?.mensagem || "",
      message_data: messages.find( (e:any) => e.data == "data")?.mensagem || "",
      message_latitude: messages.find( (e:any) => e.latitude == "latitude")?.mensagem || "",
      message_longitude: messages.find( (e:any) => e.longitude == "longitude")?.mensagem || "",
    }
  }
}

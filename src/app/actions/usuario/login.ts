'use server'

import { redirect } from "next/navigation"

export async function login(email: string, senha: string) {
   
      const response = await fetch(`${process.env.API_BASE_URL}/usuario/login?email=${email}&senha=${senha}`);
  
      if (response.status === 200) {
        const userData = await response.json();
        console.log(userData)
        redirect(`/usuario/${userData}`);
      } else if(response.status === 400 || response.status === 401){
        return {
            error: "Email ou senha inválidos"
          };
        } else {
            console.error(`Unexpected response status: ${response.status}`);
            return { error: "Erro inesperado" };
          }

    }
export async function getCep(cep: string) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
  
      if (data.erro) {
        return {
          error: "CEP não encontrado!"
        };
      }
  
      return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf
      };
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      return {
        error: "Erro ao buscar CEP!"
      };
    }
  }
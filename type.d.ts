interface Usuario { 

    id: number,
    nome: string,
    dtaNascimento: string, 
    telefone: string,
    email: string,
    senha: string

}

interface Endereco {
    id: number,
    logradouro: string,
    numero: string, 
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    userId: string
}

interface Post {
    id: number,
    data: string,
    titulo: string,
    artigo: string, 
    autor: Usuario
}

interface Evento{
    id: number, 
    nome: string,
    descricao: string,
    localizacao: string,
    data: string
    doacao: string,
    autor: Usuario
}

interface Reporte{
    id: number,
    descricao: string,
    tipo: string,
    nivel: string, 
    latidade: string, 
    longitude: string,
    data: string
    autor: Usuario
}
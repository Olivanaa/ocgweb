'use client'
import { create } from "@/app/actions/usuario/create";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { tipoUsuario } from "@/util/TipoUsuario";
import { Button, Card, CardBody, Input, Select, SelectItem } from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
    message_nome: '',
    message_data: '',
    message_telefone: '',
    message_email: '',
    message_senha: '',
    message_tipo: ''
}

export default async function Signup() {

    const [state, formAction] = useFormState(create, initialState)
    const { pending } = useFormStatus()

   
    return (
        <>
            <Navbar />
            <div className="flex h-screen">
                <div className="w-1/2">
                    <img src="/images/ocean.png" alt="Signup Image" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 bg-[#021922] flex flex-col justify-center p-8 ">
                    <Card className="max-w-full w-[400px] mx-auto mt-14">
                        <CardBody>
                            <h2 className="text-2xl font-bold mb-4 text-center">Cadastro</h2>
                            <form action={formAction} className="flex flex-col gap-4">
                                <Input
                                    key="nome"
                                    type="text"
                                    label="Nome"
                                    name="nome"
                                    isRequired={true}
                                    isInvalid={state?.message_nome != ''}
                                    errorMessage={state?.message_nome}

                                />
                          
                                <Input
                                    key="telefone"
                                    type="tel"
                                    label="Telefone"
                                    name="telefone"
                                    isRequired={true}
                                    isInvalid={state?.message_telefone != ''}
                                    errorMessage={state?.message_telefone}

                                />
                                <Input
                                    key="email"
                                    type="email"
                                    label="Email"
                                    name="email"
                                    isRequired={true}
                                    isInvalid={state?.message_email != ''}
                                    errorMessage={state?.message_email}

                                />
                                <Input
                                    key="senha"
                                    type="password"
                                    label="Senha"
                                    name="senha"
                                    isRequired={true}
                                    isInvalid={state?.message_senha != ''}
                                    errorMessage={state?.message_senha}

                                />
                                <Select
                                    key="tipo"
                                    name="tipo"
                                    isRequired={true}
                                    isInvalid={state?.message_tipo != ''}
                                    errorMessage={state?.message_tipo}
                                    label="Selecione..."
                                >
                                    {tipoUsuario.map((tipo) => (
                                        <SelectItem key={tipo.value} value={tipo.value}>
                                            {tipo.name}
                                            
                                        </SelectItem>
                                        ))}
                   
                                </Select>

                                <div className="flex gap-2 justify-end">
                                    <Button type="submit" color="primary" isLoading={pending} fullWidth>
                                        Próximo
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <Footer />
        </>

    );
}
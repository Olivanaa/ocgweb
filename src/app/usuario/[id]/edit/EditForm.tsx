'use client'

import { update } from "@/app/actions/usuario/update"
import { tipoUsuario } from "@/util/TipoUsuario"
import { Button, Card, CardBody, Input, Select, SelectItem } from "@nextui-org/react"
import { useFormState } from "react-dom"

const initialState = {
    messageNome: ''
    
}

export function EditForm(usuario: Usuario) {
    const [state, formAction] = useFormState(update, initialState)

    return (
       
        <div className="bg-[#021922] ">
        <Card className="max-w-full w-[400px] mx-auto mt-14">
            <CardBody>
                <h2 className="text-2xl font-bold mb-4 text-center">Editar Perfil</h2>
                <form action={formAction} className="flex flex-col gap-4">
                <input type="hidden" name="id" value={usuario.id} />
                    <Input
                        key="nome"
                        type="text"
                        label="Nome"
                        name="nome"
                        defaultValue={usuario.nome}
                        isRequired={true}
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}

                    />
         
                    <Input
                        key="telefone"
                        type="tel"
                        label="Telefone"
                        name="telefone"
                        defaultValue={usuario.telefone}
                        isRequired={true}
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}

                    />
                    <Input
                        key="email"
                        type="email"
                        label="Email"
                        name="email"
                        defaultValue={usuario.email}
                        isRequired={true}
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}

                    />
                    <Input
                        key="senha"
                        type="password"
                        label="Senha"
                        name="senha"
                        defaultValue={usuario.senha}
                        isRequired={true}
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}

                    />
                    <Select
                        key="tipo"
                        name="tipo"
                        isRequired={true}
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}
                        label="Selecione..."
                    >
                        {tipoUsuario.map((tipo) => (
                            <SelectItem key={tipo.value} value={tipo.value}>
                                {tipo.name}
                                
                            </SelectItem>
                            ))}
       
                    </Select>

                    <div className="flex gap-2 justify-end">
                        <Button type="submit" color="primary" fullWidth>
                            Próximo
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    </div>
    
    
    
    
    )



    
    }

      
       

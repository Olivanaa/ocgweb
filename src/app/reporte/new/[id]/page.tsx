'use client'

import { create } from "@/app/actions/reporte/create"
import Footer from "@/components/Footer"
import Mapa from "@/components/Mapa"
import Navbar from "@/components/Navbar"
import { tipoNivel } from "@/util/TipoNivel"
import { tipoPoluicao } from "@/util/TipoPoluicao"
import { Card, CardBody, Select, SelectItem, Button, Input } from "@nextui-org/react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useFormState, useFormStatus } from "react-dom"

const initialState = {
    message_descricao: '',
    message_tipo: '',
    message_nivel: '',
    message_data: '',
    message_latitude: '',
    message_longitude: ''
}


export default function NewReporte() {
    const { id } = useParams(); 
    const [state, formAction] = useFormState(create, initialState);
    const { pending } = useFormStatus();
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleLocationSelect = (latlng: L.LatLng) => {
        setLatitude(latlng.lat.toString());
        setLongitude(latlng.lng.toString());
    };
    const [formData, setFormData] = useState({
        descricao: '',
        tipo: '',
        nivel: '',
        data: '',
        latitude: '',
        longitude: '',
        usuario: id || '' 
      });

      useEffect(() => {
        if (id) {
          setFormData(prevState => ({
            ...prevState,
            usuario: id
          }));
        }
      }, [id]);


    console.log(id)

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row bg-[#021922] min-h-screen p-8">
                <Card className="max-w-full w-[400px] mx-auto md:mr-8 mt-14">
                    <CardBody>
                        <h2 className="text-2xl font-bold mb-4 text-center">Reportar Poluição</h2>
                        <form action={formAction} className="flex flex-col gap-4">
                        <input type="hidden" name="usuario" value={formData.usuario} />
                            <Input
                                key="descricao"
                                type="text"
                                label="Descrição"
                                name="descricao"
                                isRequired={true}
                                isInvalid={state?.message_descricao != ''}
                                errorMessage={state?.message_descricao}
                            />
                            <Select
                                key="tipo"
                                name="tipo"
                                isRequired={true}
                                isInvalid={state?.message_tipo != ''}
                                errorMessage={state?.message_tipo}
                                label="Selecione o tipo"
                            >
                                {tipoPoluicao.map((tipo) => (
                                    <SelectItem key={tipo.value} value={tipo.value}>
                                        {tipo.name}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Select
                                key="nivel"
                                name="nivel"
                                isRequired={true}
                                isInvalid={state?.message_nivel != ''}
                                errorMessage={state?.message_nivel}
                                label="Selecione o nivel"
                            >
                                {tipoNivel.map((nivel) => (
                                    <SelectItem key={nivel.value} value={nivel.value}>
                                        {nivel.name}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Input
                                key="data"
                                type="date"
                                label="Data"
                                name="data"
                                isRequired={true}
                                isInvalid={state?.message_data != ''}
                                errorMessage={state?.message_data}
                            />
                            <Input
                                key="latitude"
                                name="latitude"
                                value={latitude}
                                label="Latitude"
                                readOnly
                            />
                            <Input
                                key="longitude"
                                name="longitude"
                                value={longitude}
                                label="Longitude"
                                readOnly
                            />
                            <div className="flex gap-2 justify-end">
                                <Button type="submit" color="primary" isLoading={pending} fullWidth>
                                    Enviar
                                </Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
                <div className="flex-grow mt-14">
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Selecione a Localização no Mapa</h3>

                    <Mapa onLocationSelect={handleLocationSelect} />

                </div>
            </div>
            <Footer />
        </>
    );
}
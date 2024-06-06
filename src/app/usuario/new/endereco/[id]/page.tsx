'use client';

import { create } from "@/app/actions/endreco/create";
import { getCep } from "@/app/actions/endreco/getcep";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";


const initialState = {
  message_logradouro: '',
  message_numero: '',
  message_complemento: '',
  message_bairro: '',
  message_cidade: '',
  message_estado: '',
  message_cep: '',
  cep: '',
  logradouro: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  estado: '', 
  
}

export default function EnderecoForm() {

  const [state, formAction] = useFormState(create, initialState)
  const { pending } = useFormStatus()
  const { id } = useParams(); 
  


  const [formData, setFormData] = useState({
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    userId: id || '' 
  });

  useEffect(() => {
    if (id) {
      setFormData(prevState => ({
        ...prevState,
        userId: id
      }));
    }
  }, [id]);

  const handleCepChange = async (e: any) => {
    const cepValue = e.target.value.replace(/\D/g, '');
    setFormData(prevFormData => ({
      ...prevFormData,
      cep: cepValue
    }));

    if (cepValue.length === 8) {
      const addressData = await getCep(cepValue);
      if (addressData.error) {
        console.log(addressData.error);
      } else {
        setFormData(prevFormData => ({
          ...prevFormData,
          ...addressData
        }));
      }
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="w-1/2">
          <img src="/images/ocean.png" alt="Address Image" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 bg-[#021922] flex flex-col justify-center p-8">
          <Card className="max-w-full w-[400px] mx-auto mt-20 max-h-screen overflow-hidden">
            <CardBody>
              <h2 className="text-2xl font-bold mb-4 text-center">Endereço</h2>
              <form action={formAction} className="flex flex-col gap-4">
              <input type="hidden" name="userId" value={formData.userId} />
                <Input
                  key="cep"
                  type="text"
                  label="Cep"
                  name="cep"
                  placeholder="Digite seu CEP"
                  isRequired={true}
                  value={formData.cep}
                  onChange={handleCepChange}
                />
                <Input
                  key="logradouro"
                  type="text"
                  label="Rua"
                  name="logradouro"
                  isRequired={true}
                  isInvalid={state?.message_logradouro !== ''}
                  errorMessage={state?.message_logradouro}
                  value={formData.logradouro}
                  onChange={handleChange}
                />
                <Input
                  key="numero"
                  type="text"
                  label="Número"
                  name="numero"
                  isRequired={true}
                  isInvalid={state?.message_numero !== ''}
                  errorMessage={state?.message_numero}
                  value={formData.numero}
                  onChange={handleChange}
                />
                <Input
                  key="complemento"
                  type="text"
                  label="Complemento"
                  name="complemento"
                  isRequired={false}
                  isInvalid={state?.message_complemento !== ''}
                  errorMessage={state?.message_complemento}
                  value={formData.complemento}
                  onChange={handleChange}
                />
                <Input
                  key="bairro"
                  type="text"
                  label="Bairro"
                  name="bairro"
                  isRequired={true}
                  isInvalid={state?.message_bairro !== ''}
                  errorMessage={state?.message_bairro}
                  value={formData.bairro}
                  onChange={handleChange}
                />
                <Input
                  key="cidade"
                  type="text"
                  label="Cidade"
                  name="cidade"
                  isRequired={true}
                  isInvalid={state?.message_cidade !== ''}
                  errorMessage={state?.message_cidade}
                  value={formData.cidade}
                  onChange={handleChange}
                />
                <Input
                  key="estado"
                  type="text"
                  label="Estado"
                  name="estado"
                  isRequired={true}
                  isInvalid={state?.message_estado !== ''}
                  errorMessage={state?.message_estado}
                  value={formData.estado}
                  onChange={handleChange}
                />
                <div className="flex gap-2 justify-end">
                  <Button type="submit" color="primary" isLoading={pending}>
                    Enviar
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
'use client';
import React, { useState } from "react";
import { Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "../actions/usuario/login";
import { redirect } from "next/navigation";



export default function Login() {
    const [msgstatus, setMsgstatus] = useState("");
    const [classStatus, setClassStatus] = useState("");
    const [usuario, setUsuario] = useState({
        email: "",
        senha: "",
        id: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await login(usuario.email, usuario.senha);

        if (response.error || null) {
            setMsgstatus("Email ou senha inválidos");
            setClassStatus("login-erro");
            setTimeout(() => {
                setMsgstatus("");
                setUsuario({
                    email: "",
                    senha: "",
                    id: "",
                });
            }, 5000);
        } else {
            setMsgstatus("Login bem-sucedido");
            setClassStatus("login-sucesso");
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex h-screen">
                <div className="w-1/2">
                    <img src="/images/ocean.png" alt="Login Image" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 bg-[#021922] flex flex-col justify-center p-8">
                    <Card className="max-w-full w-[400px] mx-auto ">
                        <CardBody>
                            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                                <Input
                                    name="email"
                                    value={usuario.email}
                                    onChange={handleChange}
                                    isRequired
                                    label="Email"
                                    type="email"
                                />
                                <Input
                                    name="senha"
                                    value={usuario.senha}
                                    onChange={handleChange}
                                    isRequired
                                    label="Senha"
                                    type="password"
                                />
                                <p className="text-center text-small text-white">
                                    Ainda não está cadastrado?{" "}
                                    <Link size="sm" href="/usuario/new">
                                        Cadastre-se
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary" type="submit">
                                        Entrar
                                    </Button>
                                </div>

                            </form>
                        </CardBody>
                    </Card>

                </div>
            </div>
            <Footer />
        </>
    )


}
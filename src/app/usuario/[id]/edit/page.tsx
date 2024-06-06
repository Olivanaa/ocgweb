'use client'

import { getById } from "@/app/actions/usuario/get-by-id";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";




export default async function EditarPerfil() {
  const { id  } = useParams<{ id : string }>();

  const usuario: Usuario = await getById(parseInt(id))

  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center bg-[#021922] min-h-screen p-8">


        <EditForm {...usuario} />



      </main>
      <Footer />
    </>

  );
}
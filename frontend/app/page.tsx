"use client"

import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HomePag() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-gray-300">
        <h2 className="flex justify-center pt-20 text-5xl text-gray-700">IquanafiX</h2>
        <section className="flex justify-center pt-5">
            <DotLottieReact src="https://lottie.host/4c6ab2dc-ded9-4eaf-83f5-ce62f0d3d8f0/2qexxLLi47.lottie" loop autoplay className="flex w-2xl"/>
        </section>
        <h2 className="text-center pt-5 text-2xl text-gray-700">Seja bem Vindo!</h2>
        <p className="text-center text-gray-700 pt-20">
          Tenha acesso a centenas de trabalho diariamente. Faça seu negócio crecer e 
          consiga novos clientes pertos da sua casa!
        </p>

        <section className="flex flex-col justify-center items-center pt-9 gap-2.5 bg-gray-300">
          <Link href="/" className="bg-blue-700 text-gray-300 p-2 w-80 mr-3.5 ml-3.5 text-center cursor-pointer">Criar conta</Link>
          <Link href="/" className="text-blue-700 p-2 border border-blue-600 w-80 mr-3.5 ml-3.5 text-center cursor-pointer">Já tenho conta</Link>
        </section>
      </main>
    </>
  )
}

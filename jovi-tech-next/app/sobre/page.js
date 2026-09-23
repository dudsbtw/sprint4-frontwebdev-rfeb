"use client";

import Link from "next/link";
import Footer from "../components/Footer";

// rota publica, sem restricao de login
export default function Sobre() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white py-6 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-500">Sobre a Jovi Tech</h1>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10 flex-1">
        <p className="text-gray-700 leading-relaxed">
          A Jovi Tech desenvolve tecnologias de câmeras inteligentes para smartphones,
          usando inteligência artificial para melhorar automaticamente o enquadramento,
          a iluminação e o foco das fotos, sem que o usuário precise editar nada manualmente.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Este projeto foi desenvolvido pela equipe como parte da Sprint 4 das disciplinas
          de Front-End Design e Web Development, evoluindo a solução criada na Sprint 3.
        </p>

        <Link href="/" className="inline-block mt-6 text-red-600 font-semibold hover:underline">
          ← Voltar para a página inicial
        </Link>
      </main>

      <Footer />
    </div>
  );
}

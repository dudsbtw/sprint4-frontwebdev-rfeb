"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

/**
 * Rota privada: só acessível a quem estiver logado (useAuth). Sem login
 * válido, redireciona automaticamente para a home.
 */
export default function Painel() {
  const { usuario, carregado, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (carregado && !usuario) {
      router.push("/");
    }
  }, [carregado, usuario, router]);

  if (!carregado || !usuario) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Verificando login...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white py-6 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-500">Painel</h1>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10 flex-1 text-center">
        <p className="text-gray-700 text-lg">Bem-vindo, {usuario}!</p>
        <p className="text-gray-500 mt-2">Esta é uma área restrita, visível apenas para usuários logados.</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => { logout(); router.push("/"); }}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white font-semibold"
          >
            Sair
          </button>
          <Link href="/" className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 font-semibold">
            Voltar para a home
          </Link>
        </div>
      </main>
    </div>
  );
}

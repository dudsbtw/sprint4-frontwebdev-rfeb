"use client";

import Link from "next/link";

function Header({ onAbrirLogin, onExplorar, usuario, onLogout }) {
  function irPara(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="bg-gray-900 text-white py-6 px-4 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-red-500">Jovi Tech — Câmeras</h1>
      <p className="text-gray-300 mt-1">Tecnologia de câmeras inteligentes para smartphones Jovi.</p>

      <nav className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
        <button onClick={() => irPara("slideshow")} className="px-3 py-2 rounded bg-gray-800 hover:bg-gray-700 text-sm sm:text-base">
          Galeria
        </button>
        <button onClick={() => irPara("contato")} className="px-3 py-2 rounded bg-gray-800 hover:bg-gray-700 text-sm sm:text-base">
          Contato
        </button>
        <Link href="/sobre" className="px-3 py-2 rounded bg-gray-800 hover:bg-gray-700 text-sm sm:text-base">
          Sobre
        </Link>

        {usuario ? (
          <>
            <Link href="/painel" className="px-3 py-2 rounded bg-red-600 hover:bg-red-500 text-sm sm:text-base">
              Painel
            </Link>
            <button onClick={onLogout} className="px-3 py-2 rounded bg-gray-800 hover:bg-gray-700 text-sm sm:text-base">
              Sair
            </button>
          </>
        ) : (
          <button onClick={onAbrirLogin} className="px-3 py-2 rounded bg-red-600 hover:bg-red-500 text-sm sm:text-base">
            Entrar
          </button>
        )}

        <button onClick={onExplorar} className="px-3 py-2 rounded bg-gray-800 hover:bg-gray-700 text-sm sm:text-base">
          Explorar
        </button>
      </nav>
    </header>
  );
}

export default Header;

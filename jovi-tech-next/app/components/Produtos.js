"use client";

import { useProdutos } from "../hooks/useProdutos";

// lista os produtos vindos da api publica, usada como mock
function Produtos() {
  const { produtos, carregando, erro } = useProdutos();

  return (
    <div id="produtos" className="max-w-4xl mx-auto my-8 px-4">
      <h2 className="text-xl font-bold text-center mb-4">Novidades da loja</h2>

      {carregando && <p className="text-center text-gray-500">Carregando produtos...</p>}
      {erro && <p className="text-center text-red-500">{erro}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {produtos.map((p) => (
          <div key={p.id} className="bg-white border border-gray-300 rounded p-3 text-center">
            <img src={p.image} alt={p.title} className="h-20 mx-auto object-contain" />
            <p className="text-xs mt-2 line-clamp-2">{p.title}</p>
            <strong className="text-sm">${p.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;

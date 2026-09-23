"use client";

import { useState } from "react";
import { useMensagens } from "../hooks/useMensagens";

function ContactForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const { erros, validar, salvar } = useMensagens();

  function enviarForm(e) {
    e.preventDefault();
    if (!validar(nome, email, mensagem)) return;

    salvar(nome, email, mensagem);
    alert("Mensagem enviada! Obrigado, " + nome.trim().split(" ")[0] + ".");
    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <div id="contato" className="max-w-md mx-auto my-8 px-4">
      <form onSubmit={enviarForm} className="bg-white border border-gray-300 rounded p-6 shadow">
        <h2 className="text-xl font-bold text-center mb-4">Fale Conosco</h2>

        <label htmlFor="nome" className="block font-semibold mt-3">Nome</label>
        <input
          type="text"
          id="nome"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        />
        {erros.nome && <span className="text-red-500 text-sm">Preencha o nome.</span>}

        <label htmlFor="email" className="block font-semibold mt-3">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        />
        {erros.email && <span className="text-red-500 text-sm">E-mail inválido.</span>}

        <label htmlFor="mensagem" className="block font-semibold mt-3">Mensagem</label>
        <textarea
          id="mensagem"
          placeholder="Escreva aqui..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1 h-20"
        />
        {erros.msg && <span className="text-red-500 text-sm">Mínimo de 10 caracteres.</span>}

        <button type="submit" className="w-full mt-4 bg-red-600 hover:bg-red-500 text-white font-semibold py-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

"use client";

import { useState } from "react";

const CHAVE_STORAGE = "jovitech-mensagens";

// valida e salva as mensagens do formulario de contato no localStorage
export function useMensagens() {
  const [erros, setErros] = useState({ nome: false, email: false, msg: false });

  // confere nome, email e tamanho minimo da mensagem
  function validar(nome, email, mensagem) {
    const nomeInvalido = nome.trim().length < 2;
    const emailInvalido = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const msgInvalida = mensagem.trim().length < 10;

    setErros({ nome: nomeInvalido, email: emailInvalido, msg: msgInvalida });
    return !(nomeInvalido || emailInvalido || msgInvalida);
  }

  // adiciona a mensagem na lista guardada no localStorage
  function salvar(nome, email, mensagem) {
    const mensagens = JSON.parse(localStorage.getItem(CHAVE_STORAGE) || "[]");
    mensagens.push({
      id: Date.now(),
      nome: nome.trim(),
      email: email.trim(),
      mensagem: mensagem.trim(),
      data: new Date().toISOString(),
    });
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(mensagens));
  }

  return { erros, validar, salvar };
}

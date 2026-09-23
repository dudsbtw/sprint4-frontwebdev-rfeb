"use client";

import { useState, useEffect, useCallback } from "react";

const USUARIOS = { admin: "jovi2026", aluno: "facul123" };
const CHAVE_STORAGE = "jovitech-auth";

/**
 * Hook customizado que guarda a lógica de autenticação (simulada, sem back-end),
 * separando essa lógica dos componentes visuais (LoginModal, Header, /painel).
 */
export function useAuth() {
  const [usuario, setUsuario] = useState(null);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const salvo = localStorage.getItem(CHAVE_STORAGE);
    if (salvo) setUsuario(salvo);
    setCarregado(true);
  }, []);

  const login = useCallback((user, senha) => {
    if (USUARIOS[user] === senha) {
      localStorage.setItem(CHAVE_STORAGE, user);
      setUsuario(user);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(CHAVE_STORAGE);
    setUsuario(null);
  }, []);

  return { usuario, login, logout, carregado };
}

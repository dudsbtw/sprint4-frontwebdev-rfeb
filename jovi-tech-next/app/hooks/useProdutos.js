"use client";

import { useState, useEffect } from "react";

/**
 * Hook customizado que consome uma API pública de terceiros (FakeStoreAPI,
 * usada aqui como mock) para listar itens em destaque, separando a chamada
 * de rede da parte visual (componente Produtos).
 */
export function useProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => {
        if (!res.ok) throw new Error("Não foi possível carregar os produtos.");
        return res.json();
      })
      .then((data) => setProdutos(data))
      .catch((err) => setErro(err.message))
      .finally(() => setCarregando(false));
  }, []);

  return { produtos, carregando, erro };
}

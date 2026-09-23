"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import TechCards from "./components/TechCards";
import Produtos from "./components/Produtos";
import ContactForm from "./components/ContactForm";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import { useAuth } from "./hooks/useAuth";

export default function Home() {
  const [modalAberto, setModalAberto] = useState(false);
  const { usuario, login, logout } = useAuth();

  function handleExplorar() {
    const res = prompt("Qual tecnologia quer explorar?\n1 - IA Multi-Frame\n2 - Modo Noturno\n3 - Macro Neural\n4 - Vídeo 8K");
    const mapa = { "1": "IA Multi-Frame", "2": "Modo Noturno", "3": "Macro Neural", "4": "Vídeo 8K" };
    if (mapa[res]) {
      alert("Você escolheu: " + mapa[res]);
    } else if (res !== null) {
      alert("Opção inválida. Digite 1, 2, 3 ou 4.");
    }
  }

  useEffect(() => {
    function fecharComEsc(e) {
      if (e.key === "Escape") setModalAberto(false);
    }
    document.addEventListener("keydown", fecharComEsc);
    return () => document.removeEventListener("keydown", fecharComEsc);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        onExplorar={handleExplorar}
        onAbrirLogin={() => setModalAberto(true)}
        usuario={usuario}
        onLogout={logout}
      />
      <Slideshow />
      <TechCards />
      <Produtos />
      <ContactForm />
      <LoginModal aberto={modalAberto} onFechar={() => setModalAberto(false)} onLogin={login} />
      <Footer />
    </div>
  );
}

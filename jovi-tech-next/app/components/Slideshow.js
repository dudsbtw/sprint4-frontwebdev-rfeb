"use client";

import { useState, useEffect } from "react";

const slides = [
  { img: "/images/slide1.jpg", titulo: "IA Multi-Frame", desc: "Fusão de frames para fotos sem borrão." },
  { img: "/images/slide2.jpg", titulo: "Modo Noturno", desc: "Nítido mesmo com pouca luz." },
  { img: "/images/slide3.jpg", titulo: "Macro Neural", desc: "Foco inteligente a milímetros." },
  { img: "/images/slide4.jpg", titulo: "Vídeo 8K", desc: "Estabilização óptica em tempo real." },
];

function Slideshow() {
  const [atual, setAtual] = useState(0);

  function mudarSlide(dir) {
    setAtual((prev) => (prev + dir + slides.length) % slides.length);
  }

  useEffect(() => {
    const intervalo = setInterval(() => mudarSlide(1), 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div id="slideshow" className="max-w-2xl mx-auto my-8 px-4">
      <div className="border border-gray-300 rounded overflow-hidden bg-white shadow">
        <img
          src={slides[atual].img}
          alt={slides[atual].titulo}
          className="w-full h-48 sm:h-56 object-cover block"
        />
        <div className="p-4 text-center">
          <strong className="block text-lg">{slides[atual].titulo}</strong>
          <p className="text-gray-600">{slides[atual].desc}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-3">
        <button onClick={() => mudarSlide(-1)} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          ← Anterior
        </button>
        <span className="text-sm text-gray-600">{atual + 1} / {slides.length}</span>
        <button onClick={() => mudarSlide(1)} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          Próximo →
        </button>
      </div>
    </div>
  );
}

export default Slideshow;

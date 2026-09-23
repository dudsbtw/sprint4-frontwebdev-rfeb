"use client";

const techs = [
  { icone: "🧠", titulo: "IA Embarcada", desc: "Processamento no chip." },
  { icone: "🔭", titulo: "Zoom 100×", desc: "Sem perda de qualidade." },
  { icone: "⚡", titulo: "HDR Real", desc: "Exposição perfeita." },
  { icone: "🔒", titulo: "Privacidade", desc: "Dados no aparelho." },
];

function TechCards() {
  function handleClick(t) {
    alert(t.icone + " " + t.titulo + "\n\n" + t.desc);
  }

  return (
    <div id="cards" className="max-w-4xl mx-auto my-8 px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {techs.map((t, i) => (
        <div
          key={i}
          onClick={() => handleClick(t)}
          className="cursor-pointer text-center bg-white border border-gray-300 rounded p-4 hover:bg-gray-100 transition"
        >
          <p className="text-3xl">{t.icone}</p>
          <strong className="block mt-2">{t.titulo}</strong>
          <p className="text-sm text-gray-600">{t.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default TechCards;

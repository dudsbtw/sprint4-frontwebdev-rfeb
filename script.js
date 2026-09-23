// ── RODAPÉ COM ANO DINÂMICO
var ano = new Date().getFullYear();
document.getElementById("rodape").textContent = "© " + ano + " Jovi Tech. Todos os direitos reservados.";

// ── SLIDESHOW COM IMAGENS REAIS
var slides = [
  {
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800",
    titulo: "IA Multi-Frame",
    desc: "Fusão de frames para fotos sem borrão."
  },
  {
    img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
    titulo: "Modo Noturno",
    desc: "Nítido mesmo com pouca luz."
  },
  {
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
    titulo: "Macro Neural",
    desc: "Foco inteligente a milímetros."
  },
  {
    img: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
    titulo: "Vídeo 8K",
    desc: "Estabilização óptica em tempo real."
  },
];

var atual = 0;

function mostrarSlide() {
  var s = slides[atual];
  document.getElementById("slide-conteudo").innerHTML =
    "<img src='" + s.img + "' style='width:100%;height:220px;object-fit:cover;display:block;'>" +
    "<div style='padding:12px'><strong>" + s.titulo + "</strong><p>" + s.desc + "</p></div>";
  document.getElementById("slide-num").textContent =
    (atual + 1) + " / " + slides.length;
}

function mudarSlide(dir) {
  atual = (atual + dir + slides.length) % slides.length;
  mostrarSlide();
}

mostrarSlide();
setInterval(function() { mudarSlide(1); }, 4000);

// ── CARDS DINÂMICOS
var techs = [
  { icone: "🧠", titulo: "IA Embarcada", desc: "Processamento no chip."  },
  { icone: "🔭", titulo: "Zoom 100×",    desc: "Sem perda de qualidade." },
  { icone: "⚡", titulo: "HDR Real",     desc: "Exposição perfeita."     },
  { icone: "🔒", titulo: "Privacidade",  desc: "Dados no aparelho."      },
];

var container = document.getElementById("cards");

techs.forEach(function(t) {
  var div = document.createElement("div");
  div.className = "card";
  div.innerHTML = "<p>" + t.icone + "</p><strong>" + t.titulo + "</strong><p>" + t.desc + "</p>";
  div.addEventListener("click", function() {
    alert(t.icone + " " + t.titulo + "\n\n" + t.desc);
  });
  container.appendChild(div);
});

// ── BOTÃO EXPLORAR (prompt)
function explorar() {
  var res = prompt("Qual tecnologia quer explorar?\n1 - IA Multi-Frame\n2 - Modo Noturno\n3 - Macro Neural\n4 - Vídeo 8K");
  var mapa = { "1": "IA Multi-Frame", "2": "Modo Noturno", "3": "Macro Neural", "4": "Vídeo 8K" };
  if (mapa[res]) {
    alert("Você escolheu: " + mapa[res]);
  } else if (res !== null) {
    alert("Opção inválida. Digite 1, 2, 3 ou 4.");
  }
}

// ── VALIDAÇÃO DO FORMULÁRIO
function enviarForm() {
  var nome  = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim();
  var msg   = document.getElementById("mensagem").value.trim();

  document.getElementById("erro-nome").style.display  = nome.length < 2 ? "block" : "none";
  document.getElementById("erro-email").style.display = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "block" : "none";
  document.getElementById("erro-msg").style.display   = msg.length < 10 ? "block" : "none";

  if (nome.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || msg.length < 10) return;

  alert("Mensagem enviada! Obrigado, " + nome.split(" ")[0] + ".");
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensagem").value = "";
}

// ── MODAL DE LOGIN
var usuarios = { admin: "jovi2026", aluno: "facul123" };

function abrirModal()  { document.getElementById("modal").classList.add("aberto"); }
function fecharModal() { document.getElementById("modal").classList.remove("aberto"); }

function fazerLogin() {
  var user  = document.getElementById("l-user").value.trim();
  var senha = document.getElementById("l-senha").value;
  var msg   = document.getElementById("msg-login");

  if (!user || !senha) { msg.textContent = "Preencha os campos."; msg.style.color = "red"; return; }

  if (usuarios[user] === senha) {
    msg.textContent = "Bem-vindo, " + user + "!";
    msg.style.color = "green";
    setTimeout(function() {
      fecharModal();
      alert("Olá, " + user + "! Você está logado.");
    }, 800);
  } else {
    msg.textContent = "Usuário ou senha incorretos.";
    msg.style.color = "red";
  }
}

// ── FECHAR MODAL COM ESC
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") fecharModal();
});
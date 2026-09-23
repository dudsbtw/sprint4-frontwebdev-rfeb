"use client";

import { useState } from "react";

function LoginModal({ aberto, onFechar, onLogin }) {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");
  const [cor, setCor] = useState("text-black");

  function fazerLogin() {
    if (!user || !senha) {
      setMsg("Preencha os campos.");
      setCor("text-red-500");
      return;
    }

    const ok = onLogin(user, senha);
    if (ok) {
      setMsg("Bem-vindo, " + user + "!");
      setCor("text-green-600");
      setTimeout(() => {
        onFechar();
        setUser("");
        setSenha("");
        setMsg("");
      }, 800);
    } else {
      setMsg("Usuário ou senha incorretos.");
      setCor("text-red-500");
    }
  }

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
      <div className="bg-white rounded p-6 w-full max-w-xs relative">
        <button onClick={onFechar} className="absolute top-2 right-3 text-lg text-gray-500 hover:text-black">
          ✕
        </button>
        <h3 className="text-lg font-bold mb-3">Login</h3>

        <label htmlFor="l-user" className="block font-semibold mt-2">Usuário</label>
        <input
          type="text"
          id="l-user"
          placeholder="admin"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        />

        <label htmlFor="l-senha" className="block font-semibold mt-2">Senha</label>
        <input
          type="password"
          id="l-senha"
          placeholder="••••••"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        />

        <button onClick={fazerLogin} className="w-full mt-4 bg-red-600 hover:bg-red-500 text-white font-semibold py-2 rounded">
          Entrar
        </button>
        <p className={`mt-2 text-sm ${cor}`}>{msg}</p>
      </div>
    </div>
  );
}

export default LoginModal;

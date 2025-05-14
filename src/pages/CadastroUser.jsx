import { useState } from "react";
import axios from "axios";

export const CadastroUser = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/usuarios", {
        nome,
        email,
        senha,
      });

      setMensagem("Usuário cadastrado com sucesso!");
      setNome("");
      setEmail("");
      setSenha("");
    } catch (err) {
      console.error(err);
      setMensagem("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-xl font-bold mb-4">Cadastro de Usuário</h2>
      <form onSubmit={handleCadastro}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 mb-3 border"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-2 mb-3 border"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Cadastrar
        </button>
      </form>
      {mensagem && <p className="mt-4">{mensagem}</p>}
    </div>
  );
};
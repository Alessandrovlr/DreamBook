import { useState } from "react";
import axios from "axios";

export const CadastroUser = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/usuarios", {
        nome,
        email,
        senha,
      });
      setNome("");
      setEmail("");
      setSenha("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100%] rounded bg-gray-900">
      <form
        onSubmit={handleCadastro}
        className="flex flex-col justify-center items-center h-[90%] w-[80%] gap-5"
      >
        <h2 className="text-2xl font-bold">Cadastro de Usuário</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="focus:outline-none w-[40%] h-[12%] bg-gray-700 rounded-sm pl-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="focus:outline-none w-[40%] h-[12%] bg-gray-700 rounded-sm pl-2"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="focus:outline-none w-[40%] h-[12%] bg-gray-700 rounded-sm pl-2"
          required
        />
        <div className="flex flex-col w-[40%] h-[12%]">
          <button
            type="submit"
            className="bg-blue-500 text-white w-[40%] h-[100%] rounded-sm "
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

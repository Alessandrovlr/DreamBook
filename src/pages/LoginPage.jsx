import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

export const LoginPage = () => {
  const { Login } = useAppContext();
  const [userEmail, setUserEmail] = useState("");
  const [userSenha, setUserSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await Login(userEmail, userSenha);
    if (success) {
      navigate("/");
    } else {
      alert("Usuário ou senha inválido");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100%] rounded bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center h-[90%] w-[80%] gap-3"
      >
        <label htmlFor="email" className="text-xl">
          {" "}
          E-mail{" "}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="focus:outline-none w-[40%] h-[12%] bg-gray-700 rounded-sm pl-2"
        />
        <label htmlFor="password" className="text-xl">
          {" "}
          Senha
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          required
          value={userSenha}
          onChange={(e) => setUserSenha(e.target.value)}
          className="focus:outline-none w-[40%] h-[12%] bg-gray-700 rounded-sm pl-2 mb-5"
        />
        <div className="flex flex-col w-[40%] h-[12%]">
          <button
            type="submit"
            className="bg-blue-500 text-white w-[40%] h-[100%] rounded-sm"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

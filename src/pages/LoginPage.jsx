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
    <div className="flex flex-col justify-center items-center h-[100%] w-[100%]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center h-[90%] w-[60%]"
      >
        <div className="w-[100%] h-[100%]">
          <label htmlFor="email"> E-mail </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="focus:outline-none w-[30%] h-[10%] bg-gray-700 rounded-sm"
          />
          <label htmlFor="password"> Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={userSenha}
            onChange={(e) => setUserSenha(e.target.value)}
            className="focus:outline-none w-[30%] h-[10%] bg-gray-700 rounded-sm"
          />
        </div>

        <button
          type="submit"
          className="w-[30%] h-[10%] bg-blue-500 rounded-sm"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

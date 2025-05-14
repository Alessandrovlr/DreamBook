import { createContext, useContext, useEffect, useState } from "react";
import { LoginRequest } from "../services/authLogin";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [livros, setLivros] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [user, setUser] = useState(null); 

  const fetchUsuarios = async () => {
    try {
      const res = await axios.get("http://localhost:3001/usuarios");
      setUsuarios(res.data);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
    }
  };

  const fetchLivros = async () => {
    try {
      const res = await axios.get("http://localhost:3001/livros");
      setLivros(res.data);
    } catch (err) {
      console.error("Erro ao buscar livros:", err);
    }
  };

  const fetchReservas = async () => {
    try {
      const res = await axios.get("http://localhost:3001/reservas");
      setReservas(res.data);
    } catch (err) {
      console.error("Erro ao buscar reservas:", err);
    }
  };

  useEffect(() => {
    fetchUsuarios();
    fetchLivros();
    fetchReservas();
  }, []);

  
    const Login = async (userEmail, userSenha) => {
      const { success, user } = await LoginRequest(userEmail, userSenha);
      setUser(success ? user : null);
      return success;
    };
  
    const Logout = () => setUser(null);

  return (
    <AppContext.Provider
      value={{
        usuarios,
        livros,
        reservas,
        user,
        setUser,
        Login,
        Logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

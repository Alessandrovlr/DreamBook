import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [livros, setLivros] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState(null);

  const fetchLivros = async () => {
    try {
        const res = await axios.get("http://localhost:3001/livros");
        setLivros(res.data);
    } catch (err) {
      console.error("Erro ao buscar livros:", err);
    }
  };

  const fetchUsuarios = async () => {
    try {
      const res = await axios.get("http://localhost:3001/usuarios");
      setUsuarios(res.data);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
      setUsuarios("")
    }
  };

  useEffect(() => {
    fetchLivros();
    fetchUsuarios();
  }, []);

  return (
    <AppContext.Provider value={{ livros, setLivros, usuarios, setUsuarios, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => useContext(AppContext);

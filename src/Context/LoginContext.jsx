import { createContext, useState } from "react";
import { LoginRequest } from "../services/authLogin";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const Login = async (userEmail, userSenha) => {
    const { success, user } = await LoginRequest(userEmail, userSenha);
    setUser(success ? user : null);
    return success;
  };

  const Logout = () => setUser(null);

  return (
    <Context.Provider value={{ user, Login, Logout }}>
      {children}
    </Context.Provider>
  );
};

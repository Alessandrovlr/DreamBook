import axios from "axios";

const API_URL = "http://localhost:3001"; // ou a URL do Render se estiver online

export const LoginRequest = async (email, senha) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      senha,
    });

    return { success: true, user: response.data };
  } catch (err) {
    console.error("Erro ao fazer login:", err);
    return { success: false };
  }
};
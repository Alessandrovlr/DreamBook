import axios from "axios";

const API_URL = "Adicionar Url";

export const LoginRequest = async (email, senha) => {
  try {
    const response = await axios.get(API_URL);
    const users = response.data;

    const user = users.find(
      (user) => user.email === email && user.senha === senha
    );
    return user ? { success: true, user } : { success: false };
  } catch (err) {
    console.log(`Erro: ${err}`);
    return { success: false };
  }
};

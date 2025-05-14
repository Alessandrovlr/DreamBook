# 📚 DreamBook – Biblioteca Digital Comunitária

Bem-vindo ao **DreamBook**, um sistema web completo criado para facilitar o acesso a livros por meio de uma plataforma de reservas, voltado para a comunidade. Este projeto foi desenvolvido como parte de um desafio/hackathon com o tema **Vida Urbana Inteligente**.

---

## 🚀 Funcionalidades

### ✅ Front-end (React + Vite + Tailwind)
- Tela de login com autenticação simples
- Cadastro de usuários e livros
- Listagem de usuários, livros e reservas
- Context API centralizado para controle de estado global
- Navegação protegida com `react-router-dom`
- Layout responsivo com Tailwind CSS

### ✅ Back-end (Node.js + Express + PostgreSQL)
- API RESTful com rotas para:
  - `GET /usuarios`
  - `POST /usuarios/login`
  - `GET /livros`
  - `GET /reservas`
  - `POST /reservas`
- Conexão com banco de dados PostgreSQL (local ou hospedado no Render)
- Validação básica de login
- Separação de rotas por módulos (`livro.js`, `usuario.js`, `reserva.js`)

---

## 🧠 Tecnologias utilizadas

| Stack | Ferramentas |
|-------|-------------|
| **Frontend** | React, Vite, TailwindCSS, Axios, React Router DOM |
| **Backend**  | Node.js, Express, Cors, Dotenv, PostgreSQL (`pg`) |
| **Banco de dados** | PostgreSQL via pgAdmin local ou Render cloud |
| **Extras** | Context API, Environment Variables, Modular Routing |

---

## 🛠 Como rodar o projeto

### 🔹 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/dreambook.git
cd dreambook

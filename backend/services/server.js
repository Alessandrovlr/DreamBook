const express = require('express');
const cors = require('cors');
require('dotenv').config();

const livrosRoutes = require('../routes/livro');
const usuariosRoutes = require('../routes/usuario');
const reservasRoutes = require('../routes/reserva');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/livros', livrosRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/reservas', reservasRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

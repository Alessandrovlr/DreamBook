const express = require('express');
const pool = require('../services/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar usuários' });
  }
});

router.post('/', async (req, res) => {
    const { nome, email, senha } = req.body;
  
    try {
      await pool.query(
        'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)',
        [nome, email, senha]
      );
  
      res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
    }
  });

  router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
  
    try {
      const result = await pool.query(
        'SELECT * FROM usuarios WHERE email = $1 AND senha = $2',
        [email, senha]
      );
  
      if (result.rows.length > 0) {
        res.json(result.rows[0]);
      } else {
        res.status(401).json({ erro: 'Credenciais inválidas' });
      }
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao realizar login' });
    }
  });
  

module.exports = router;
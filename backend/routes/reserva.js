const express = require('express');
const pool = require('../services/db');

const router = express.Router();

// POST /reservas
router.post('/', async (req, res) => {
  const { id_usuario, id_livro } = req.body;

  try {
    // Verifica se o livro está disponível
    const { rows } = await pool.query('SELECT disponivel FROM livros WHERE id = $1', [id_livro]);
    if (!rows[0]?.disponivel) {
      return res.status(400).json({ erro: 'Livro não está disponível' });
    }

    // Cria reserva
    await pool.query(
      'INSERT INTO reservas (id_usuario, id_livro) VALUES ($1, $2)',
      [id_usuario, id_livro]
    );

    // Atualiza livro para indisponível
    await pool.query(
      'UPDATE livros SET disponivel = FALSE WHERE id = $1',
      [id_livro]
    );

    res.json({ mensagem: 'Reserva realizada com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao realizar reserva' });
  }
});

module.exports = router;

const express = require('express');
const pool = require('../services/db');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT r.id, r.data_reserva, u.nome AS usuario, l.titulo AS livro
        FROM reservas r
        JOIN usuarios u ON u.id = r.id_usuario
        JOIN livros l ON l.id = r.id_livro
      `);
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar reservas' });
    }
  });


router.post('/', async (req, res) => {
  const { id_usuario, id_livro } = req.body;

  try {

    const { rows } = await pool.query('SELECT disponivel FROM livros WHERE id = $1', [id_livro]);
    if (!rows[0]?.disponivel) {
      return res.status(400).json({ erro: 'Livro não está disponível' });
    }


    await pool.query(
      'INSERT INTO reservas (id_usuario, id_livro) VALUES ($1, $2)',
      [id_usuario, id_livro]
    );


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

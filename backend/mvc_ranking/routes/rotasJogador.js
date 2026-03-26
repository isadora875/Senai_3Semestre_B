import express from 'express';
import jogadorController from '../controllers/jogadorController.js';

const router = express.Router();

//rota para listar os livros
router.get('/jogadores', jogadorController.listar);

//rota para adicionar livros
router.post('/jogadores', jogadorController.adicionar);

//rota para marcar como lido
router.post('/jogadores/adicionar-ponto', jogadorController.adicionarPontos);

export default router;
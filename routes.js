const express = require('express');
const DestaqueController = require('./controllers/DestaqueController');
const JogadorController = require('./controllers/JogadorController');
const PesquisaController = require('./controllers/PesquisaController');
const TotalController = require('./controllers/TotalController');
const UsuarioController = require('./controllers/UsuarioController');
const login = require('./middleware/login')
const routes = express.Router();

routes.get('/jogadores', JogadorController.index)
        .post('/jogadores', login, JogadorController.store)
        .put('/update/:id', JogadorController.update)
        .delete('/excluijogador/:id', JogadorController.destroy)

routes.get('/pesq/:palavra', PesquisaController.index)
        .get('/time/:time', PesquisaController.jogadorTime)

routes.put('/destacar/:id', DestaqueController.update)
        .get('/destaques', DestaqueController.index)

routes.get('/total', TotalController.index)
        .get('/jogadores-time', TotalController.timeJogador)
        .get('/posicoes-jogador', TotalController.posicaoJogador)

routes.get('/usuarios', UsuarioController.index)
        .post('/usuarios', UsuarioController.store)
        .post('/login', UsuarioController.login)

module.exports = routes;
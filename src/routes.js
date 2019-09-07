const express = require('express');
const routes = express.Router();

const LoginController = require('./controllers/LoginController');
const CodeController = require('./controllers/CodeController');

routes.post('/cadastrar', LoginController.store);
routes.post('/auth', LoginController.auth);
routes.post('/salvar', CodeController.store);
routes.get('/codigos', CodeController.index);
routes.delete('/excluir/:_id', CodeController.delete);
routes.put('/update/:_id', CodeController.update);

module.exports = routes;
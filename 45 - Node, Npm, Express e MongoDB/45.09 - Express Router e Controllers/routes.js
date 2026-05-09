const express = require('express');
const route = express.Router();
// Importa os controladores
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

// Rotas do home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;
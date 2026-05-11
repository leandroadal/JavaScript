import express from 'express';

// Importa os controladores
import * as homeController from './src/controllers/homeController.js';
import * as contatoController from './src/controllers/contatoController.js';

const route = express.Router();

// Rotas do home
route.get('/', homeController.paginaInicial);
route.get('/flash', homeController.testeFlash);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

export default route;
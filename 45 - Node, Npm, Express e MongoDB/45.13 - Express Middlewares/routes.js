import express from 'express';

// Importa os controladores
import * as homeController from './src/controllers/homeController.js';
import * as contatoController from './src/controllers/contatoController.js';

const route = express.Router();

function meuMiddleware(req, res, next) {
    console.log();
    console.log('Passei no meu middleware');
    console.log();
    // Para passar para a próxima função, é necessário chamar o next
    // Se não chamar, a requisição ficará travada aqui
    next();
}

// Rotas do home
route.get('/', meuMiddleware, homeController.paginaInicial, (req, res) => {
    console.log('Cheguei na próxima função');
});
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

export default route;
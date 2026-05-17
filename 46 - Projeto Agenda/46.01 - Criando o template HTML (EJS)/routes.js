import express from 'express';

// Importa os controladores
import * as homeController from './src/controllers/homeController.js';
import * as loginController from './src/controllers/loginController.js';

const route = express.Router();

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);



export default route;

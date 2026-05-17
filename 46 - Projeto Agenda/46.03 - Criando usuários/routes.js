import express from 'express';

// Importa os controladores
import * as homeController from './src/controllers/homeController.js';
import * as loginController from './src/controllers/loginController.js';

const route = express.Router();

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);
//route.post('/login', loginController.login);
route.post('/login/register', loginController.register);

export default route;

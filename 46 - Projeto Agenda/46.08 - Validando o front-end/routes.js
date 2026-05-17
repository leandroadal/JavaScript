import express from 'express';

// Importa os controladores
import * as homeController from './src/controllers/homeController.js';
import * as loginController from './src/controllers/loginController.js';
import * as contatoController from './src/controllers/contatoController.js';

import { loginRequired } from './src/middlewares/middleware.js';

const route = express.Router();

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/login', loginController.login);
route.post('/login/logout', loginController.logout);
route.post('/login/register', loginController.register);

// Rota de contatos
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/contato/delete/:id', loginRequired, contatoController.deleteContato);

export default route;

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

import Login from './modules/Login.js';
import Contato from './modules/Contato.js';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const contato = new Contato('.form-contato');

login.init();
cadastro.init();
contato.init();

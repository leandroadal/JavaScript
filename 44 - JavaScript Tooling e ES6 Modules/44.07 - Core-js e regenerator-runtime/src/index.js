import 'regenerator-runtime/runtime';
import 'core-js/stable'

import './assets/css/style.css';
import executa from './modules/promises';

// Estruturas modernas como promises podem não funcionar sendo assim necessário chama o import ao runtime e core-js
executa();

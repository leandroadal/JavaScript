import express from 'express';
import routes from './routes.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import meuMiddlewarePadrao from './src/middlewares/middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// interpretar dados enviados por formulários HTML
app.use(express.urlencoded({extended: true}));

// Localização dos arquivos de views
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Template
app.set('view engine', 'ejs');

// Usar o middleware em todas as rotas
app.use(meuMiddlewarePadrao);

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

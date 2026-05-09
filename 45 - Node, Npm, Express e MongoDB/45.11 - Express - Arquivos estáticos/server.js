/**
 * Arquivos estáticos são arquivos enviados ao navegador exatamente como estão armazenados no servidor, sem processamento dinâmico.
 */

const express = require('express');
// importa as rotas
const routes = require('./routes');

const app = express();

const path = require('path');

// Configura uma pasta pública de arquivos estáticos no Express.js
app.use(express.static(path.resolve(__dirname, 'public')));

// Serve para o Express conseguir interpretar dados enviados por formulários HTML
app.use(express.urlencoded({extended: true}));

// Define onde estão os arquivos de views da aplicação.
app.set('views', path.resolve(__dirname, 'src', 'views'));

// Define qual motor de template será usado
app.set('view engine', 'ejs');

// Usa as rotas do arquivo './routes'
app.use(routes);

// Para o servidor ficar escutando na porta 3000
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

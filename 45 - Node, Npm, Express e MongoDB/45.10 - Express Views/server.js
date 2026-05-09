/**
 * EJS -(Embedded JavaScript) é uma template engine utilizada no Express.js para gerar HTML dinâmico no servidor. Ela permite misturar HTML e JavaScript. 
 * 
 * rs.render() renderiza uma view/template e enviar o HTML ao navegador
 */

const express = require('express');
// importa as rotas
const routes = require('./routes');

const app = express();

const path = require('path');

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

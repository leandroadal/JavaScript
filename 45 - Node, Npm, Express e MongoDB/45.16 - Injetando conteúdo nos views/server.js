import express from 'express';
import routes from './routes.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';
import 'dotenv/config';
import session from 'express-session';
import flash from 'connect-flash';
import MongoStore from 'connect-mongo';
import { middlewareGlobal } from './src/middlewares/middleware.js';

// Variável de ambiente para a string de conexão do MongoDB
const connectionString = process.env.CONNECTION_STRING;

// Conexão com o MongoDB
mongoose.connect(connectionString)
    .then(() => {
        console.log('Conectado ao MongoDB com sucesso!');
        app.emit('pronto');
    })
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuração do express-session
app.use(session({
    secret: 'fgfgdererwrwrqqewr',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }, 
    store: MongoStore.create({ mongoUrl: connectionString })
}));

// Configuração do connect-flash
app.use(flash());

// arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// interpretar dados enviados por formulários HTML
app.use(express.urlencoded({ extended: true }));

// Localização dos arquivos de views
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Template
app.set('view engine', 'ejs');

// Middlewares
app.use(middlewareGlobal);
app.use(routes);

// Esperar a conexão com o MongoDB através do evento 'pronto' antes de iniciar o servidor
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});

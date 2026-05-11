import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Express e Segurança
import express from 'express';
import helmet from 'helmet';
import csrf from 'csurf';
import session from 'express-session';
import flash from 'connect-flash';

// Banco de Dados e Storage
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';

// Internos
import routes from './routes.js';
import { middlewareGlobal, checkCsrfError, csrfMiddleware } from './src/middlewares/middleware.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- CONEXÃO BANCO DE DADOS ---
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('✅ Conectado ao MongoDB');
        app.emit('pronto');
    })
    .catch(err => console.error('❌ Erro no MongoDB:', err));

// --- CONFIGURAÇÕES E MIDDLEWARES ---

app.use(helmet()); // Segurança inicial
app.use(express.urlencoded({ extended: true })); // Parser de formulários
app.use(express.json()); // Parser de JSON
app.use(express.static(path.resolve(__dirname, 'public'))); // Arquivos estáticos

// Configuração de Sessão
const sessionOptions = session({
    secret: process.env.SESSION_SECRET || 'fgfgdererwrwrqqewr',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash()); // Flash messages

// --- VIEWS ---
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// --- PROTEÇÃO E ROTAS ---
app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

// --- INICIALIZAÇÃO ---
app.on('pronto', () => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
    });
});
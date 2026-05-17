import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from "node:url";

// Express e Segurança
import express from 'express';
//import helmet from 'helmet';
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

//app.use(helmet());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONEXÃO BANCO DE DADOS ---
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('✅ Conectado ao MongoDB');
        app.emit('pronto');
    })
    .catch(err => console.error('❌ Erro no MongoDB:', err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: process.env.CONNECTION_STRING || 'fgfgdererwrwrqqewr',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos próprios middlewares
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
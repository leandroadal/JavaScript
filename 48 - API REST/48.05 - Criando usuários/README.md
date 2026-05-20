# Criando usuários

## Nomeação de rotas

index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT

## Criando rotas

Crie o arquivo `src/routes/userRoutes.js` para definir as rotas relacionadas aos usuários:

```javascript
import { Router } from 'express';
import UserController from '../controllers/UserController';
const router = new Router();
router.post('/', UserController.store);
export default router;
```

## Criando controladores

Crie o arquivo `src/controllers/UserController.js` para definir os controladores relacionados aos usuários:

```javascript
import User from '../models/User';
class UserController {
    async store(req, res) {
        try {
            const novoUser = await User.create(req.body);
            return res.json(novoUser);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new UserController();
```

## Criando modelos

Crie o arquivo `src/models/User.js` para definir o modelo relacionado aos usuários:

```javascript
import Sequelize, { Model } from 'sequelize';
class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
                email: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                    unique: {
                        msg: 'Email já existe',
                    },
                },
                password: {
                    type: Sequelize.STRING,
                    defaultValue: '',
                },
            },
            { sequelize },
        );

        return this;
    }
}

export default User;
```

## Configurando o banco de dados

Adicione o modelo `User` ao arquivo `src/database/index.js`:

```javascript
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
const models = [Aluno, User];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
```

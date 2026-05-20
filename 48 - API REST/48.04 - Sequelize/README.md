# Sequelize

## O que é o Sequelize?

O Sequelize é um ORM (Object-Relational Mapping) para Node.js que facilita a interação com bancos de dados relacionais, como MySQL, PostgreSQL, SQLite e MSSQL. Ele permite que os desenvolvedores trabalhem com bancos de dados usando uma sintaxe JavaScript, abstraindo as complexidades do SQL e proporcionando uma maneira mais intuitiva de manipular dados.

## Instalação

Para instalar o Sequelize, você pode usar o npm (Node Package Manager) ou o yarn. Aqui está como fazer isso:

```bash
npm install sequelize
```

Com o driver do banco de dados que você deseja usar. Por exemplo, se você estiver usando o MariaDB, instale o driver correspondente:

```bash
npm install mariadb
```

Para mySQL, use:

```bash
npm install mysql2
```

Para migrar o banco de dados, você pode usar o Sequelize CLI:

```bash
npm install -D sequelize-cli
```

## Configuração padrão

Após a instalação, você precisa configurar o Sequelize para se conectar ao seu banco de dados. Aqui está um exemplo de configuração:

```javascript
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // ou 'mariadb', 'postgres', 'sqlite', 'mssql'
});
```

Assegure-se de substituir `'database_name'`, `'username'` e `'password'` pelas informações corretas do seu banco de dados.

Para testar a conexão, você pode usar o seguinte código:

```javascript
try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');
} catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
}
```

## Configuração personalizada

Crie o arquivo `.sequelizerc` na raiz do projeto para configurar o caminho dos arquivos de migração, modelos e seeders:

```javascript
const { resolve } = require('path');

module.exports = {
    config: resolve(__dirname, 'src', 'config', 'database.js'),
    'models-path': resolve(__dirname, 'src', 'models'),
    'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
    'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
};
```

Crie o arquivo `src/config/database.js` com a configuração do banco de dados:

```javascript
module.exports = {
    username: 'root',
    password: null,
    database: 'database_name',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql', // ou 'mariadb', 'postgres', 'sqlite', 'mssql'
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
};
```

Certifique-se de substituir `'host'`, `'port'`, `'dialect'`, `'database_name'`, `'username'` e `'password'` pelas informações corretas do seu banco de dados.

Crie o arquivo `src/database/index.js` para inicializar a conexão com o banco de dados e carregar os modelos:

```javascript
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
const models = [Aluno];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
    (model) => model.associate && model.associate(connection.models),
);
```

## Criando migrações

O Sequelize CLI permite criar migrações para gerenciar as alterações no esquema do banco de dados. Para criar uma migração, use o seguinte comando:

```bash
npx sequelize-cli migration:generate --name create-users
```

Isso criará um arquivo de migração na pasta `migrations`. Você pode editar esse arquivo para definir as alterações no esquema do banco de dados, como criar uma tabela de usuários:

```javascript
'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    },
};
```

## Executando migrações

Para executar as migrações e aplicar as alterações no banco de dados, use o seguinte comando:

```bash
npx sequelize-cli db:migrate
```

Isso aplicará todas as migrações pendentes e criará a tabela de usuários no banco de dados.

## Criando modelos

O Sequelize também permite criar modelos para representar as tabelas do banco de dados. Para criar um modelo, use o seguinte comando:

```bash
npx sequelize-cli model:generate --name User --attributes name:string
```

Isso criará um arquivo de modelo na pasta `models`. Você pode editar esse arquivo para definir as propriedades do modelo, como o nome do usuário:

```javascript
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
};
```

## Usando o modelo

Depois de criar o modelo, você pode usá-lo para interagir com o banco de dados. Por exemplo, para criar um novo usuário, você pode fazer o seguinte:

```javascript
const { User } = require('./models');
async function createUser() {
    const user = await User.create({ name: 'John Doe' });
    console.log(user.toJSON());
}
createUser();
```

## Conclusão

O Sequelize é uma ferramenta poderosa para trabalhar com bancos de dados relacionais em Node.js. Ele simplifica a manipulação de dados e a gestão do esquema do banco de dados, permitindo que os desenvolvedores se concentrem mais na lógica de negócios e menos nas complexidades do SQL. Com suas migrações, modelos e associações, o Sequelize é uma escolha popular para muitos projetos Node.js que exigem um banco de dados relacional.

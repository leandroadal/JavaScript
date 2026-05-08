# Core-js e regenerator-runtime

## Explicação

Em navegadores mais antigos estruturas modernas como promises pode não funcionar. Sendo assim, é necessário chamar alguns imports no código.

`import 'regenerator-runtime/runtime';`

`import 'core-js/stable'`

## Comandos para instalação e configuração do Babel e Webpack

`npm init -y`

Instalando as dependências

`npm i regenerator-runtime core-js`

Instalando as dependências de desenvolvimento

`npm install --save-dev @babel/core @babel/cli @babel/preset-env babel-loader webpack webpack-cli css-loader
style-loader`

Criar o arquivo webpack.config.js

No `package.json` coloca nos scripts `"div": "webpack -w"`

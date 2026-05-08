# Webpack

## O que é

`Webpack` é uma ferramenta de empacotamento de módulos utilizada para organizar, processar e otimizar arquivos de uma aplicação web. Permite reunir diversos recursos, como JavaScript, CSS e imagens, em arquivos finais otimizados para execução no navegador.

## Comandos para instalação e configuração do Babel e Webpack

`npm init -y`

Instalando as dependências

`npm i regenerator-runtime core-js`

Inalando as dependências de desenvolvimento

`npm install --save-dev @babel/core @babel/cli @babel/preset-env babel-loader webpack webpack-cli`

Criar o arquivo webpack.config.js

No `package.json` coloca nos scripts `"gera": "webpack -w"`

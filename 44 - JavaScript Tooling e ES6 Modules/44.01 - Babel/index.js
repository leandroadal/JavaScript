// Babel - é uma ferramenta JavaScript utilizada para converter código JavaScript moderno em versões compatíveis com navegadores ou ambientes mais antigos.

const nome = 'le';
const obj = {nome}
const novoObj = { ...obj};
console.log(novoObj);

// Comandos
// npm init -y
// npm install --save-dev @babel/core @babel/cli @babel/preset-env
// npx babel index.js -o bundle.js --presets=@babel/env

// bundle.js é onde fica o código gerado

// Adiciona a linha '"babel": "babel ./index.js -o ./bundle.js --presets=@babel/preset-env -w"' nos scripts do arquivo 'package.json'.
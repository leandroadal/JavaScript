const path = require('path');
// Caminho da pasta
console.log(__dirname);
// Caminho do arquivo
console.log(__filename);
// Volta duas pasta em relação a essa e depois a avança para pasta 'arquivos' e depois para a pasta 'testes'.
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'testes'));
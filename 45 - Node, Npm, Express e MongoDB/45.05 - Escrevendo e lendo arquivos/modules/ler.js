const fs = require('fs').promises;

// le o arquivo do caminho enviado
module.exports = (caminho) => fs.readFile(caminho, 'utf8');

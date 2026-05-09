const fs = require('fs').promises;

// escreve o arquivo no caminho enviado
// a flag 'w' vai rescrever o arquivo toda vez que for chamada. Ja a flag 'a' vai adicionar ao que ja esta escrito.
module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' });
};

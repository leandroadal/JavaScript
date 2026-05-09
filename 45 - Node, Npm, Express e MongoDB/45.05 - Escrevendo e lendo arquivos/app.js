const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
  { nome: 'João' },
  { nome: 'Maria' },
  { nome: 'Eduardo' },
  { nome: 'Luíza' },
];

// Converte em JSON formatando com indentação de 2 espaços
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  // transforma em objeto novamente
  dados = JSON.parse(dados);
  // Mostra todos os nomes
  dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);


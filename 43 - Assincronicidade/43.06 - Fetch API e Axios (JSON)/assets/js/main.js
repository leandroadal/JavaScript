/**
 * Axios é uma biblioteca JavaScript utilizada para realizar requisições 
 * HTTP assíncronas. Fornece uma interface mais simples e prática em 
 * comparação ao fetch, incluindo conversão automática de JSON.
 */

fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  // Cria uma tabela
  const table = document.createElement('table');

  for(let pessoa of json) {
    // <tr> Cria uma linha da tabela
    const tr = document.createElement('tr'); 

    // <td> Cria uma célula ('Coluna') dentro da linha.
    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    // Adiciona as linhas na tabela
    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}

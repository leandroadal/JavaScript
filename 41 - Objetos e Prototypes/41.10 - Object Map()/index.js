/**
 * Cria um novo array a partir da transformação dos elementos de um array existente
 */

const pessoas = [
    {id: 3, nome: 'Leandro'},
    {id: 2, nome: 'Olivia'},
    {id: 1, nome: 'Oliver'},
]

const novasPessoas = {};
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas[id] = { ...pessoa};
    
}

// PErde a ordenação e chave vira string
console.log(novasPessoas);

// 
const novasPessoas1 = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas1.set(id, { ...pessoa});
    
}

// PErde a ordenação e chave vira string
console.log(novasPessoas1);
console.log(novasPessoas1.get(2));

console.log();

console.log('Lista');
// Também é uma lista de chave, valor.
for (const pessoas of novasPessoas1) {
    console.log(pessoas);
    
}
console.log();

console.log('Todos os valores');
// Pegando chaves e valores de forma separada.
for (const [identifier, {id, nome}] of novasPessoas1) {
    console.log(identifier, id, nome);
    
}

console.log();

console.log('Valores');
// Só os valores
for (const pessoas of novasPessoas1.values()) {
    console.log(pessoas);
    
}
console.log();

console.log('Chaves');
for (const pessoas of novasPessoas1.keys()) {
    console.log(pessoas);
    
}

// Deletando
console.log('Deletando');
novasPessoas1.delete(2);
console.log(novasPessoas1);

// Adicionando e sobrescrevendo uma chave, valor
console.log('Adicionando');
novasPessoas1.set(3, {id: 9, nome: 'Olivia'})
console.log(novasPessoas1);

// Com forEach
novasPessoas1.forEach(function (value, key) {
  console.log(`${key} = id: ${value.id}, nome: ${value.nome}`);
});

/* novasPessoas1.forEach(({ id, nome }, key) => {
  console.log(`${key} = id: ${id}, nome: ${nome}`);
});
*/

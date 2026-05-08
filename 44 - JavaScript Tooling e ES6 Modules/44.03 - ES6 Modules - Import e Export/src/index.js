/** Um módulo em JavaScript é um arquivo que possui código separado e reutilizável, 
 * podendo exportar e importar variáveis, funções ou classes.
 * 
 * ES Modules (ESM) é o sistema oficial de módulos do JavaScript moderno, utilizado 
 * para dividir o código em arquivos reutilizáveis através de import e export. Cada 
 * módulo possui escopo isolado, o que significa que variáveis, funções e classes 
 * declaradas em um arquivo não ficam acessíveis globalmente nem entram em conflito 
 * com códigos de outros arquivos, a menos que sejam explicitamente exportadas.
*/

import { nome as nome2, idade, soma1 as soma, dia } from './modulo1';
import * as MeuModulo from './modulo1';
import oi from './modulo1';

const nome = 'Rafa';

console.log(nome, idade);
console.log(nome2, dia);
console.log(soma(2, 2));
console.log(MeuModulo.dia);
console.log(oi());

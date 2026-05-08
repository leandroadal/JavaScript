const nome = 'Breno';
const sobrenome = 'S';
const idade = 30;

function soma(x, y) {
    return x + y;
}

// Exportação da instrução
export const dia = 'segunda';

// Exportação padrão pode se dar qualquer nome no import. So da pra ter um export default. Envia qualquer coisa depois do export default
// Ex.: export default 10;
export default  () => 'oi';

//Exportação de varias instruções e como renomeá-las para o arquivo que vai importar.
export { nome, idade, soma as soma1 };
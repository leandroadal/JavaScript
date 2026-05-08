import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
// Espera o evento de click no botão de gerar a senha
const gerarSenha = document.querySelector('.gerar-senha');

// Impede números menores que 5 e maiores que 20;
// O 'blur' permite a verificação quanto o usuário clicar fora da caixa
qtdCaracteres.addEventListener('blur', () => {
    let valor = Number(qtdCaracteres.value);

    if (valor > 20) {
        valor = 20;
    }

    if (valor < 5) {
        valor = 5;
    }

    qtdCaracteres.value = valor;
});

export default () => {
  gerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );

  // String vazia retorna false então se a senha não tiver caracteres retorna 'Nada selecionado.'.
  return senha || 'Nada selecionado.';
}

# File System e Recursão Mútua

## FS (File System)

O módulo `fs` do Node.js permite interação com o sistema de arquivos do sistema operacional. Por meio dele é possível:

* criar arquivos e diretórios;
* ler arquivos;
* remover arquivos;
* obter informações sobre arquivos e pastas;
* percorrer diretórios;
* manipular permissões e caminhos.

Em conjunto com `fs.promises`, as operações podem ser realizadas utilizando **Promises** e **async/await**, tornando o código assíncrono mais organizado.

## Recursão Mútua

Recursão mútua ocorre quando **duas ou mais funções** chamam umas às outras repetidamente até que uma condição de parada seja atingida.

Diferentemente da recursão simples, em que uma função chama a si própria diretamente, na recursão mútua a chamada ocorre entre funções diferentes.

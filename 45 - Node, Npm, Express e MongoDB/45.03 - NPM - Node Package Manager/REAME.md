# NPM - Node Package Manager

## Comandos comuns

### Iniciar diretório

`npm init -y`

### Instalar pacote

`npm install nomeDoPacote`

ou

`npm i nomeDoPacote`

Quando o pacote está em dependencies com um `^` (ex.: `"^5.2.1"`) ele pode ser atualizado se uma nova versão existir com `npm update`

### Npm Update

A versão de um pacote é composta por três números ex.: `2.1.0`. Na qual:

* `2` é o major - Quebrar compatibilidade com algumas coisas

* `1` é o minor - recurso novo sem quebrar compatibilidade com nada.

* `0` é o patch - correção

Ao usar o `npm update` so mudara o numero do **minor** e **patch**.

#### Para atualizar

`npm update`

### Impedir a atualização com npm update

`npm install nomeDoPacote -E`

### Permitir apenas a atualização do patch com o npm update

`npm install pacote@~1.2.3`

### Instalar nas dev dependencies

`npm install nomeDoPacote --save-dev`

### Instalar versão especifica do pacote

`npm install nomeDoPacote@2.1.0`

### Instalar com a ultima atualização para uma versão especifica

`npm install nomeDoPacote@2.x`

### Desinstalar pacote

`npm install nomeDoPacote@2.x`

### Verificar se tem pacote desatualizado

`npm outdated`

### Ver os pacotes instalados

`npm ls`

Ver apenas as instalada de forma manual

`npm ls --depth=0`

# Sucrase

O **Sucrase** é um compilador de JavaScript alternativo ao Babel, focado em altíssima velocidade. Ele é projetado para ser usado durante o desenvolvimento, permitindo o uso de recursos modernos do JavaScript (como `import/export`, JSX e TypeScript) sem a necessidade de configurações complexas e pesadas.

> ⚠️ **Aviso sobre este projeto:** Embora as versões mais recentes do Node.js suportem a sintaxe de `import/export` nativamente, **neste projeto nós utilizaremos o Sucrase**. O objetivo é puramente didático: entender na prática como essa ferramenta funciona, como ela transpila o código e como integrá-la ao ambiente de desenvolvimento.

## `"type": "module"` vs Sucrase: Quando usar qual?

Para evitar conflitos, é importante entender quando usar a funcionalidade nativa do Node.js e quando usar o Sucrase:

- **Use `"type": "module"` (Node.js Nativo):** Ideal para projetos modernos rodando em versões recentes do Node.js (14+). Você usa o padrão oficial do ecossistema sem precisar instalar bibliotecas extras apenas para usar `import/export`.
- **Use o Sucrase:** Ideal para projetos que utilizam TypeScript, JSX, ou quando você precisa dar manutenção em projetos mais antigos que dependem de compiladores para rodar a sintaxe de módulos (ES Modules). O Sucrase compila o código "em tempo real" de forma muito mais rápida que o Babel.

### Instalando o Sucrase

Como o Sucrase é uma ferramenta de desenvolvimento, devemos instalá-lo como dependência de desenvolvimento (`-D` ou `--dev`).

Usando **npm**:

```bash
npm install -D sucrase
```

Usando **yarn**:

```bash
yarn add -D sucrase
```

### Configuração

Para que o Sucrase funcione corretamente e gerencie as importações do nosso projeto, precisamos fazer duas configurações simples:

#### 1. Ajustando o `package.json`

Se o seu arquivo `package.json` possuir a propriedade `"type": "module"`, **você deve removê-la**. Se a mantivermos, o Node.js tentará resolver os módulos nativamente, o que causará conflito com o Sucrase.

```json
{
    "name": "meu-projeto",
    "version": "1.0.0",
    // "type": "module",  REMOVA ESSA LINHA
    "main": "index.js"
    // ...
}
```

#### 2. Configurando o Nodemon

Para rodar o projeto em tempo real no ambiente de desenvolvimento, vamos ensinar o `nodemon` a usar o Sucrase como um "tradutor" (transformador) antes de executar o código JavaScript.

Crie ou edite o arquivo `nodemon.json` na raiz do projeto e inclua a seguinte configuração:

```json
{
    "execMap": {
        "js": "node -r sucrase/register"
    }
}
```

_Com isso, toda vez que o nodemon rodar um arquivo `.js`, ele chamará o Sucrase para compilar os `imports/exports` instantaneamente._

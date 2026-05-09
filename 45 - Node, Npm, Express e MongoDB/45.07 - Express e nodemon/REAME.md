# Express + nodemon

O Nodemon é uma ferramenta utilizada no desenvolvimento com Node.js para monitorar alterações nos arquivos do projeto e reiniciar automaticamente a aplicação sempre que uma modificação é detectada.

## Instalação

`npm install nodemon --save-dev`

## Script

Adicionar ao `package.json`:

```json
{
  "scripts": {
    "start": "nodemon server.js"
  }
}
```

## Executar

`npm run start`

# Instalando o Node e o Pm2 no servidor

## Instalando o Node.js

Para instalar o Node.js no servidor, siga os passos abaixo:

1. **Atualizar o sistema**:
   Antes de instalar o Node.js, é recomendável atualizar o sistema para garantir que você tenha as últimas atualizações de segurança e pacotes. Use o seguinte comando:

   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Instalar o Node.js**:
   Existem várias maneiras de instalar o Node.js, mas uma das formas mais comuns é usar o Node Version Manager (NVM). Para instalar o NVM, execute os seguintes comandos:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
   ```

   Depois de instalar o NVM, feche e reabra o terminal ou execute o comando abaixo para carregar o NVM:

   ```bash
    \. "$HOME/.nvm/nvm.sh"
   ```

   Agora, você pode instalar a versão mais recente do Node.js usando o NVM:

   ```bash
   nvm install node
   ```

   Ou, se você quiser instalar uma versão específica do Node.js, use:

   ```bash
   nvm install <version>
   ```

   Substitua `<version>` pela versão desejada, como `20` ou `24`

3. **Verificar a instalação**:
   Após a instalação, verifique se o Node.js e o npm (Node Package Manager) foram instalados corretamente usando os seguintes comandos:

   ```bash
   node -v
   npm -v
   ```  

   Se ambos os comandos retornarem as versões instaladas, a instalação foi bem-sucedida.

## Instalando o PM2

O PM2 é um gerenciador de processos para aplicações Node.js que facilita a execução e o monitoramento de suas aplicações. Para instalar o PM2, siga os passos abaixo:

1. **Instalar o PM2 globalmente**:

    Use o npm para instalar o PM2 globalmente no seu sistema:

    ```bash
    npm install -g pm2
    ```

    1. **Verificar a instalação**:
    Após a instalação, verifique se o PM2 foi instalado corretamente usando o seguinte comando:

    ```bash
    pm2 -v
    ```  

    Se o comando retornar a versão do PM2, a instalação foi bem-sucedida.
2. **Iniciar a aplicação com PM2**:
    Para iniciar sua aplicação Node.js com o PM2, use o seguinte comando:

    ```bash
    pm2 start app.js --name "nome-da-aplicacao"
    ```

    Substitua `app.js` pelo nome do arquivo principal da sua aplicação e `nome-da-aplicacao` por um nome descritivo para a sua aplicação.

3. **Gerenciar a aplicação com PM2**:
    O PM2 oferece vários comandos para gerenciar suas aplicações, como:
    - Listar todas as aplicações em execução:

      ```bash
      pm2 list
      ```

    - Parar uma aplicação:

      ```bash
      pm2 stop nome-da-aplicacao
      ```

    - Reiniciar uma aplicação:

      ```bash
      pm2 restart nome-da-aplicacao
      ```

    - Exibir os logs da aplicação:

      ```bash
      pm2 logs nome-da-aplicacao
      ```

    - Excluir uma aplicação:

      ```bash
      pm2 delete nome-da-aplicacao
      ```

    - Configurar o PM2 para iniciar a aplicação automaticamente na inicialização do sistema:

      ```bash
      pm2 startup
      pm2 save
      ```

Seguindo esses passos, você terá o Node.js e o PM2 instalados no seu servidor, permitindo que você execute e gerencie suas aplicações Node.js de forma eficiente.

## Observação

Caso a aplicação utilize um banco de dados, certifique-se de que se o banco de dados for externo ao servidor adicionar o ip do servidor ao whitelist do banco de dados.

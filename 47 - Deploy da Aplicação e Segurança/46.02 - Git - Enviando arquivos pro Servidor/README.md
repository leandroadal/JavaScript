# Criando um repositório Git no servidor e trocando arquivos

## Criar um repositório Git no servidor

1. Acesse o servidor via SSH.
2. Navegue até o diretório onde deseja criar o repositório Git.
3. Execute o comando `git init` para inicializar um novo repositório Git.

## Enviar arquivos para o repositório Git no servidor

1. No seu computador local, navegue até o diretório do seu projeto.
2. Execute o comando `git init` para inicializar um repositório Git local.
3. Adicione os arquivos do seu projeto ao repositório local usando o comando `git add .`.
4. Faça um commit dos arquivos usando o comando `git commit -m "Mensagem do commit"`.
5. Adicione o repositório remoto do servidor usando o comando `git remote add origin seu_usuario_gcp@IP_DA_INSTANCIA:/caminho/para/o/repositorio.git`.
6. Envie os arquivos para o repositório remoto usando o comando `git push -u origin master`.
Substitua `seu_usuario_gcp` pelo nome de usuário que você usou ao gerar a chave SSH, `IP_DA_INSTANCIA` pelo endereço IP da sua instância do Google Cloud e `/caminho/para/o/repositorio.git` pelo caminho para o repositório Git que você criou no servidor.
7. Se tudo estiver configurado corretamente, os arquivos do seu projeto serão enviados para o repositório Git no servidor.

### Usando o .config para facilitar o envio de arquivos

Se você tiver configurado o arquivo `~/.ssh/config` para gerenciar suas conexões SSH, pode usar o nome do host definido no arquivo de configuração para facilitar o envio de arquivos para o repositório Git. Por exemplo, se você definiu um host chamado `gcp-instance` no arquivo de configuração, pode usar o seguinte comando para adicionar o repositório remoto:

```bash
git remote add origin gcp-instance:/caminho/para/o/repositorio.git
```

Substitua `gcp-instance` pelo nome do host que você definiu no arquivo de configuração e `/caminho/para/o/repositorio.git` pelo caminho para o repositório Git que você criou no servidor. Depois disso, você pode usar o comando `git push -u origin master` para enviar os arquivos para o repositório remoto usando a configuração definida no arquivo `~/.ssh/config`.

## Configurar o repositório local Git para o projeto

1. No servidor, navegue até o diretório do repositório Git que você criou.
2. Crie um arquivo `.gitignore` para especificar quais arquivos ou diretórios devem ser ignorados pelo Git. Por exemplo, você pode adicionar as seguintes linhas ao arquivo `.gitignore`:

   ```txt
   node_modules/
   dist/
   .env
   ```

3. Salve o arquivo `.gitignore` e faça um commit das alterações usando os seguintes comandos:

   ```bash
   git add .gitignore
   git commit -m "Adicionar arquivo .gitignore"
   ```

4. Agora, o Git irá ignorar os arquivos e diretórios especificados no arquivo `.gitignore` ao fazer commits e enviar arquivos para o repositório remoto.

## Caso o projeto necessite de variáveis de ambiente

1. Crie um arquivo `.env` no diretório do projeto para armazenar as variáveis de ambiente necessárias para a aplicação.
2. Replique o arquivo `.env` para o servidor que rodara o projeto usando o comando `scp` ou outro método de transferência de arquivos. Por exemplo:

   ```bash
   scp .env seu_usuario_gcp@IP_DA_INSTANCIA:/caminho/para/o/projeto/.env
   ```

   Substitua `seu_usuario_gcp` pelo nome de usuário que você usou ao gerar a chave SSH, `IP_DA_INSTANCIA` pelo endereço IP da sua instância do Google Cloud e `/caminho/para/o/projeto/.env` pelo caminho para o diretório do projeto no servidor.
3. Certifique-se de que o arquivo `.env` esteja incluído no arquivo `.gitignore` para evitar que as variáveis de ambiente sejam enviadas para o repositório remoto.

# Chaves SSH e Conexão com Google Cloud

## Gerar Chaves SSH

Para gerar chaves SSH, você pode usar o comando `ssh-keygen` no terminal. Siga os passos abaixo:
    1. Abra o terminal.
    2. Digite o comando `ssh-keygen -t ed25519 -f ~/.ssh/gcp_key -C "seu_usuario_gcp"`
    3. Digite uma senha para proteger a chave privada (opcional).
    4. As chaves serão geradas e salvas no diretório `~/.ssh/` com os nomes `gcp_key` (chave privada) e `gcp_key.pub` (chave pública).

## Adicionar Chave Pública ao Google Cloud

1. Acesse o Console do Google Cloud.
2. Navegue até a seção "Compute Engine" e clique em "Metadata".
3. Clique na aba "SSH Keys".
4. Clique em "Add SSH Key" e cole o conteúdo da chave pública (`gcp_key.pub`) no campo fornecido.
5. Salve as alterações.

## Conectar-se à Instância do Google Cloud

1. No terminal, use o comando `ssh -i ~/.ssh/gcp_key seu_usuario_gcp@IP_DA_INSTANCIA` para se conectar à sua instância do Google Cloud.
2. Substitua `seu_usuario_gcp` pelo nome de usuário que você usou ao gerar a chave SSH e `IP_DA_INSTANCIA` pelo endereço IP da sua instância do Google Cloud.
3. Se tudo estiver configurado corretamente, você deverá ser conectado à sua instância do Google Cloud via SSH.

## Sair

Para sair da sessão SSH, basta digitar `exit` no terminal e pressionar Enter.

## Usando varias chaves SSH

Se você tiver várias chaves SSH, pode usar o arquivo de configuração SSH para gerenciar suas conexões. Crie ou edite o arquivo `~/.ssh/config` e adicione as seguintes linhas:

```txt
    Host gcp-instance
    HostName IP_DA_INSTANCIA
    User seu_usuario_gcp
    IdentityFile ~/.ssh/gcp_key

    Host github
    HostName github.com
    User github_user
    IdentityFile ~/.ssh/github_key
```

Substitua `gcp-instance` por um nome de sua escolha, `IP_DA_INSTANCIA` pelo endereço IP da sua instância do Google Cloud e `seu_usuario_gcp` pelo nome de usuário que você usou ao gerar a chave SSH. Depois disso, você pode se conectar à sua instância usando o comando `ssh gcp-instance`.

## Segurança- Mantenha sua chave privada segura e nunca a compartilhe com ninguém

- Use senhas fortes para proteger suas chaves SSH.
- Revogue o acesso de chaves SSH que não são mais necessárias.
- Considere usar ferramentas de gerenciamento de chaves SSH para facilitar a administração e segurança das suas chaves.

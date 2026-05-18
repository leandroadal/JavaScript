# NGINX

NGINX é um servidor web e proxy reverso muito popular, conhecido por sua alta performance e baixo consumo de recursos. Ele é amplamente utilizado para servir conteúdo estático, balancear carga e atuar como proxy reverso para aplicações backend.

## Instalação

Para instalar o NGINX em uma distribuição baseada em Debian, como o Ubuntu, você pode usar o seguinte comando:

```bash
sudo apt update
sudo apt install nginx
```

Após a instalação, o NGINX deve iniciar automaticamente. Você pode verificar o status do serviço com:

```bash
sudo systemctl status nginx
```

## Configuração

A configuração do NGINX é feita através de arquivos localizados em `/etc/nginx/`. O arquivo principal de configuração é o `nginx.conf`, mas as configurações específicas de sites geralmente são colocadas em `/etc/nginx/sites-available/` e vinculadas a `/etc/nginx/sites-enabled/`.

Para criar uma nova configuração de site, você pode criar um arquivo em `sites-available` e depois criar um link simbólico para `sites-enabled`. Por exemplo:

```bash
sudo nano /etc/nginx/sites-available/meusite
```

Adicione a seguinte configuração básica para servir um site:

```nginx
server {
    listen 80;
    server_name meusite.com www.meusite.com;

    root /var/www/meusite;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Depois de salvar o arquivo, crie um link simbólico para habilitar o site:

```bash
sudo ln -s /etc/nginx/sites-available/meusite /etc/nginx/sites-enabled/
```

## Testando a Configuração

Antes de reiniciar o NGINX, é importante testar a configuração para garantir que não haja erros de sintaxe:

```bash
sudo nginx -t
```

Se o teste for bem-sucedido, você pode reiniciar o NGINX para aplicar as mudanças:

```bash
sudo systemctl restart nginx
```

## Segurança

Para melhorar a segurança do NGINX, considere as seguintes práticas:

1. **Desabilitar a listagem de diretórios**: Certifique-se de que a configuração do NGINX não permita a listagem de diretórios, adicionando `autoindex off;` na configuração do servidor se o site for estático.

    - Exemplo:

    ```nginx
    location / {
        autoindex off;
        try_files $uri $uri/ =404;
    }
    ```

2. **Configurar HTTPS**: Use certificados SSL para criptografar o tráfego entre o cliente e o servidor. Você pode obter certificados gratuitos do Let's Encrypt.

    - Exemplo de configuração para HTTPS:

    ```nginx

    server {
        listen 80;
        server_name meusite.com <www.meusite.com>;
        return 301 https://$host$request_uri;
    }
    server {
        listen 443 ssl;
        server_name meusite.com <www.meusite.com>;
        ssl_certificate /path/to/your/certificate.crt;
        ssl_certificate_key /path/to/your/private.key;

        root /var/www/meusite;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
    ```

3. **Limitar o acesso a arquivos sensíveis**: Use regras de localização para restringir o acesso a arquivos como `.htaccess`, `.env`, etc.

    - Exemplo:

    ```nginx
    location ~* \.(htaccess|env)$ {
        deny all;
    }
    ```

4. **Atualizar regularmente**: Mantenha o NGINX atualizado para garantir que você tenha as últimas correções de segurança.

    - Exemplo:

    ```bash
    sudo apt update
    sudo apt upgrade nginx
    ```

5. **Configurar firewalls**: Use firewalls para limitar o acesso ao servidor apenas a portas necessárias, como a porta 80 para HTTP e 443 para HTTPS.

## Proxy Reverso

O proxy reverso é uma funcionalidade do NGINX que permite encaminhar solicitações para um servidor backend. A vantagem do proxy reverso é que ele pode ajudar a distribuir a carga, melhorar a segurança e fornecer uma camada adicional de abstração para suas aplicações.

Sua forma de uso é simples, basta adicionar uma configuração de localização que encaminha as solicitações para o servidor backend:

```nginx
location /api/ {
    proxy_pass http://localhost:3000/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Neste exemplo, as solicitações para `/api/` serão encaminhadas para um servidor backend rodando na porta 3000. As diretivas `proxy_set_header` são usadas para garantir que os cabeçalhos corretos sejam enviados para o backend, o que é importante para a funcionalidade e segurança da aplicação.

## Proxy Reverso vs site estático

O NGINX pode ser usado tanto para servir conteúdo estático quanto para atuar como proxy reverso. Servir conteúdo estático é útil para sites simples ou para servir arquivos como imagens, CSS e JavaScript. Já o proxy reverso é mais adequado para aplicações dinâmicas que exigem processamento no backend, como APIs ou aplicações web complexas. O proxy reverso também pode ser usado para balancear a carga entre vários servidores backend, o que pode melhorar a performance e a disponibilidade da aplicação.

### Vantagens e Desvantagens

- **Vantagens do Proxy Reverso**:
  - Permite distribuir a carga entre vários servidores backend.
  - Pode melhorar a segurança ao ocultar os detalhes do backend.
  - Facilita a implementação de SSL/TLS para criptografar o tráfego.
  - Pode fornecer cache para melhorar a performance.
- **Desvantagens do Proxy Reverso**:
  - Pode adicionar latência devido ao encaminhamento das solicitações.
  - Requer configuração adicional e manutenção.
- **Vantagens de Servir Conteúdo Estático**:
  - Simplicidade na configuração.
  - Alta performance para arquivos estáticos.
- **Desvantagens de Servir Conteúdo Estático**:
  - Não é adequado para aplicações dinâmicas.
  - Pode não ser suficiente para sites complexos que exigem processamento no backend.

## Proteção contra Ataques DDoS

O NGINX pode ser configurado para ajudar a proteger contra ataques de negação de serviço distribuída (DDoS) usando a diretiva `limit_req`. Esta diretiva permite limitar o número de solicitações que um cliente pode fazer em um determinado período de tempo. Por exemplo, para limitar a 10 solicitações por segundo por IP, você pode adicionar a seguinte configuração:

- Em `nginx.conf`:

```nginx
http {
    limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;
}
```

- Em `sites-available/meusite`:

```nginx
server {
    listen 80;
    server_name meusite.com www.meusite.com;
    location / {
        limit_req zone=one burst=5 nodelay;
        try_files $uri $uri/ =404;
    }
}
```

Neste exemplo, a diretiva `limit_req_zone` define uma zona de limite de requisições chamada "one" que armazena os endereços IP dos clientes e limita a taxa de solicitações a 10 por segundo. A diretiva `limit_req` é usada para aplicar essa limitação. O parâmetro `burst` permite um pequeno estouro de solicitações, e `nodelay` garante que as solicitações que excedem o limite sejam rejeitadas imediatamente, em vez de serem enfileiradas.

## Balanceamento de Carga

O NGINX também pode ser configurado para balancear a carga entre vários servidores backend, o que é útil para melhorar a performance e a disponibilidade da aplicação. Para configurar o balanceamento de carga, você pode usar a diretiva `upstream` para definir um grupo de servidores backend:

```nginx
upstream backend {
    server backend1.example.com;
    server backend2.example.com;
}

server {
    listen 80;
    server_name meusite.com www.meusite.com;

    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Neste exemplo, as solicitações para o site serão balanceadas entre `backend1.example.com` e `backend2.example.com`. O NGINX usará um algoritmo de balanceamento de carga (como round-robin) para distribuir as solicitações entre os servidores backend.

## Monitoramento e Logs

O NGINX gera logs de acesso e erros que podem ser úteis para monitorar o desempenho e diagnosticar problemas. Os arquivos de log geralmente estão localizados em `/var/log/nginx/`. O arquivo `access.log` contém informações sobre as solicitações recebidas, enquanto o `error.log` registra erros e mensagens de depuração. Você pode usar ferramentas como `tail` para visualizar os logs em tempo real:

```bash
tail -f /var/log/nginx/access.log
```

```bash
tail -f /var/log/nginx/error.log
```

## Configurações Avançadas

O NGINX oferece uma ampla gama de opções de configuração avançada, como cache, compressão, controle de acesso, entre outras. Por exemplo, para habilitar a compressão gzip, você pode adicionar as seguintes diretivas à configuração do servidor:

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
gzip_proxied any;
gzip_vary on;
```

Esta configuração habilita a compressão gzip para tipos de conteúdo específicos, o que pode melhorar significativamente o desempenho do site ao reduzir o tamanho das respostas enviadas para os clientes.

## Conclusão

O NGINX é uma ferramenta poderosa para servir conteúdo web e atuar como proxy reverso. Com a configuração adequada, ele pode oferecer alta performance e segurança para suas aplicações web. Certifique-se de seguir as melhores práticas de segurança para proteger seu servidor e os dados dos usuários.

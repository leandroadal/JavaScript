# Configurando o Projeto

## Padronização do Código

Para padronizar o código, vamos usar o ESLint, Prettier e o EditorConfig. O ESLint é uma ferramenta de linting para JavaScript, o Prettier é um formatador de código e o EditorConfig ajuda a manter estilos de codificação consistentes entre diferentes editores e IDEs.

### ESLint

1. Instale o ESLint e o plugin do Prettier:

    ```bash
    npm install eslint @eslint/js globals eslint-plugin-prettier eslint-config-prettier --save-dev
    ```

2. Crie um arquivo de configuração do ESLint (`eslint.config.mjs`) com o seguinte conteúdo:

    ```javascript
    import js from '@eslint/js';
    import globals from 'globals';
    import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
    export default [
        js.configs.recommended,
        {
            languageOptions: {
                globals: {
                    ...globals.node,
                },
            },
        },
        rules:{},
        eslintPluginPrettierRecommended,
    ];
    ```

### Prettier

1. Instale o Prettier:

    ```bash
    npm install prettier --save-dev
    ```

2. Crie um arquivo de configuração do Prettier (`.prettierrc`) com o seguinte conteúdo:

    ```json
    {
        "semi": true,
        "singleQuote": true,
        "trailingComma": "es5",
        "printWidth": 80
    }
    ```

### EditorConfig

1. Crie um arquivo de configuração do EditorConfig (`.editorconfig`) com o seguinte conteúdo:

```ini
root = true
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
[*.md]
indent_size = 4
trim_trailing_whitespace = false
```

Com essas configurações, seu projeto estará padronizado e pronto para o desenvolvimento da API REST. Lembre-se de configurar seu editor para usar o ESLint e o Prettier para garantir que o código esteja sempre formatado corretamente.

# App de Tarefas (React Native)

Este é um aplicativo simples em React Native para gerenciar uma lista de tarefas. Ele se comunica com uma API em Python (FastAPI) para realizar operações CRUD (Create, Read, Update, Delete) nas tarefas.

## Funcionalidades

- Exibir uma lista de tarefas
- Adicionar novas tarefas
- Excluir tarefas existentes

## Pré-requisitos

Certifique-se de ter o ambiente de desenvolvimento configurado para o React Native. Além disso, você precisará da API em execução para que o aplicativo funcione corretamente.

## Como usar

1. Clone o repositório.
2. Certifique-se de ter o Expo instalado globalmente.
3. Instale as dependências do projeto com `npm install expo`.
4. Execute o aplicativo com `npm start` ou `expo start`.
5. Certifique-se de que a API em Python (FastAPI) esteja em execução no endereço `http://127.0.0.1:8000` (ou atualize o código para o endereço correto da API).

## Configuração da API

Certifique-se de que a API em Python esteja sendo executada e configurada corretamente para receber as requisições do aplicativo React Native. Se necessário, ajuste as configurações de CORS na API para permitir as requisições do aplicativo.

## Observações

- Este aplicativo foi desenvolvido como um exemplo simples para demonstrar a integração entre um aplicativo React Native e uma API em Python usando o FastAPI. Modificações adicionais podem ser necessárias para a configuração em um ambiente de produção.

## Licença

Este projeto está sob a licença [MIT](https://www.mit.edu/~amini/LICENSE.md).

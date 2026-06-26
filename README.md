# CodeTutor - Tutor Didático de Programação

## Objetivo do Projeto
Esta aplicação não é apenas um chat genérico. Trata-se de um **Tutor Didático** com uma finalidade clara: auxiliar estudantes iniciantes em lógica de programação. 
O sistema recebe a dúvida do aluno e, utilizando o modelo via OpenRouter com um prompt de sistema direcionado, entrega uma resposta estruturada em três etapas: explicação analógica simples, exemplo prático em JavaScript e um pequeno exercício de fixação.

## Como instalar, configurar a chave e executar

1. No terminal, navegue até a pasta do projeto e execute `npm install` para instalar as dependências (Express, Cors e Dotenv).
2. Crie um arquivo chamado `.env` na raiz do projeto.
3. Insira sua chave no arquivo `.env` seguindo o formato: `OPENROUTER_API_KEY=sua_chave_aqui` (sem espaços ou aspas).
4. No terminal, execute `npm start` para inicializar o servidor.
5. Acesse no navegador: `http://localhost:3000`.
# 👨‍🏫 CodeTutor - Professor de Lógica de Programação

## 📖 Sobre o Projeto

O **CodeTutor** é uma aplicação web Full-Stack desenvolvida como requisito para a disciplina de Fundamentos de Inteligência Artificial. 

Diferente de um chat genérico baseado em IA, este projeto possui uma **finalidade clara e estruturada**: atuar como um tutor didático focado exclusivamente em lógica de programação e desenvolvimento de software. A aplicação recebe a dúvida do aluno desestruturada e, utilizando o modelo de linguagem `openai/gpt-oss-120b:free` via OpenRouter, processa a informação e devolve uma resposta padronizada em três etapas:
1. Explicação conceitual utilizando analogias do dia a dia.
2. Exemplo prático de código.
3. Exercício de fixação.

### 🛡️ Engenharia de Prompt e Segurança (Guardrails)
O sistema conta com regras estritas implementadas no Back-end (*System Prompt*). A IA está programada para **recusar** educadamente qualquer pergunta que fuja do escopo de tecnologia (como receitas, esportes ou assuntos pessoais), blindando a aplicação contra desvios de finalidade e injeções de prompt comuns.

---

## 🛠️ Tecnologias Utilizadas

**Back-end:**
* **Node.js:** Ambiente de execução JavaScript.
* **Express:** Framework para criação do servidor local e gerenciamento da rota da API (`/api/llm`).
* **Dotenv:** Gerenciamento seguro de variáveis de ambiente (proteção da Chave de API).
* **Cors:** Permissão de comunicação segura entre o Front-end e o Back-end.

**Front-end:**
* **HTML5:** Estruturação semântica.
* **Tailwind CSS:** Framework utilitário de CSS para estilização moderna, responsiva e implementação de Dark Mode.
* **Marked.js:** Biblioteca para conversão da resposta da IA (Markdown) em HTML formatado (negritos, listas e blocos de código).

---

## ⚙️ Como Baixar, Instalar e Executar

Siga o passo a passo abaixo para rodar a aplicação na sua máquina local.

### 1. Pré-requisitos
Você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (Versão LTS recomendada)
* [Git](https://git-scm.com/) (Para clonar o repositório)

### 2. Clonando o Projeto
Abra o seu terminal e execute:
```bash
git clone [https://github.com/eduarda-wq/CodeTutor](https://github.com/eduarda-wq/CodeTutor)
cd CodeTutor
```
*(Se você já baixou os arquivos manualmente, apenas abra o terminal dentro da pasta do projeto).*
### 3. Instalando as Dependências
O projeto precisa de pacotes externos para funcionar (Express, Tailwind, etc.). No terminal, na raiz do projeto, execute:
```bash
npm install
```
Isso criará automaticamente a pasta node_modules com tudo o que é necessário.
### 4. Configurando a Chave de API (O Cofre)
A Inteligência Artificial exige uma chave de autorização que **NUNCA** deve ser exposta publicamente.
**Como conseguir a sua chave:**
 1. Acesse o site OpenRouter e faça login.
 2. Navegue até a seção **Keys** (Chaves).
 3. Clique em **"Create Key"** e copie o código gerado (ele começa com sk-or-v1-).
**Onde colocar a chave no projeto:**
 1. Na raiz do projeto, crie um arquivo chamado exatamente **.env** (com o ponto na frente e sem extensões extras).
 2. Cole a sua chave seguindo estritamente este formato (sem espaços e sem aspas):
```env
OPENROUTER_API_KEY=sk-or-v1-sua-chave-gigante-aqui
```
### 5. Executando a Aplicação
Com as dependências instaladas e o .env configurado, inicie o servidor rodando o comando:
```bash
npm start
```
O terminal exibirá a mensagem: Servidor rodando em http://localhost:3000.
### 6. Como Utilizar
 1. Abra o seu navegador (Chrome, Edge, Firefox).
 2. Acesse o endereço: **http://localhost:3000**
 3. Você verá a interface escura do Professor de Lógica.
 4. Clique em um dos botões de sugestão ou digite a sua própria dúvida no campo de texto.
 5. Clique em **"Tirar Dúvida"** e aguarde o processamento do servidor. A tela exibirá a explicação formatada.
## 📁 Estrutura de Arquivos
```text
/
├── public/                 # Arquivos do Front-end (públicos para o navegador)
│   ├── index.html          # Interface do usuário
│   └── output.css          # CSS gerado pelo Tailwind
├── .env                    # Variáveis de ambiente (IGNORADO PELO GIT)
├── .gitignore              # Arquivos que não devem subir para o GitHub
├── package.json            # Lista de dependências e comandos do projeto
├── server.js               # Cérebro do Back-end (Servidor Express e chamada da API)
└── README.md               # Este arquivo de documentação
```

# Jovi Tech — Câmeras (Sprint 4 - Front-End Design + Web Development)

Site institucional da Jovi Tech, apresentando as tecnologias de câmeras inteligentes usadas nos smartphones da marca. Projeto migrado de HTML/CSS/JS puro (Sprint 2) para React com Next.js (Sprint 3) e evoluído na Sprint 4 com Tailwind CSS, rotas públicas/privadas, hooks customizados e consumo de API.

O projeto React fica dentro da pasta `jovi-tech-next/`.

## Tecnologias utilizadas
- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- JavaScript (JSX)
- Web Storage API (localStorage)
- Consumo de API pública (FakeStoreAPI, usada como mock)

## Como instalar as dependências
Com o Node.js instalado, entre na pasta do projeto e instale as dependências:

cd jovi-tech-next
npm install

## Como executar o projeto

cd jovi-tech-next
npm run dev

Depois abra `http://localhost:3000` no navegador.

Não existe back-end/servidor próprio: os dados de login são simulados no front-end e as mensagens do formulário de contato são salvas no `localStorage` do navegador. A listagem de "Novidades da loja" na home consome a FakeStoreAPI (API pública de terceiros, usada como mock).

## Rotas do projeto
- `/` — página inicial (pública)
- `/sobre` — página sobre o projeto (pública)
- `/painel` — área restrita (privada), só acessível após login. Sem login, redireciona para a home.

## Usuários e senhas para teste
O projeto conta com um login simulado (sem back-end/servidor real), acessível pelo botão "Entrar" no menu:

| Usuário | Senha    |
|---------|----------|
| admin   | jovi2026 |
| aluno   | facul123 |

## Uso de Inteligência Artificial no projeto
A estrutura do projeto e a divisão dos componentes (Header, Slideshow, TechCards, Produtos, ContactForm, LoginModal, Footer) foram planejadas pela equipe, com base no protótipo já existente da Sprint 2. A partir desse planejamento, utilizamos a IA (Claude, da Anthropic) como apoio na implementação, principalmente para relembrar conceitos de React vistos em aula (componentes, props, hooks), agilizar a criação de alguns componentes já definidos e, na Sprint 4, apoiar a migração da estilização para Tailwind CSS, a criação das rotas públicas/privadas, a extração da lógica de autenticação, validação de formulário e consumo de API para hooks customizados (useAuth, useMensagens, useProdutos). Todo o código foi digitado, testado e depurado manualmente por nós, incluindo a correção de erros de sintaxe, importação e configuração de ambiente que surgiram durante o desenvolvimento em diferentes computadores. O projeto não foi gerado integralmente pela IA; as ideias e a estrutura já estavam moldadas pela equipe, e a IA serviu como apoio pontual ao longo da implementação.

## Link do repositório
https://github.com/dudsbtw/sprint4-frontwebdev-rfeb

## Link do Deploy na Vercel
https://jovi-tech-next.vercel.app

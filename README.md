# 🎬 MeuCineClube

O **MeuCineClube** é uma aplicação web Single Page Application que foi desenvolvida em React. O projeto se baseia uma plataforma de cinema onde os usuários podem navegar por um catálogo de filmes, consultar detalhes específicos de cada obra, gerir uma lista de favoritos personalizada e alternar entre os modos de tema claro e escuro.

Este projeto foi desenvolvido como atividade prática para a disciplina de **Desenvolvimento de Software para Web** sob a orientação da **Profª Marianne Lacerda Dutra Theodoro**.

---

## 🚀 Funcionalidades

1. **Navegação SPA:** Transição instantânea entre páginas sem recarregamento do navegador (Home, Login, Favoritos e Detalhes).
2. **Tema Global (Claro/Escuro):** Alternância dinâmica de cores em toda a interface com persistência de dados.
3. **Autenticação Simulada:** Área de login estruturada com restrição de acessos.
4. **Rotas Protegidas (Guarda de Rotas):** Bloqueio de segurança na página de favoritos para utilizadores não autenticados.
5. **Gestão de Favoritos:** Adição e remoção de filmes com feedback visual em tempo real.
6. **Persistência Local:** Utilização do `localStorage` para manter o tema escolhido, a sessão do utilizador e a lista de favoritos mesmo após o refresh (`F5`).

---

## 🧠 Conceitos de React Aplicados

- **React Router Dom (v6):** Configuração de rotas declarativas (`BrowserRouter`, `Routes`, `Route`), links de navegação (`Link`), parâmetros dinâmicos na URL (`useParams`) e redirecionamento programático/imperativo (`useNavigate`).
- **Context API:** Criação de múltiplos contextos independentes para evitar o *Prop Drilling* e otimizar as re-renderizações (`ThemeContext`, `AuthContext`, `FavoritosContext`).
- **Hooks Nativos:** `useState` para estados reativos, `useEffect` para efeitos colaterais (sincronização com o `localStorage`) e `useContext` para consumo de dados globais.
- **Higher-Order Components (HOC):** Criação do componente `ProtectedRoute` para envelopar e proteger componentes filhos com base em condições lógicas.
- **Renderização Condicional e Feedback:** Mensagens dinâmicas de carregamento, validações de listas vazias e alertas flutuantes (*toasts*) temporários para ações do utilizador.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router Dom](https://reactrouter.com/)
- JavaScript (ES6+) / JSX

---

## 🔧 Como Executar o Projeto

Siga os passos abaixo para clonar e rodar o projeto localmente:

1. **Instalar as dependências do projeto:**
   ```bash
   npm install





Histório de de Commits/Linha do Tempo:

$ git log --oneline
2d548b4 (HEAD -> main, origin/main) Passo 10: Criando a documentacao README.md e finalizando o projeto para entrega
1fb0ced Passo 9: Adicionando toasts de feedback para ações de favoritos e ajustes finos de layout
494574f Passo 8: Criando FavoritosContext e integrando persistência da lista de favoritos
7095ad6 Passo 7: Pagina de detalhes do filme criada utilizando useParams para capturar rota dinamica
f2f74c5 Passo 6: Listando filmes na Home com carregamento de dados e link para rotas dinamicas
318b04e Passo 5: Criando componente ProtectedRoute e protegendo a rota de favoritos
79f5149 Passo 4: Criando AuthContext e tela de login simulado com redirecionamento
7a57648 Passo 3: Criando e configurando ThemeContext para controle de tema claro e escuro
2e85cdd Passo 1 e 2: Setup do projeto, estrutura de pastas e rotas básicas com BrowserRouter

# 🛍️ Montink Store

Montink Store é um projeto de e-commerce moderno e responsivo construído com Next.js, React, TypeScript e diversas bibliotecas modernas para garantir performance, usabilidade e facilidade de manutenção.

## 🚀 Tecnologias utilizadas

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Zod](https://zod.dev/) — validação de schemas
- [React Hook Form](https://react-hook-form.com/)
- [Lucide React](https://lucide.dev/) — ícones
- [Axios](https://axios-http.com/) — requisições HTTP
- [js-cookie](https://github.com/js-cookie/js-cookie) — manipulação de cookies
- [React Hot Toast](https://react-hot-toast.com/) — notificações
- [JSON Server](https://github.com/typicode/json-server) — API mock para desenvolvimento

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/guilhermematos13/montink-store.git

# Acesse o diretório
cd montink-store

# Instale as dependências
npm install
```

## 💻 Scripts disponíveis

```bash
npm run dev        # Inicia o servidor de desenvolvimento
npm run build      # Gera a build para produção
npm run start      # Inicia a aplicação em modo de produção
npm run lint       # Executa o linter
npm run format     # Formata o código com Prettier
npm run server     # Inicia o JSON Server em http://localhost:4000
```

## 🌐 Variáveis de ambiente

Crie um arquivo `.env.local` com as seguintes chaves (exemplo):

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/
NEXT_PUBLIC_API_CEP=https://viacep.com.br/
```

Essas variáveis são usadas para configurar as APIs de produtos e de CEP.

## 📁 Estrutura do projeto

```
src/
├── components/        # Componentes reutilizáveis (Button, Drawer, etc.)
├── context/           # Context API (Cart, Auth, etc.)
├── app/               # Páginas do projeto
├── api/               # Instâncias do axios (api, apiCep)
├── utils/             # Funções utilitárias
├── constants/         # Enums e constantes compartilhadas
├── assets/            # Imagens utilizada no projeto
├── controllers/       # Controllers para chamadas na API
├── presentation/      # Telas criadas
├── infra/             # Tipagens de retornos da API e chamadas.
```

## ✅ Funcionalidades

- 🛒 Adição e remoção de produtos no carrinho
- 📦 Checkout com botão de finalizar compra
- 💰 Cálculo de total de itens e preços
- 🔐 Redirecionamento para login caso o usuário não esteja autenticado
- 🧠 Persistência do carrinho com cookies por 15 minutos
- 🧪 Tela de erro com botão de "Tentar novamente"
- ✅ Tela de sucesso com protocolo do pedido

## 🔐 Login
- Email: teste@teste.com
- Senha: teste123

## 🌎 Vercel:
- [Vercel](https://montink-store-vyw5.vercel.app/) 

## 🧑‍💻 Autor

Desenvolvido por Guilherme Matos (https://github.com/guilhermematos13).

---

Feito com ❤️ usando Next.js + Tailwind CSS

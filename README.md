
![image](https://github.com/user-attachments/assets/b368c757-3bf3-48c7-9cb8-4878c4c4e09f)


# 📚 Honsuki - Seu Refúgio Literário Pessoal
"Transformando páginas em memórias e sonhos em próximos capítulos"
#
✨ Explore, Registre e Compartilhe sua jornada literária em um espaço feito para quem vive entre linhas e histórias.

## 🌟 Destaques

- 📖 Listas Inteligentes: Organize livros entre "Quero Ler" e "Já Li" com drag-and-drop <br>
- 🖋️ Diário de Resenhas: Escreva análisesprofundas com markdown e sistema de avaliação por estrelas<br>
- 🌐 Biblioteca Universal: Busque automaticamente dados de 50+ milhões de livros via Google Books API<br>
- 📢 Comunidade Leitora: Receba recomendações e descubra novas pérolas literárias <br>
- 📊 Insights Pessoais: Estatísticas de leitura e metas personalizadas (em breve!)<br>

## 🛠️ Tech Stack

Frontend:
- React
- Typescript
- MUI

Backend:
- Node.js
- Firebase
- Express
## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Conta no [Firebase](https://firebase.google.com/) com um projeto criado

### Configuração do Backend

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/honsuki.git
   cd honsuki
   ```

2. **Instale as dependências:**
   ```bash
   cd backend
   npm install
   ```

3. **Configure o Firebase:**
   - Vá para o [Console do Firebase](https://console.firebase.google.com/)
   - Crie um novo projeto (ou use um existente)
   - Em Configurações > Contas de serviço > Gerar nova chave privada
   - Salve o arquivo JSON baixado como `new-firebase-key.json` na pasta `backend/src/`

4. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na pasta `backend` com o seguinte conteúdo:
   ```
   PORT=3001
   NODE_ENV=development
   ```

5. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   
   O servidor estará rodando em `http://localhost:3001`

### Verificação da API

Para verificar se a API está funcionando corretamente, acesse:
- Health check: `http://localhost:3001/health`
- Buscar livros: `http://localhost:3001/api/books`

### Para Produção

Se você quiser implantar o backend em produção:

1. **Encode o arquivo de configuração do Firebase:**
   ```bash
   node -e "console.log(Buffer.from(require('fs').readFileSync('./src/new-firebase-key.json').toString()).toString('base64'))"
   ```

2. **Configure as variáveis de ambiente no seu serviço de hospedagem (Render, Heroku, etc.):**
   - `NODE_ENV=production`
   - `FIREBASE_CREDENTIALS_ENCODED=<resultado do comando acima>`

3. **Implante o backend:**
   ```bash
   npm run build
   npm start
   ```

## 📝 Endpoints da API

- `GET /health` - Verificar status do servidor
- `GET /api/books` - Buscar todos os livros
- `POST /api/books` - Adicionar um novo livro
- `GET /api/search?q=QUERY` - Buscar livro na API do Google Books
- `POST /api/reviews` - Adicionar uma nova resenha
- `GET /api/reviews?isbn=ISBN` - Buscar resenhas de um livro específico

## 🤝 Como Contribuir

Encontrou um bug? Tem uma ideia incrível?

1. Fork o projeto 📌
2. Crie sua branch (`git checkout -b feature/nova-magia`) ✨
3. Faça commit das mudanças (`git commit -m 'Adiciona feitiço de busca melhorado'`) 🔮
4. Push para a branch (`git push origin feature/nova-magia`) 🚀
5. Abra um Pull Request! 📬

## 📄 Licença

Distribuído sob licença MIT. Veja `LICENSE` para mais detalhes.

---

Inspirado por 📖 + ☕ = ❤️

> "Um livro deve ser o machado que quebra o mar gelado dentro de nós." - Franz Kafka


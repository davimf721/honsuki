# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não lançado]

### Adicionado
- Endpoint POST `/api/books/add-from-api` para buscar livros na API externa e salvá-los diretamente no banco de dados
- Campos adicionais no objeto de livro:
  - `description`: descrição do livro
  - `pageCount`: número de páginas
  - `publishedDate`: data de publicação
  - `publisher`: editora
  - `categories`: categorias/gêneros do livro
- Resposta melhorada ao adicionar livros, incluindo dados completos do livro adicionado

### Alterado
- Expandido o método `searchBooksAPI` para capturar mais metadados dos livros

### Corrigido
- N/A

## [1.0.0]

### Adicionado
- API básica para gerenciamento de livros
- Endpoint GET `/api/books` para listar todos os livros
- Endpoint POST `/api/books` para adicionar um livro manualmente
- Endpoint GET `/api/search` para buscar livros na API do Google Books
- Sistema de cache para consultas de livros
- Endpoints para gerenciamento de resenhas (GET e POST `/api/reviews`)

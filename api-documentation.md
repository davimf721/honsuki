# Documentação da API de Livros

Este documento descreve os endpoints disponíveis na API de gerenciamento de livros.

## Base URL

```
http://localhost:3001
```

## Endpoints

### Livros

#### Listar todos os livros

```
GET /api/books
```

**Resposta de Sucesso:**
```json
[
  {
    "id": "abc123",
    "title": "Harry Potter e a Pedra Filosofal",
    "author": "J.K. Rowling",
    "isbn": "9788532511010",
    "thumbnail": "http://books.google.com/books/content?id=...",
    "status": "to-read",
    "createdAt": "2023-04-28T12:34:56.789Z"
  },
  // ... outros livros
]
```

#### Adicionar livro manualmente

```
POST /api/books
```

**Corpo da Requisição:**
```json
{
  "title": "1984",
  "author": "George Orwell",
  "isbn": "9780451524935",
  "thumbnail": "http://example.com/cover.jpg"
}
```

**Resposta de Sucesso:**
```json
{
  "id": "def456",
  "message": "Livro adicionado com sucesso"
}
```

#### Buscar na API e adicionar livro ao banco de dados (NOVO)

```
POST /api/books/add-from-api
```

**Corpo da Requisição:**
```json
{
  "query": "Harry Potter"
}
```

**Resposta de Sucesso:**
```json
{
  "id": "ghi789",
  "message": "Livro adicionado com sucesso",
  "book": {
    "title": "Harry Potter e a Pedra Filosofal",
    "author": "J.K. Rowling",
    "isbn": "9788532511010",
    "thumbnail": "http://books.google.com/books/content?id=...",
    "description": "Harry Potter é um menino cujos pais...",
    "pageCount": 309,
    "publishedDate": "1999",
    "publisher": "Rocco",
    "categories": ["Juvenile Fiction", "Fantasy"]
  }
}
```

**Códigos de Erro:**
- `400 Bad Request`: Query de busca ausente
- `500 Internal Server Error`: Erro ao buscar livro ou livro já cadastrado

### Pesquisa

#### Buscar livro na API externa

```
GET /api/search?q=Harry%20Potter
```

**Parâmetros da Query:**
- `q`: Termo de busca (obrigatório)

**Resposta de Sucesso:**
```json
{
  "title": "Harry Potter e a Pedra Filosofal",
  "author": "J.K. Rowling",
  "isbn": "9788532511010",
  "thumbnail": "http://books.google.com/books/content?id=...",
  "description": "Harry Potter é um menino cujos pais...",
  "pageCount": 309,
  "publishedDate": "1999",
  "publisher": "Rocco",
  "categories": ["Juvenile Fiction", "Fantasy"]
}
```

**Códigos de Erro:**
- `400 Bad Request`: Parâmetro de busca ausente
- `500 Internal Server Error`: Erro ao buscar livro ou nenhum resultado encontrado

### Resenhas

#### Adicionar resenha

```
POST /api/reviews
```

**Corpo da Requisição:**
```json
{
  "isbn": "9788532511010",
  "review": "Uma história fantástica que me fez sonhar acordado.",
  "user": "usuario123"
}
```

**Resposta de Sucesso:**
```json
{
  "message": "Resenha adicionada!"
}
```

#### Obter resenhas por ISBN

```
GET /api/reviews?isbn=9788532511010
```

**Parâmetros da Query:**
- `isbn`: ISBN do livro

**Resposta de Sucesso:**
```json
[
  {
    "isbn": "9788532511010",
    "review": "Uma história fantástica que me fez sonhar acordado.",
    "user": "usuario123",
    "timestamp": "2023-04-28T12:34:56.789Z"
  },
  // ... outras resenhas
]
```

## Status Codes

- `200 OK`: Requisição bem-sucedida
- `201 Created`: Recurso criado com sucesso
- `400 Bad Request`: Parâmetros inválidos ou ausentes
- `500 Internal Server Error`: Erro no servidor

## Exemplos de Uso no Postman

### Pesquisar livro por título ou ISBN

1. Método: `GET`
2. URL: `http://localhost:3001/api/search?q=Harry Potter`
3. Clique em "Send"

### Adicionar livro da API ao banco de dados (NOVO)

1. Método: `POST`
2. URL: `http://localhost:3001/api/books/add-from-api`
3. Aba: "Body" > "raw" > Formato: "JSON"
4. Corpo:
   ```json
   {
     "query": "Harry Potter"
   }
   ```
5. Clique em "Send"

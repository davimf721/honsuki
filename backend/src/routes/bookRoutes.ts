import express, { Request, Response, Router } from 'express';
import { db } from "../services/firebaseService";
import { searchBooksAPI, addBookToDB } from '../controllers/booksController';

const router: Router = express.Router();

// Buscar todos os livros (GET correto em vez de POST)
router.get('/books', async (req: Request, res: Response) => {
    try {
        const booksSnapshot = await db.collection('books').get();
        const books = booksSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar livros" });
    }
});

// Adicionar novo livro
router.post('/books', async (req: Request, res: Response) => {
    try {
        const bookData = req.body;
        const bookId = await addBookToDB(bookData);
        res.status(201).json({ id: bookId, message: "Livro adicionado com sucesso" });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
        return res.status(500).json({ error: errorMessage });
    }
});

// Buscar livro na API externa
router.get('/search', async (req: Request, res: Response) => {
    try {
        const query = req.query.q as string;
        if (!query) {
            return res.status(400).json({ error: "Query de busca necessária" });
        }
        const bookData = await searchBooksAPI(query);
        return res.status(200).json(bookData);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
        return res.status(500).json({ error: errorMessage });
    }
});

export default router;
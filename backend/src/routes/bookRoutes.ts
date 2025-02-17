import express, { Request, Response, Router } from 'express';
import { searchBooksAPI, addBookToDB } from '../controllers/booksController';

const router: Router = express.Router();

router.post('/books', async (req: Request, res: Response) => {
    try {
        const { query } = req.body;

        if (!query) {
            return res.status(400).json({ error: "Consulta não fornecida" });
        }

        const bookData = await searchBooksAPI(query);
        const bookId = await addBookToDB(bookData);

        return res.status(201).json({ id: bookId });

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
        return res.status(500).json({ error: errorMessage });
    }
});

export default router;
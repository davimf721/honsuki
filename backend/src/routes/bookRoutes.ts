import express, { Request, Response, Router } from 'express';
import {db} from "../services/firebaseService";

const router: Router = express.Router();

router.post('/books', async (req: Request, res: Response) => {
    console.log('POST /api/books chamado');
    try {
        const snapshot = await db.collection('books').get();
        const books = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(books);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
        return res.status(500).json({ error: errorMessage });
    }
});

router.get('/books', async (req: Request, res: Response) => {
    console.log('GET /api/books chamado');
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

export default router;
// backend/src/controllers/booksController.ts
import { Request, Response } from 'express';
import { db } from '../firebaseConfig'; // Sua configuração do Firebase

export const getBooks = async (req: Request, res: Response) => {
  try {
    const booksSnapshot = await db.collection('books').get();
    const books = booksSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.status(200).json(books);
  } catch (error) {
    res.status(500).send('Erro ao buscar livros');
  }
};
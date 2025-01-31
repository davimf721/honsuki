// backend/src/controllers/booksController.ts
import { Request, Response } from 'express';
import { db } from '../config/firebase'; // Sua configuração do Firebase

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

export const addBook = async (req: Request, res: Response) => {
  try {
    const { title, author, status } = req.body;
    const bookRef = await db.collection('books').add({
      title,
      author,
      status: status || 'to-read',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    res.status(201).json({ id: bookRef.id, message: 'Livro adicionado!' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao adicionar livro' });
  }
};
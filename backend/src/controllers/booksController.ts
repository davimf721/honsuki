import { Request, Response } from "express";
import { db } from "../services/firebaseService";

export const addBook = async (req: Request, res: Response) => {
    try {
        const { title, author, isbn } = req.body;
        const bookRef = db.collection("books").doc(isbn);
        await bookRef.set({ title, author, isbn });
        res.status(200).json({ message: "Livro adicionado!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao adicionar livro" });
    }
};

export const getBooks = async (req: Request, res: Response) => {
    try {
        const snapshot = await db.collection("books").get();
        const books = snapshot.docs.map(doc => doc.data());
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar livros" });
    }
};
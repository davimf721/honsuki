import { Request, Response } from "express";
import { db } from "../services/firebaseService";

export const addReview = async (req: Request, res: Response) => {
    try {
        const { isbn, review, user } = req.body;
        const reviewRef = db.collection("reviews").doc();
        await reviewRef.set({ isbn, review, user, timestamp: new Date() });
        res.status(200).json({ message: "Resenha adicionada!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao adicionar resenha" });
    }
};

export const getReviews = async (req: Request, res: Response) => {
    try {
        const { isbn } = req.query;
        const snapshot = await db.collection("reviews").where("isbn", "==", isbn).get();
        const reviews = snapshot.docs.map(doc => doc.data());
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar resenhas" });
    }
};
import axios from 'axios';
import { db } from '../services/firebaseService';
import admin from "firebase-admin";

// Cache simples em memória
const bookCache = new Map<string, any>();

export const searchBooksAPI = async (query: string) => {
    // Verifica cache primeiro
    if (bookCache.has(query)) {
        return bookCache.get(query);
    }

    try {
        // Tenta buscar por ISBN primeiro
        let response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=isbn:${query}`
        );

        // Fallback para busca geral
        if (response.data.totalItems === 0) {
            response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
            );
        }

        const item = response.data.items?.[0]?.volumeInfo;

        if (!item) {
            throw new Error("Livro não encontrado");
        }

        // Estrutura padronizada
        const bookData = {
            title: item.title || "Título desconhecido",
            author: item.authors?.join(", ") || "Autor desconhecido",
            isbn: item.industryIdentifiers?.find(
                (id: any) => id.type === "ISBN_13"
            )?.identifier || null,
            thumbnail: item.imageLinks?.thumbnail || "",
        };

        // Atualiza cache
        bookCache.set(query, bookData);

        return bookData;
    } catch (error) {
        throw new Error(`Falha na busca: ${error instanceof Error ? error.message : "Erro desconhecido"}`);
    }
};

export const addBookToDB = async (bookData: any) => {
    const docRef = await db.collection('books').add({
        ...bookData,
        status: 'to-read',
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return docRef.id;
};
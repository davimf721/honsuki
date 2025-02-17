import axios from 'axios';
import { db } from '../services/firebaseService';
import admin from "firebase-admin";


const bookCache = new Map<string, any>();

export const searchBooksAPI = async (query: string) => {
    if (bookCache.has(query)) {
        return bookCache.get(query);
    }

    try {
        let response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=isbn:${query}`
        );


        if (response.data.totalItems === 0) {
            response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
            );
        }

        if (response.data.totalItems === 0 || !response.data.items?.[0]?.volumeInfo) {
            throw new Error("Nenhum resultado encontrado");
        }

        const item = response.data.items[0].volumeInfo;


        if (!item.title) {
            throw new Error("Título do livro não encontrado");
        }


        const bookData = {
            title: item.title || "Título desconhecido",
            author: item.authors?.join(", ") || "Autor desconhecido",
            isbn: item.industryIdentifiers?.find(
                (id: any) => id.type === "ISBN_13"
            )?.identifier || null,
            thumbnail: item.imageLinks?.thumbnail || "",
        };


        bookCache.set(query, bookData);

        return bookData;
    } catch (error) {
        throw new Error(`Falha na busca: ${error instanceof Error ? error.message : "Erro desconhecido"}`);
    }
};

export const addBookToDB = async (bookData: any) => {
    if (bookData.isbn) {
        const snapshot = await db.collection('books')
            .where('isbn', '==', bookData.isbn)
            .limit(1)
            .get();

        if (!snapshot.empty) {
            throw new Error("Livro já cadastrado");
        }
    }

    const docRef = await db.collection('books').add({
        ...bookData,
        status: 'to-read',
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return docRef.id;
};
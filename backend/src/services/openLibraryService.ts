import axios from "axios";

export const getBookByISBN = async (isbn: string) => {
    try {
        const response = await axios.get(`https://openlibrary.org/isbn/${isbn}.json`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar livro:", error);
        return null;
    }
};
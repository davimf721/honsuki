// src/services/api.ts

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
});

export default api;

export const searchBooks = async (query: string) => {
  try {
    const response = await api.get(`/api/search?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    throw error;
  }
};

export const getBooks = async () => {
  try {
    const response = await api.get('/api/books');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter livros:', error);
    throw error;
  }
};

export const addBookFromApi = async (query: string) => {
  try {
    const response = await api.post('/api/books/add-from-api', { query });
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar livro da API:', error);
    throw error;
  }
};

export const addBook = async (bookData: any) => {
  try {
    const response = await api.post('/api/books', bookData);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar livro:', error);
    throw error;
  }
};

export const getReviews = async (isbn: string) => {
  try {
    const response = await api.get(`/api/reviews?isbn=${isbn}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter resenhas:', error);
    throw error;
  }
};

export const addReview = async (reviewData: any) => {
  try {
    const response = await api.post('/api/reviews', reviewData);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar resenha:', error);
    throw error;
  }
};

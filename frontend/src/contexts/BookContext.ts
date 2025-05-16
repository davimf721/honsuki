import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Book } from '../types';
import { getBooks } from '../services/api';

interface BookContextData {
  books: Book[];
  toReadBooks: Book[];
  readingBooks: Book[];
  readBooks: Book[];
  isLoading: boolean;
  error: string | null;
  refreshBooks: () => Promise<void>;
  updateBookStatus: (bookId: string, newStatus: 'to-read' | 'reading' | 'read') => void;
}

const BookContext = createContext<BookContextData>({} as BookContextData);

export const useBooks = () => {
  return useContext(BookContext);
};

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshBooks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (err) {
      setError('Erro ao carregar livros. Por favor, tente novamente.');
      console.error('Erro ao buscar livros:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshBooks();
  }, []);

  const updateBookStatus = (bookId: string, newStatus: 'to-read' | 'reading' | 'read') => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, status: newStatus } : book
      )
    );
    // Aqui você pode adicionar uma chamada à API para atualizar o status no backend
  };

  const toReadBooks = books.filter((book) => book.status === 'to-read');
  const readingBooks = books.filter((book) => book.status === 'reading');
  const readBooks = books.filter((book) => book.status === 'read');

  return (
    <BookContext.Provider
      value={{
        books,
        toReadBooks,
        readingBooks,
        readBooks,
        isLoading,
        error,
        refreshBooks,
        updateBookStatus,
      }}
    >
      {children}
    </BookContext.Provider>
  );
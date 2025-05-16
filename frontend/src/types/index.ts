export interface Book {
  id?: string;
  title: string;
  author: string;
  isbn: string;
  thumbnail: string;
  status?: 'to-read' | 'reading' | 'read';
  createdAt?: string;
  description?: string;
  pageCount?: number;
  publishedDate?: string;
  publisher?: string;
  categories?: string[];
}

export interface Review {
  id?: string;
  isbn: string;
  review: string;
  rating?: number;
  user: string;
  timestamp?: string;
  bookTitle?: string;
  bookAuthor?: string;
  bookThumbnail?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  favoriteGenres?: string[];
}

export interface SearchResult {
  books: Book[];
  totalItems: number;
}
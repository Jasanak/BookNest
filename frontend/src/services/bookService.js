import api from "./api";

export const bookService = {
  getAllBooks: async (filters = {}) => {
    const response = await api.get("/books", { params: filters });
    return response.data;
  },

  getBookById: async (id) => {
    const response = await api.get(`/books/${id}`);
    return response.data;
  },

  searchBooks: async (query) => {
    const response = await api.post("/books/search", { query });
    return response.data;
  },

  createBook: async (bookData) => {
    const response = await api.post("/books", bookData);
    return response.data;
  },

  updateBook: async (id, bookData) => {
    const response = await api.put(`/books/${id}`, bookData);
    return response.data;
  },

  deleteBook: async (id) => {
    const response = await api.delete(`/books/${id}`);
    return response.data;
  },

  borrowBook: async (bookId, userId) => {
    const response = await api.post("/books/borrow", { bookId, userId });
    return response.data;
  },

  returnBook: async (bookId, userId) => {
    const response = await api.post("/books/return", { bookId, userId });
    return response.data;
  },

  renewBook: async (bookId, userId) => {
    const response = await api.post("/books/renew", { bookId, userId });
    return response.data;
  },

  reserveBook: async (bookId, userId) => {
    const response = await api.post("/books/reserve", { bookId, userId });
    return response.data;
  },
};

import axios from "axios";

export const booksApi = axios.create({
  baseURL: "http://localhost:8900/api/books/",
});

export const getBooks = async () => {
  const { data } = await booksApi.get("/");
  return data;
};

export const getSearchBook = async (query) => {
  const { data } = await booksApi.get("/search", {
    params: {
      query,
    },
  });
  return data;
};

export const addBook = async (book) => {
  const { data } = await booksApi.post("/", book);
  return data;
};

export const updateBook = async (book) => {
  const { data } = await booksApi.put(`/${book.id}`, book.book);

  return data;
};

export const toggleBook = async (id) => {
  const { data } = await booksApi.patch(`/${id}/borrow`);

  return data;
};

export const deleteBook = async (id) => {
  const { data } = await booksApi.delete(`/${id}`);

  return data;
};

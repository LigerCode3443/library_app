import { useState } from "react";
import AddBook from "../AddBook/AddBook";
import ListBooks from "../ListBooks/ListBooks";
import Modal from "../EditModalBook/EditModalBook";

const Main = ({ filterBooks, books, setBooks }) => {
  const [currentBook, setCurrentBook] = useState(null);
  return (
    <div className=" bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 h-[80vh] rounded-xl flex p-4 ">
      <AddBook setBooks={setBooks} />
      <ListBooks
        filterBooks={filterBooks}
        books={books}
        setBooks={setBooks}
        setCurrentBook={setCurrentBook}
      />
      <Modal currentBook={currentBook} setBooks={setBooks} />
    </div>
  );
};
export default Main;

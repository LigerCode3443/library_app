import { useEffect, useRef } from "react";
import CardBook from "../CardBook/CardBook";

const ListBooks = ({ filterBooks, books, setBooks, setCurrentBook }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [books]);

  return (
    <ul className="w-2/3 pl-2 flex flex-col gap-2 text-gray-700 overflow-y-auto">
      {filterBooks === null
        ? books?.map((book) => (
            <li key={book.id} ref={scrollRef}>
              <CardBook
                book={book}
                setBooks={setBooks}
                setCurrentBook={setCurrentBook}
              />
            </li>
          ))
        : filterBooks?.map((book) => (
            <li key={book.id}>
              <CardBook book={book} setCurrentBook={setCurrentBook} />
            </li>
          ))}
    </ul>
  );
};
export default ListBooks;

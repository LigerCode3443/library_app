import CardBook from "../CardBook/CardBook";
import books from "../../assets/books.json";

const ListBooks = () => {
  return (
    <ul className="w-2/3 pl-2 flex flex-col gap-2 text-gray-700 overflow-y-auto">
      {books.map((book) => (
        <CardBook book={book} key={book.id} />
      ))}
    </ul>
  );
};
export default ListBooks;

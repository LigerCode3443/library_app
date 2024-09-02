import { deleteBook, toggleBook } from "../../services/services";

const CardBook = ({ setBooks, setCurrentBook, book }) => {
  const { id, author, title, isbn, isBorrowed } = book;

  const deleteBookById = async (id) => {
    try {
      await deleteBook(id);
      setBooks((prev) => prev.filter((i) => i.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  const borrowedBook = async (id) => {
    try {
      await toggleBook(id);

      setBooks((prev) =>
        prev.map((i) => (i.id === id ? { ...i, isBorrowed: !i.isBorrowed } : i))
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card  w-[100%] shadow-xl max-h-32 flex flex-row justify-between items-center p-3 bg-blue-200 ">
      <div className="flex flex-col ">
        <h2 className="card-title">Title: {title}</h2>
        <p>Author: {author}</p>
        <p>isbn: {isbn}</p>
        <div className="flex flex-row gap-2 items-center">
          Borrowed:
          <button
            className={`w-4 h-4 rounded-xl  ${
              !isBorrowed
                ? "bg-green-700 hover:bg-green-800"
                : "bg-red-600 hover:bg-red-700"
            }`}
            onClick={() => {
              borrowedBook(id);
            }}
          ></button>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          className="btn btn-info max-w-20 p-4 "
          onClick={() => {
            setCurrentBook(book);
            return document.getElementById("my_modal_3").showModal();
          }}
        >
          Edit
        </button>
        <button
          className="btn max-w-20 bg-red-500 hover:bg-red-600 p-4"
          onClick={() => {
            deleteBookById(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default CardBook;

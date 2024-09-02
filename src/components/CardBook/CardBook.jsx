const CardBook = ({ book: { author, title, isbn, isBorrowed } }) => {
  return (
    <li className="card  w-[100%] shadow-xl max-h-32 flex flex-row justify-between items-center p-3 bg-blue-200 ">
      <div className="flex flex-col ">
        <h2 className="card-title">{title}</h2>
        <p>{author}</p>
        <p>{isbn}</p>
        <div className="flex flex-row gap-2 items-center">
          Borrowed:
          <button
            className={`w-4 h-4 rounded-xl  ${
              isBorrowed
                ? "bg-green-700 hover:bg-green-800"
                : "bg-red-600 hover:bg-red-700"
            }`}
          ></button>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          className="btn btn-info max-w-20 p-1 "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Edit
        </button>
        <button className="btn max-w-20 bg-red-500 hover:bg-red-600 p-1">
          Delete
        </button>
      </div>
    </li>
  );
};
export default CardBook;

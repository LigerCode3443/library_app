import { useForm } from "react-hook-form";
import { addBook } from "../../services/services";

const AddBook = ({ setBooks }) => {
  const { handleSubmit, register, reset } = useForm();

  const addBookLibrary = async (b) => {
    try {
      const data = await addBook(b);

      setBooks((prev) => [...prev, data]);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  const onSubmit = (data) => {
    addBookLibrary(data);

    reset();
  };

  return (
    <div className="w-1/3 border-r-2 pr-2 ">
      <form
        className="flex flex-col justify-center items-center my-auto text-gray-500"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-white">Add book</p>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Author</span>
          </div>
          <input
            type="text"
            placeholder="J.K. Rowling"
            className="input input-bordered w-full max-w-xs"
            {...register("author")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Title</span>
          </div>
          <input
            type="text"
            placeholder="Harry Potter"
            className="input input-bordered w-full max-w-xs"
            {...register("title")}
          />
        </label>
        <label className="form-control w-full max-w-xs mb-4">
          <div className="label">
            <span className="label-text text-white">Isbn</span>
          </div>
          <input
            type="text"
            placeholder="978-3-16-148410-0"
            className="input input-bordered w-full max-w-xs"
            {...register("isbn")}
          />
        </label>
        <button className="btn btn-info w-[80%]">Add</button>
      </form>
    </div>
  );
};
export default AddBook;

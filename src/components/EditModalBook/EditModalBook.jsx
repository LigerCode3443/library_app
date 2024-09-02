import { useEffect, useRef } from "react";

import { updateBook } from "../../services/services";
import { useForm } from "react-hook-form";

const Modal = ({ currentBook, setBooks }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { ...currentBook },
  });
  const modalRef = useRef(null);
  useEffect(() => {
    reset(currentBook);
  }, [reset, currentBook]);

  const updateBookById = async (book) => {
    try {
      const data = await updateBook(book);
      setBooks((prev) =>
        prev.map((i) => (i.id === data.id ? { ...i, ...data } : i))
      );
      modalRef.current.close();
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = (book) => {
    const newBook = {
      author: book.author,
      title: book.title,
      isbn: book.isbn,
    };

    updateBookById({ id: book.id, book: newBook });
  };
  return (
    <div className="text-gray-700">
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form
            method="dialog"
            className="flex flex-col  items-center text-gray-500"
            onSubmit={handleSubmit(onSubmit)}
          >
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => modalRef.current.close()}
            >
              ✕
            </button>
            <p>Edit book</p>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Author</span>
              </div>
              <input
                type="text"
                name="author"
                placeholder="J.K. Rowling"
                className="input input-bordered w-full max-w-xs"
                {...register("author")}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">Title</span>
              </div>
              <input
                type="text"
                name="title"
                placeholder="Harry Potter"
                className="input input-bordered w-full max-w-xs"
                {...register("title")}
              />
            </label>
            <label className="form-control w-full max-w-xs mb-4">
              <div className="label">
                <span className="label-text ">Isbn</span>
              </div>
              <input
                type="text"
                name="isbn"
                placeholder="978-3-16-148410-0"
                className="input input-bordered w-full max-w-xs"
                {...register("isbn")}
              />
            </label>
            <button type="submit" className="btn btn-info w-[80%] max-w-60">
              Edit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};
export default Modal;

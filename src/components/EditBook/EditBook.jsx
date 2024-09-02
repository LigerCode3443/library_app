const EditBook = () => {
  return (
    <form className="flex flex-col  items-center text-gray-500">
      <p>Edit book</p>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Author</span>
        </div>
        <input
          type="text"
          placeholder="J.K. Rowling"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text ">Title</span>
        </div>
        <input
          type="text"
          placeholder="Harry Potter"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs mb-4">
        <div className="label">
          <span className="label-text ">Isbn</span>
        </div>
        <input
          type="text"
          placeholder="978-3-16-148410-0"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <button className="btn btn-info w-[80%] max-w-60">Edit</button>
    </form>
  );
};
export default EditBook;

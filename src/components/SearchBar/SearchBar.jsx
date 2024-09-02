const SearchBar = () => {
  return (
    <div className="navbar py-5 shadow-lg rounded-xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Library Books</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control flex flex-row gap-5 text-gray-500">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <button className="btn btn-info">Search</button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;

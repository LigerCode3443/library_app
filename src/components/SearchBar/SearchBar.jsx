import { useState } from "react";
import toast from "react-hot-toast";
import { getSearchBook } from "../../services/services";

const SearchBar = ({ setFilterBooks }) => {
  const [query, setQuery] = useState("");

  const search = async (book) => {
    try {
      const data = await getSearchBook(book);
      if (data.length === 0) {
        toast.error("This book is not available");
      }
      setFilterBooks(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = () => {
    search(query);
    setQuery("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  //   useEffect(() => {
  //     if (query === "") return;

  //     const search = async (book) => {
  //       try {
  //         const data = await getSearchBook(book);
  //         if (data.length === 0) {
  //           //   toast.error("Not found book");
  //         }
  //         setFilterBooks(data);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };
  //     search(query);
  //   }, [query, setFilterBooks]);

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
            className="input input-bordered  md:w-auto "
            value={query}
            onKeyPress={handleKeyPress}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button className="btn btn-info" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;

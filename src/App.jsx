import { useEffect, useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import Main from "./components/Main/Main";
import { Toaster } from "react-hot-toast";
import { getBooks } from "./services/services";

function App() {
  const [filterBooks, setFilterBooks] = useState(null);
  const [books, setBooks] = useState([]);

  const allBooks = async () => {
    try {
      const data = await getBooks();

      setBooks(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    allBooks();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-2 text-white flex flex-col gap-5 min-h-screen">
      <SearchBar setFilterBooks={setFilterBooks} />
      <Main filterBooks={filterBooks} books={books} setBooks={setBooks} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;

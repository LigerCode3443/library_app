import { useEffect } from "react";
import "./App.css";
import { booksApi } from "./config/libraryApi";
import SearchBar from "./components/SearchBar/SearchBar";
import Main from "./components/Main/Main";

function App() {
  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await booksApi.get("/");
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getBooks();
  }, []);
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-2 text-white flex flex-col gap-5 min-h-screen">
      <SearchBar />
      <Main />
    </div>
  );
}

export default App;

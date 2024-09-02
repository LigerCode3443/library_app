import AddBook from "../AddBook/AddBook";
import ListBooks from "../ListBooks/ListBooks";
import Modal from "../Modal/Modal";

const Main = () => {
  return (
    <div className=" bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 h-[80vh] rounded-xl flex p-4 ">
      <AddBook />
      <ListBooks />
      <Modal />
    </div>
  );
};
export default Main;

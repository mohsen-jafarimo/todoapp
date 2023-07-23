import { Link } from "react-router-dom";
import Dropdown from "../helper/dropdown";

const Header = () => {
  return (
    <header className="flex justify-between p-4 md:fixed top-0 right-0 left-0 items-center default-bg">
      <Link className="text-2xl" to={`/home`}>
        Todo App
      </Link>
      <Dropdown />
      <nav className="hidden md:flex space-x-2 items-center">
        <input
          type="text"
          placeholder="Search"
          className="bg-blue-500 rounded outline-none font-bold text-white px-3"
        />
      </nav>
    </header>
  );
};
export default Header;

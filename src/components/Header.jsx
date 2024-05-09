import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search?q=${query}`);
    setQuery("");
  }
  return (
    <header className="bg-gray-950 h-14 text-white flex justify-center items-center fixed top-0 z-50 w-full">
      <div className="flex items-center w-[90%] lg:w-[30%] justify-between">
        <h1 className="bg-gray-900 w-10 h-8 p-1 rounded-md ">
          <Link to="">Taa</Link>
        </h1>
        <form
          className="flex items-center justify-between bg-gray-900 py-1 px-2 w-[80%] rounded-md"
          onSubmit={handleSubmit}
        >
          <input
            value={query}
            type="text"
            placeholder="Search your recipes"
            className="bg-gray-900 outline-none"
            onChange={(e) => setQuery(e.target.value)}
          />
          <CiSearch />
        </form>
      </div>
    </header>
  );
};

export default Header;

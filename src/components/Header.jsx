import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-6 px-14 flex items-center justify-center border-b-2">
      <div className="flex items-center  gap-4">
        <img src="/img/SCSlogo.png" alt="" className="w-16 object-cover" />
        <h1 className="font-extrabold text-2xl font-inter ">
          Sultan <span className="text-[#DB4444]">Chand</span> & Sons
        </h1>
      </div>
      <div className="flex items-center justify-center gap-10 ml-14">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] rounded-md ml-32">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[#F5F5F5] focus:outline-none px-4 py-2 rounded-full text-gray-600 w-full"
          />
          <button>
            <IoIosSearch className="bg-[#F5F5F5] text-3xl ml-5" />
          </button>
        </div>
        <IoIosHeartEmpty className="text-3xl" />
        <IoCartOutline className="text-3xl" />
      </div>
    </nav>
  );
};

export default Header;

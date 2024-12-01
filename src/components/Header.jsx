import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-4 px-4 sm:px-8 lg:px-14 flex flex-wrap items-center justify-between border-b-2">
      {/* Logo Section */}
      <div className="flex items-center gap-4 mb-4 sm:mb-0">
        <img
          src="/img/SCSlogo.png"
          alt=""
          className="w-12 sm:w-16 object-cover"
        />
        <h1 className="font-extrabold text-lg sm:text-2xl font-inter">
          Sultan <span className="text-[#DB4444]">Chand</span> & Sons
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/signup" className="hover:underline">
          Sign Up
        </Link>
      </div>

      {/* Search and Icons Section */}
      <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
        {/* Search Bar */}
        <div className="flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] rounded-md w-full lg:w-auto">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[#F5F5F5] focus:outline-none px-4 py-2 rounded-full text-gray-600 flex-grow"
          />
          <button>
            <IoIosSearch className="text-2xl lg:text-3xl text-gray-600 bg-[#F5F5F5]" />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <IoIosHeartEmpty className="text-2xl lg:text-3xl" />
          <IoCartOutline className="text-2xl lg:text-3xl" />
        </div>
      </div>
    </nav>
  );
};

export default Header;

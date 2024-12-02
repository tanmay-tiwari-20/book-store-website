import { FiUser } from "react-icons/fi";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // Get the current pathname
  const isHomePage = location.pathname === "/"; // Check if the current page is the home page
  const isAuthPage = location.pathname === "/auth"; // Check if the current page is the auth page

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="py-4 px-4 sm:px-8 lg:px-14 flex flex-wrap items-center justify-between border-b-2">
      {/* Logo Section or Exclusive */}
      <div className="flex items-center gap-4 mb-4 sm:mb-0">
        {isHomePage ? (
          <>
            <img
              src="/img/SCSlogo.png"
              alt=""
              className="w-12 sm:w-16 object-cover"
            />
            <h1 className="font-extrabold text-lg sm:text-2xl font-inter">
              Sultan <span className="text-[#DB4444]">Chand</span> & Sons
            </h1>
          </>
        ) : (
          <h1 className="font-bold text-lg sm:text-2xl font-inter">Exclusive</h1>
        )}
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-10">
        <Link
          to="/"
          className={`hover:underline ${
            isActive("/") ? "underline font-semibold text-[#DB4444]" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/contact"
          className={`hover:underline ${
            isActive("/contact")
              ? "underline font-semibold text-[#DB4444]"
              : ""
          }`}
        >
          Contact
        </Link>
        <Link
          to="/about"
          className={`hover:underline ${
            isActive("/about") ? "underline font-semibold text-[#DB4444]" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/auth"
          className={`hover:underline ${
            isActive("/auth") ? "underline font-semibold text-[#DB4444]" : ""
          }`}
        >
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

        {/* Icons - Hide on Auth Page */}
        {!isAuthPage && (
          <div className="flex items-center gap-4">
            <IoIosHeartEmpty className="text-2xl lg:text-3xl cursor-pointer" />
            <IoCartOutline className="text-2xl lg:text-3xl cursor-pointer" />
            {/* Conditionally render the user icon */}
            {!isHomePage && <FiUser className="text-2xl lg:text-3xl cursor-pointer" />}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

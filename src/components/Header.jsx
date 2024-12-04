import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { IoIosClose, IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoMenuOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isAuthPage = location.pathname === "/auth";
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="py-4 px-4 sm:px-8 lg:px-14 flex items-center justify-between border-b-2 relative z-20">
      {/* Logo Section */}
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={handleLogoClick}
      >
        {isHomePage ? (
          <>
            <img
              src="/img/SCSlogo.png"
              alt="Logo"
              className="w-12 sm:w-16 object-cover"
            />
            <h1 className="font-extrabold text-lg sm:text-2xl font-inter">
              Sultan <span className="text-[#DB4444]">Chand</span> & Sons
            </h1>
          </>
        ) : (
          <h1 className="font-bold text-lg sm:text-2xl font-inter">
            Exclusive
          </h1>
        )}
      </div>

      {/* Hamburger Menu Icon */}
      <button
        className="text-2xl lg:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <IoMenuOutline />
      </button>

      {/* Navlinks for Large Screens */}
      <nav className="hidden lg:flex items-center gap-8 text-lg font-medium">
        <Link
          to="/"
          className={`hover:underline ${
            isActive("/") ? "font-semibold text-[#DB4444]" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/contact"
          className={`hover:underline ${
            isActive("/contact") ? "font-semibold text-[#DB4444]" : ""
          }`}
        >
          Contact
        </Link>
        <Link
          to="/about"
          className={`hover:underline ${
            isActive("/about") ? "font-semibold text-[#DB4444]" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/auth"
          className={`hover:underline ${
            isActive("/auth") ? "font-semibold text-[#DB4444]" : ""
          }`}
        >
          Sign Up
        </Link>
      </nav>

      {/* Full-Screen Overlay Menu for Small Screens */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-20 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center`}
      >
        <button
          className="absolute top-4 right-4 text-2xl focus:outline-none"
          onClick={closeMenu}
        >
          <IoIosClose className="text-4xl" />
        </button>
        <nav className="flex flex-col items-center gap-6 text-lg">
          <Link
            to="/"
            className={`hover:underline ${
              isActive("/") ? "font-semibold text-[#DB4444]" : ""
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={`hover:underline ${
              isActive("/contact") ? "font-semibold text-[#DB4444]" : ""
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className={`hover:underline ${
              isActive("/about") ? "font-semibold text-[#DB4444]" : ""
            }`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/auth"
            className={`hover:underline ${
              isActive("/auth") ? "font-semibold text-[#DB4444]" : ""
            }`}
            onClick={closeMenu}
          >
            Sign Up
          </Link>
        </nav>
      </div>

      {/* Search and Icons Section */}
      <div className="hidden lg:flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] rounded-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[#F5F5F5] focus:outline-none px-4 py-2 rounded-full text-gray-600 flex-grow"
          />
          <button>
            <IoIosSearch className="text-2xl lg:text-3xl text-gray-600 bg-[#F5F5F5]" />
          </button>
        </div>
        {!isAuthPage && (
          <div className="flex items-center gap-4">
            <Link to="/wishlist">
              <IoIosHeartEmpty className="text-2xl lg:text-3xl" />
            </Link>
            <IoCartOutline className="text-2xl lg:text-3xl cursor-pointer" />
            {!isHomePage && (
              <FiUser className="text-2xl lg:text-3xl cursor-pointer" />
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

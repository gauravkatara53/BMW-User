import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUser,
  faSignInAlt,
  faBars,
  faTimes,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu and notify parent component to adjust page content
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onMenuToggle) {
      onMenuToggle(!isMenuOpen); // Notify parent component about menu state
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 shadow-md w-[95%] md:w-[987px] h-[70px] flex items-center justify-between px-4 rounded-xl z-50">
        {/* Left Section with Logo and Brand Name */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <img
            src="logo-creative-tim-black.png"
            alt="Logo"
            className="h-8 md:h-10"
          />
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 text-sm md:text-xl font-semibold"
          >
            Warehouse On Hire
          </Link>
        </div>

        {/* Middle Section with Navigation Links */}
        <div className="hidden md:flex space-x-4 md:space-x-6">
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-gray-900 flex items-center space-x-1 md:space-x-2"
          >
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span className="text-sm md:text-base">Dashboard</span>
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 hover:text-gray-900 flex items-center space-x-1 md:space-x-2"
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="text-sm md:text-base">Profile</span>
          </Link>
          <Link
            to="/signin"
            className="text-gray-700 hover:text-gray-900 flex items-center space-x-1 md:space-x-2"
          >
            <FontAwesomeIcon icon={faSignInAlt} />
            <span className="text-sm md:text-base">Sign In</span>
          </Link>
        </div>

        {/* Right Section with Register Button and Hamburger Icon */}
        <div className="flex items-center">
          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white p-2 px-3 rounded-md focus:outline-none"
            onClick={toggleMenu}
            style={{
              background:
                "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
            }}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
          {/* Register Button */}
          <Link to="/signup" className="hidden md:block">
            <button
              className="text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base hover:opacity-90"
              style={{
                background:
                  "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
              }}
            >
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* Slide Down Menu for Small Screens */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white z-40 transition-max-height duration-300 ease-in-out md:hidden overflow-hidden shadow-md pt-1 ${
          isMenuOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2 p-4">
          <Link
            to="/dashboard"
            className="text-gray-700 pl-2  hover:text-gray-900 flex items-center space-x-2 py-2 hover:bg-gray-100 rounded-md transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span className="text-sm ">Dashboard</span>
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 pl-2 hover:text-gray-900 flex items-center space-x-2 py-2 hover:bg-gray-100 rounded-md transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="text-sm">Profile</span>
          </Link>
          <Link
            to="/signin"
            className="text-gray-700 pl-2  hover:text-gray-900 flex items-center space-x-2 py-2 hover:bg-gray-100 rounded-md transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faSignInAlt} />
            <span className="text-sm">Sign In</span>
          </Link>
          <Link
            to="/signup"
            className="text-gray-700 pl-2 hover:text-gray-900 flex items-center space-x-2 py-2 hover:bg-gray-100 rounded-md transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faUserPlus} />
            <span className="text-sm">Register</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

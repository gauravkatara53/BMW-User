import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUser,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 shadow-md w-[95%] md:w-[987px] h-[70px] flex items-center justify-between px-4 rounded-xl">
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

      {/* Right Section with Register Button */}
      <div className="flex">
        <Link to="/signup">
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
  );
};

export default Navbar;

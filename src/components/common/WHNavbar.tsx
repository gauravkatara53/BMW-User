import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WHNavLink from "./WHNavLink";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

interface User {
  _id: string;
  username: string;
  email: string;
}

export default function WHNavbar({ dark = false }: { dark?: boolean }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const user = localStorage.getItem("user");

    if (accessToken && refreshToken && user) {
      setIsLoggedIn(true);
      setUserDetails(JSON.parse(user));
    } else {
      setIsLoggedIn(false);
      setUserDetails(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setUserDetails(null);

    navigate("/");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-8 lg:px-32 md:px-16 sm:px-8 px-4 flex justify-between items-start w-full absolute top-0 left-0 z-20">
      <Link to="/">
        <div className="flex items-center gap-3">
          <img src="logo1.png" className="h-12" alt="Logo" />
        </div>
      </Link>

      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-end w-full">
        <div className="flex gap-4">
          <WHNavLink isDark={dark} title="Home" to="/" />
          <WHNavLink isDark={dark} title="About Us" to="/about" />
          <WHNavLink isDark={dark} title="Article" to="/article" />
        </div>
        {isLoggedIn ? (
          <div className="relative ml-12">
            <FaUserCircle
              id="avatarButton"
              className="w-10 h-10 rounded-full cursor-pointer"
              color={dark ? "white" : "black"}
              onClick={toggleDropdown}
            />
            {isDropdownOpen && userDetails && (
              <div
                id="userDropdown"
                className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>{userDetails.username}</div>
                  <div className="font-medium truncate">
                    {userDetails.email}
                  </div>
                </div>
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="avatarButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="ml-12 py-3 px-6 bg-gradient-to-b from-[#674CEC] to-[#8D77FC] text-gray-100 cursor-pointer hover:border-blue-900 border text-sm xl:text-base rounded-full font-semibold"
            onClick={() => navigate("/partner")}
          >
            Download Now
          </motion.div>
        )}
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? "100vh" : 0 }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden fixed inset-0 z-50 bg-white shadow-lg overflow-hidden transform transition-all duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Cross Button at the Top-Right Corner */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl"
        >
          <FaTimes />
        </button>

        {/* Mobile Menu Links */}
        <div className="flex justify-center items-center h-full w-full">
          <div className="flex flex-col items-center justify-center h-full w-full py-6 px-4 gap-1">
            <div className="py-2 w-full flex justify-center">
              <WHNavLink
                isDark={dark}
                title="Home"
                to="/"
                className="text-center text-2xl bg-gray-100 hover:bg-gray-200"
              />
            </div>

            <div className=" w-full flex justify-center">
              <WHNavLink
                isDark={dark}
                title="About Us"
                to="/about"
                className="text-center text-2xl bg-gray-100 hover:bg-gray-200"
              />
            </div>

            <div className="py-2 w-full flex justify-center">
              <WHNavLink
                isDark={dark}
                title="Article"
                to="/article"
                className="text-center text-2xl bg-gray-100 hover:bg-gray-200"
              />
            </div>

            {isLoggedIn ? (
              <div className="relative mt-6">
                <FaUserCircle
                  id="avatarButton"
                  className="w-12 h-12 rounded-full cursor-pointer transition-transform duration-200 hover:scale-105"
                  color={dark ? "white" : "black"}
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && userDetails && (
                  <div
                    id="userDropdown"
                    className="z-20 absolute right-0 mt-2 bg-white divide-y divide-gray-200 rounded-lg shadow-lg w-56 dark:bg-gray-800 dark:divide-gray-600 transition-opacity duration-300 ease-in-out"
                  >
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      <div>{userDetails.username}</div>
                      <div className="font-medium truncate">
                        {userDetails.email}
                      </div>
                    </div>
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-300"
                      aria-labelledby="avatarButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-200"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-200"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-200"
                        >
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="mt-2 py-4 px-8 bg-gradient-to-b from-[#674CEC] to-[#8D77FC] text-gray-100 cursor-pointer hover:border-blue-900 border text-xl rounded-full font-semibold"
                onClick={() => navigate("/partner")}
              >
                Download Now
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

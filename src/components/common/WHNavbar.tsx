import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WHNavLink from "./WHNavLink";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

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

  return (
    <div className="py-8 lg:px-32 md:px-16 sm:px-8 px-4 flex justify-between w-full absolute top-0 left-0 z-20">
      <Link to="/">
        <div className="flex items-center gap-3">
          <img src="logo1.png" className="h-12" alt="Logo" />
        </div>
      </Link>
      <div className="flex xl:gap-16 gap-4 items-center">
        <div className="lg:flex hidden gap-4 items-center">
          <WHNavLink isDark={dark} title="About Us" to="/about" />
          <WHNavLink isDark={dark} title="Article" to="/article" />
          <WHNavLink isDark={dark} title="Property" to="/PropertyPage" />
        </div>
        {isLoggedIn ? (
          <div className="relative">
            <FaUserCircle
              id="avatarButton"
              className="w-10 h-10 rounded-full cursor-pointer"
              color={dark ? "white" : "white"}
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
            className="py-3 px-6 text-WH-dark-green cursor-pointer hover:border-WH-light-green-01 border border-WH-light-green bg-WH-light-green text-sm xl:text-base rounded-full font-semibold"
            onClick={() => navigate("/Signin")}
          >
            Sign Up!
          </motion.div>
        )}
      </div>
    </div>
  );
}

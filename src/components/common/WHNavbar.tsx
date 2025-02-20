import { useState } from "react";
import { motion } from "framer-motion";
import WHNavLink from "./WHNavLink";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { useAuth } from "./AuthContext";
export default function WHNavbar({ dark = false }: { dark?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [
    { title: "Home", to: "/" },
    ...(isAuthenticated
      ? [
          { title: "Rental", to: "/rental-Orders" },
          { title: "Owned", to: "/buy-Orders" },
        ]
      : [
          { title: "About Us", to: "/about" },
          { title: "Article", to: "/article" },
        ]),
  ];

  return (
    <div className="py-8 lg:px-32 md:px-16 sm:px-8 px-4 flex justify-between items-start w-full absolute top-0 left-0 z-20">
      <Link to="/">
        <div className="flex items-center gap-3">
          <img src="/logo1.png" className="h-12" alt="Logo" />
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

          {isAuthenticated ? (
            <>
              <WHNavLink isDark={dark} title="Rental" to="/rental-Orders" />
              <WHNavLink isDark={dark} title="Owned" to="/buy-Orders" />
              <WHNavLink isDark={dark} title="Chat" to="/chat" />
            </>
          ) : (
            <>
              <WHNavLink isDark={dark} title="About Us" to="/about" />
              <WHNavLink isDark={dark} title="Article" to="/article" />
            </>
          )}
        </div>

        {isAuthenticated ? (
          <Link to={"/profile"}>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="ml-12 py-3 px-6 bg-gradient-to-b from-[#674CEC] to-[#8D77FC] text-gray-100 cursor-pointer hover:border-blue-900 border text-sm xl:text-base rounded-full font-semibold"
            >
              Profile
            </motion.div>
          </Link>
        ) : (
          <Link to={"/signin"}>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="ml-12 py-3 px-6 bg-gradient-to-b from-[#674CEC] to-[#8D77FC] text-gray-100 cursor-pointer hover:border-blue-900 border text-sm xl:text-base rounded-full font-semibold"
            >
              Sign In
            </motion.div>
          </Link>
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
        <div className="flex justify-center items-center h-full w-full -mt-12">
          <div className="flex flex-col items-center justify-center h-full w-full py-6 px-4 gap-1">
            {navLinks.map((link, index) => (
              <div key={index} className="py-2 w-full flex justify-center">
                <WHNavLink
                  isDark={dark}
                  title={link.title}
                  to={link.to}
                  className="text-center text-2xl bg-gray-100 hover:bg-gray-200"
                />
              </div>
            ))}
            {isAuthenticated ? (
              <Link to="/profile">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="mt-2 py-4 px-8 bg-gradient-to-b from-[#674CEC] to-[#8D77FC] text-gray-100 cursor-pointer hover:border-blue-900 border text-xl rounded-full font-semibold"
                >
                  Profile
                </motion.div>
              </Link>
            ) : (
              <Link to={"/siginin"}>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="mt-2 py-4 px-8 bg-gradient-to-b from-[#674CEC] to-[#8D77FC] text-gray-100 cursor-pointer hover:border-blue-900 border text-xl rounded-full font-semibold"
                >
                  Sign Up
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

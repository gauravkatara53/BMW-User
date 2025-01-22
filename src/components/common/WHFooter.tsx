import { useState } from "react";
import {
  FaInstagram,
  FaChevronUp,
  FaChevronDown,
  FaLinkedinIn,
} from "react-icons/fa";

import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export default function WHFooter() {
  const [isPropertyOpen, setPropertyOpen] = useState(false);
  const [isArticleOpen, setArticleOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [isConditionOpen, setConditionOpen] = useState(false);

  const propertyLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/article", label: "Articles" },
    { href: "/partner", label: "Partner with us" },
  ];

  const articleLinks = [
    { href: "/article", label: "New Article" },
    { href: "/article-page1", label: "Popular Article" },
    { href: "/article-page1", label: "Most Read" },
    { href: "/article", label: "Tips & Tricks" },
  ];

  const contactLinks = [
    {
      href: "https://maps.app.goo.gl/9g652m5HPCQC3zew5",
      label:
        "Flat No 9e Block-1 Sucasa,\nSouth 24 Parganas, South 24 Parganas,\nWest Bengal, India, 700103.",
    },
    // {
    //   href: "tel:+911234567890",
    //   label: "+91 1234567890",
    // },
    {
      href: "mailto:care@bookmywarehouse.co",
      label: "care@bookmywarehouse.co",
    },
  ];

  return (
    <footer className="relative text-gray-800 px-4 pb-4 pt-4 md:px-32 md:pb-16 md:pt-8 overflow-hidden">
      <div
        className="hidden md:block absolute top-0 right-0 w-32 h-32 md:w-[30rem] md:h-[30rem] bg-no-repeat bg-contain"
        style={{ backgroundImage: "url(Vector-footer.png)" }}
      ></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between relative z-10">
        {/* Left Section: Book MT Warehouse */}
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-[-40px] md:w-1/2">
          <div className="flex flex-col items-center sm:items-start mb-6">
            <img
              src="logo1.png"
              alt="Company Logo"
              className="h-12 md:h-16 mb-2"
            />
            <p className="text-center md:text-left text-[#8a8ca5] text-sm md:text-base leading-relaxed mt-4">
              We provide information about properties such <br /> as houses,
              villas and apartments to help people <br /> find their dream home.
            </p>
          </div>
          <div className="flex space-x-4 md:space-x-8 mt-4 md:mt-0 justify-center md:justify-start">
            <a
              href="https:www.linkedin.com/company/bookmywarehouse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-lg md:text-2xl text-gray-800 hover:text-blue-600 transition-colors duration-200" />
            </a>
            <a
              href="https://www.threads.net/@bookmywarehouse_?xmt=AQGzoSbtSGpvRo5Rhi3ZLPWWIY_7ievKmer0y4hzj8a22FU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faThreads as IconProp}
                className="text-lg md:text-2xl text-gray-800 hover:text-blue-400 transition-colors duration-200"
              />
            </a>
            <a
              href="https://www.instagram.com/bookmywarehouse_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-lg md:text-2xl text-gray-800 hover:text-pink-500 transition-colors duration-200" />
            </a>
          </div>
        </div>

        {/* Right Section: Property, Article, Contact */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 md:w-1/2">
          <div className="text-center md:text-left">
            <h3 className="text-md md:text-lg font-semibold mb-4">Property</h3>
            <ul className="space-y-2 text-[#8a8ca5] text-sm md:text-base">
              {propertyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              <a href={"/termsandconditions"}>
                <li className="text-md mt-4 sm:mt-2 text-[#8a8ca5] md:text-md  hover:underline">
                  Terms and Conditions
                </li>
              </a>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-md md:text-lg font-semibold mb-4">Article</h3>
            <ul className="space-y-2 text-[#8a8ca5] text-sm md:text-base">
              {articleLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              <a href="/privacy-policy">
                <li className="text-md mt-4 sm:mt-2 text-[#8a8ca5] md:text-md  mb-2 hover:underline">
                  Privacy policy
                </li>
              </a>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-md md:text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-[#8a8ca5] text-sm md:text-base">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`hover:underline break-words ${
                      link.label.includes("@") ? "whitespace-nowrap" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dropdown Menu for Smaller Screens */}
        <div className="md:hidden flex flex-col w-full">
          <div className="space-y-4 w-full">
            <div className="flex flex-col w-full">
              <button
                className="flex justify-between items-center text-base font-semibold text-gray-600 w-full text-left px-4 py-2 rounded-lg"
                onClick={() => setPropertyOpen(!isPropertyOpen)}
              >
                Property
                <span className="ml-2">
                  {isPropertyOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {isPropertyOpen && (
                <ul className="space-y-2 text-[#8a8ca5] mt-2 text-sm ml-4 text-left">
                  {propertyLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-col w-full">
              <button
                className="flex justify-between items-center text-base font-semibold text-gray-600 w-full text-left px-4 py-2 rounded-lg"
                onClick={() => setArticleOpen(!isArticleOpen)}
              >
                Article
                <span className="ml-2">
                  {isArticleOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {isArticleOpen && (
                <ul className="space-y-2 text-[#8a8ca5] mt-2 ml-4 text-sm text-left">
                  {articleLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-col w-full">
              <button
                className="flex justify-between items-center text-base font-semibold text-gray-600 w-full text-left px-4 py-2 rounded-lg"
                onClick={() => setContactOpen(!isContactOpen)}
              >
                Contact
                <span className="ml-2">
                  {isContactOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {isContactOpen && (
                <ul className="space-y-2 text-[#8a8ca5] mt-2 text-sm text-left ml-4">
                  {contactLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex flex-col w-full">
              <button
                className="flex justify-between items-center text-base font-semibold text-gray-600 w-full text-left px-4 py-2 rounded-lg"
                onClick={() => setConditionOpen(!isConditionOpen)}
              >
                Condition
                <span className="ml-2">
                  {isPropertyOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {isConditionOpen && (
                <ul className="space-y-2 text-[#8a8ca5] mt-2 text-sm ml-4 text-left">
                  <a href={"/termsandconditions"}>
                    <li className="text-md mt-2 text-[#8a8ca5] md:text-md  hover:underline">
                      Terms and Conditions
                    </li>
                  </a>
                  <a href="/privacy-policy">
                    <li className="text-md mt-2 text-[#8a8ca5] md:text-md mb-2 hover:underline">
                      Privacy policy
                    </li>
                  </a>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function WHFooter() {
  const propertyLinks = [
    { href: "#house", label: "House" },
    { href: "#apartment", label: "Apartment" },
    { href: "#villa", label: "Villa" },
  ];

  const articleLinks = [
    { href: "#new-article", label: "New Article" },
    { href: "#popular-article", label: "Popular Article" },
    { href: "#most-read", label: "Most Read" },
    { href: "#tips-tricks", label: "Tips & Tricks" },
  ];

  const contactLinks = [
    { href: "#new-delhi", label: "New Delhi" },
    { href: "#mobile-number", label: "+91 1234567890" },
    { href: "#mail-id", label: "info@warehouseonhire.com" },
  ];

  const propertyLinks = [
    { href: "#house", label: "House" },
    { href: "#apartment", label: "Apartment" },
    { href: "#villa", label: "Villa" },
  ];

  const articleLinks = [
    { href: "#new-article", label: "New Article" },
    { href: "#popular-article", label: "Popular Article" },
    { href: "#most-read", label: "Most Read" },
    { href: "#tips-tricks", label: "Tips & Tricks" },
  ];

  const contactLinks = [
    { href: "#new-delhi", label: "New Delhi" },
    { href: "#mobile-number", label: "+91 1234567890" },
    { href: "#mail-id", label: "info@warehouseonhire.com" },
  ];

  return (
    <footer className="relative text-gray-800 p-6 md:p-20">
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-no-repeat bg-contain" style={{ backgroundImage: 'url(green-blur-blob.png)' }}></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between relative z-10">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start mt-4 md:mt-[-40px]">
          <div className="flex flex-col items-center md:items-start mb-6">
            <img src="logo.png" alt="Company Logo" className="w-56 h-52 md:w-56 md:h-52 mx-[-50px] mb-2" />
            <p className="text-center md:text-left text-[#8a8ca5] text-base md:text-lg leading-relaxed mt-4 md:mt-[-60px]">
              We provide information about properties such <br /> as houses, villas and apartments to help people <br /> find their dream home.
            </p>
          </div>
          <div className="flex space-x-4 md:space-x-8 mt-4 md:mt-0 justify-center md:justify-start">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl md:text-2xl text-gray-800 hover:text-blue-600 transition-colors duration-200" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl md:text-2xl text-gray-800 hover:text-blue-400 transition-colors duration-200" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl md:text-2xl text-gray-800 hover:text-pink-500 transition-colors duration-200" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Property</h3>
            <ul className="space-y-2 text-[#8a8ca5]">
              {propertyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline text-base md:text-lg">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Article</h3>
            <ul className="space-y-2 text-[#8a8ca5]">
              {articleLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline text-base md:text-lg">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-[#8a8ca5]">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline text-base md:text-lg">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

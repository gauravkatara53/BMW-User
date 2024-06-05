import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function WHFooter() {
  return (
    <footer className="relative text-gray-800 p-20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-no-repeat bg-contain" style={{ backgroundImage: 'url(green-blur-blob.png)' }}></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between relative z-10">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:items-start mb-4">
          <div className="flex items-center space-x-4">
            <img src="logo.svg" alt="Company Logo" className="w-12 h-12" />
            <h2 className="text-2xl font-bold">Warehouse On Hire</h2>
          </div>
            <br />
            <p className="text-center text-[#8a8ca5] md:text-left text-lg leading-relaxed">
              We provide information about properties such <br /> as houses, villas and apartments to help people <br /> find their dream home.
            </p>
          </div>
          <div className="flex space-x-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-gray-800 hover:text-blue-600 transition-colors duration-200" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-gray-800 hover:text-blue-400 transition-colors duration-200" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-800 hover:text-pink-500 transition-colors duration-200" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div>
            <h3 className="text-xl font-semibold mb-4">Property</h3>
            <ul className="space-y-2 text-[#8a8ca5]">
              <li><a href="#house" className="hover:underline text-lg">House</a></li>
              <li><a href="#apartment" className="hover:underline text-lg">Apartment</a></li>
              <li><a href="#villa" className="hover:underline text-lg">Villa</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Article</h3>
            <ul className="space-y-2 text-[#8a8ca5]">
              <li><a href="#new-article" className="hover:underline text-lg">New Article</a></li>
              <li><a href="#popular-article" className="hover:underline text-lg">Popular Article</a></li>
              <li><a href="#most-read" className="hover:underline text-lg">Most Read</a></li>
              <li><a href="#tips-tricks" className="hover:underline text-lg">Tips & Tricks</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-[#8a8ca5]">
              <li><a href="#new-delhi" className="hover:underline text-lg">New Delhi</a></li>
              <li><a href="#mobile-number" className="hover:underline text-lg">+91 1234567890</a></li>
              <li><a href="#mail-id" className="hover:underline text-lg">info@warehouseonhire.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

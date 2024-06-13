import { useState } from "react";
import image1 from '../../../public/image1.jpg';
import image2 from '../../../public/image2.jpg';
import image3 from '../../../public/image3.jpg';
import Vector from '../../../public/Vector.png';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Navbar = ({ setSearchQuery }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userName = "John Doe";

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="bg-white p-4 md:p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center border-2 border-gray-300 rounded-md w-full md:w-[50%] overflow-hidden mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 outline-none"
            onChange={handleSearch}
          />
          <button type="submit" className="bg-blue-600 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M16.11 9.39A6.72 6.72 0 1111.38 4.67a6.72 6.72 0 014.73 4.72z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-4 md:space-x-8">
          <span className="text-gray-400 text-sm md:text-base hidden md:inline">
            <i className="text-black fa fa-phone" aria-hidden="true"></i> +1 (234) 567890
          </span>
          <div className="relative">
            <button
              className="flex items-center bg-white text-gray-800 p-2 rounded"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 18.364A7.966 7.966 0 0112 20a7.966 7.966 0 016.879-1.636M15 10a3 3 0 00-6 0m12 0a9 9 0 11-18 0 9 9 0118 0z"
                />
              </svg>
              <span className="hidden md:inline">{userName}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Account
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};


const WarehouseCard = ({ image, title, details, rating }) => (
  <div className="flex flex-col md:flex-row rounded-lg overflow-hidden mb-4 w-full h-auto md:h-[215px] shadow-lg">
    <div className="p-2 flex-shrink-0">
      <img
        src={image}
        alt={title}
        className="w-full md:w-[263px] h-[195px] object-cover rounded-[20px]"
      />
    </div>
    <div className="p-8 flex-grow">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex items-center mt-3 text-yellow-400">
        <i className="fas fa-star"></i>
        <span className="ml-2 text-gray-400">{rating}</span>
        <span className="ml-8 text-gray-400">Mercedes Vito</span>
      </div>
      <div className="mt-3">
        <span className="text-gray-500">{details}</span>
      </div>
    </div>
  </div>
);


const PropertyPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // List of warehouses
  const warehouses = [
    { image: image1, title: "Fully Furnished Smart Security Warehouse", details: "Entire Studio Apartment", rating: "4.8" },
    { image: image2, title: "Security Warehouse", details: "Entire Home", rating: "3.8" },
    { image: image3, title: "Classic Warehouse", details: "Share with Super Host", rating: "4.0" }
  ];

  // Filtered list of warehouses based on search query
  const filteredWarehouses = warehouses.filter(warehouse =>
    warehouse.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-8">
      <Navbar setSearchQuery={setSearchQuery} />
      <div className="container mx-auto mt-8 px-4 md:px-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <span className="font-roboto">430 + Stays</span>
          <h1 className="text-3xl font-bold mb-4">Warehouses in Noida</h1>
          <div className="flex flex-wrap space-x-2 md:space-x-5 mb-4 items-center">
            <button className="px-4 md:px-8 py-2 bg-white border-2 border-gray-300 rounded-full mb-2">
              Free cancellation
            </button>
            <button className="px-4 md:px-8 py-2 bg-white border-2 border-gray-300 rounded-full mb-2">
              Price
            </button>
            <button className="px-4 md:px-8 py-2 bg-white border-2 border-gray-300 rounded-full mb-2">
              Instant Book
            </button>
            <div className="ml-auto">
              <img 
                src={Vector}
                alt="Vector"
                className="w-6 h-6 ml-16  "
              />
            </div>
          </div>
          <div>
            {filteredWarehouses.map((warehouse, index) => (
              <WarehouseCard
                key={index}
                image={warehouse.image}
                title={warehouse.title}
                details={warehouse.details}
                rating={warehouse.rating}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/5 md:pl-4">
          <div className="h-[400px] md:h-full bg-gray-200 rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196804852273!2d144.96430331592277!3d-37.81421727975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b0b34b7a16ba!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1649531195318!5m2!1sen!2sau"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;




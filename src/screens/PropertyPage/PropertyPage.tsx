import { useState } from "react";
import image1 from '../../../public/image1.jpg';
import image2 from '../../../public/image2.jpg';
import image3 from '../../../public/image3.jpg';
import Vector from '../../../public/Vector.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface NavbarProps {
  setSearchQuery: (query: string) => void;
}

interface WarehouseCardProps {
  image: string;
  title: string;
  address: string;
  rating: string;
  onClick: () => void;
  isSelected: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ setSearchQuery }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userName = "John Doe";

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-50">
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

const WarehouseCard: React.FC<WarehouseCardProps> = ({ image, title, address, rating, onClick, isSelected }) => (
  <div
  className={`flex flex-col md:flex-row rounded-lg overflow-hidden mb-4 w-full h-auto md:h-[215px] shadow-lg cursor-pointer ${isSelected ? 'border-2 border-blue-600' : 'border-2 border-white'}`}
  onClick={onClick}
  >
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
        <span className="text-gray-500">{address}</span>
      </div>
    </div>
  </div>
);

const PropertyPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedWarehouseIndex, setSelectedWarehouseIndex] = useState<number | null>(null);

  const warehouses: WarehouseCardProps[] = [
    { image: image1, title: "Fully Furnished Smart Security Warehouse", address: "Entire Studio Apartment", rating: "4.8", onClick: () => setSelectedLocation("1.3521,103.8198"), isSelected: selectedWarehouseIndex === 0 },
    { image: image2, title: "Security Warehouse", address: "Entire Home", rating: "3.8", onClick: () => setSelectedLocation("1.290270,103.851959"), isSelected: selectedWarehouseIndex === 1  },
    { image: image3, title: "Classic Warehouse", address: "Share with Super Host", rating: "4.0", onClick: () => setSelectedLocation("1.2800945,103.8509491"), isSelected: selectedWarehouseIndex === 2 }
  ];

  const filteredWarehouses = warehouses.filter(warehouse =>
    warehouse.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWarehouseCardClick = (index: number) => {
    setSelectedWarehouseIndex(index);
    warehouses[index].onClick(); 
  };

  return (
    <div className="pb-8">
      <Navbar setSearchQuery={setSearchQuery} />
      <div className="container mx-auto mt-8 px-4 md:px-8 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 overflow-y-auto custom-scrollbar" style={{ height: 'calc(100vh - 200px)' }}>
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
                className="w-6 h-6 ml-14"
              />
            </div>
          </div>
          <div>
            {filteredWarehouses.map((warehouse, index) => (
              <WarehouseCard
                key={index}
                image={warehouse.image}
                title={warehouse.title}
                address={warehouse.address}
                rating={warehouse.rating}
                onClick={() => handleWarehouseCardClick(index)}
                isSelected={warehouse.isSelected}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/5 md:pl-4">
          <div className="h-[400px] md:h-full bg-gray-200 rounded sticky top-8">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12573.995343291042!2d${selectedLocation.split(",")[1]}!3d${selectedLocation.split(",")[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1649531195318!5m2!1sen!2sau&q=${selectedLocation}`}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            ></iframe>
            {selectedLocation && (
              <div className="marker" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 100 }}>
                <i className="fas fa-map-marker-alt text-red-500 text-4xl"></i>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default PropertyPage;

import {
  faComment,
  faHouse,
  faMapMarkerAlt,
  faPhone,
  faRulerCombined,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface HeroProps {
  warehouseData: any; // Define a more specific type if needed
}

export const Hero = ({ warehouseData }: HeroProps) => {
  interface Room {
    units: number;
  }

  // interface WarehouseData {
  //   name: string;
  //   address: string;
  //   city: string;
  //   pincode: string;
  //   rooms: Room[];
  //   areaSqFt: number;
  // }

  // interface HeroProps {
  //   warehouseData: WarehouseData;
  // }

  const totalUnits = warehouseData.rooms.reduce(
    (sum: number, room: Room) => sum + room.units,
    0
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? warehouseData.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === warehouseData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // for call partner
  function handleCallClick(): void {
    window.location.href = `tel:${warehouseData.partnerName.phone}`;
  }
  // for mail partner
  function handleEmailClick(): void {
    window.location.href = `mailto:${warehouseData.partnerName.email}`;
  }
  return (
    <div className="flex flex-col md:flex-row w-full h-[400px] rounded-lg overflow-hidden mb-8">
      {/* Left Half - Image */}
      <div className="w-full md:w-1/2 h-full relative">
        <img
          src={warehouseData.images[currentIndex]}
          alt="Warehouse"
          className="object-cover w-full h-full rounded-lg"
        />
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>

      {/* Right Half - Content */}
      <div className="-mt-18 w-full md:w-1/2 flex flex-col justify-center p-6 text-black">
        <h1 className="text-2xl font-semibold mb-4">{warehouseData.name}</h1>

        {/* Property Details - Two in One Row */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-6 mb-6">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <span className="text-gray-700">4.8 (73 reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400" />
            <span className="text-gray-700 ">
              {warehouseData.address}, {warehouseData.city},{" "}
              {warehouseData.pincode}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} className="text-gray-400" />
            <span className="text-gray-700">{totalUnits} rooms</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faRulerCombined} className="text-gray-400" />
            <span className="text-gray-700">{warehouseData.areaSqFt} m²</span>
          </div>
        </div>

        {/* Owner and Action Buttons */}
        <div className="mt-36 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={warehouseData.partnerName.avatar}
              alt="Owner"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-normal">
                {warehouseData.partnerName.name}
              </p>
              <p className="text-gray-600 text-sm">Property owner</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div
              className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer"
              onClick={handleEmailClick}
            >
              <FontAwesomeIcon icon={faComment} className="text-gray-700" />
            </div>
            <div
              className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer"
              onClick={handleCallClick}
            >
              <FontAwesomeIcon icon={faPhone} className="text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

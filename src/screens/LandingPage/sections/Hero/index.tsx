import WHNavbar from "@/components/common/WHNavbar";
import { useState } from "react";
import { apiService } from "@/components/APIService/ApiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
interface Warehouse {
  _id: string;
  name: string;
  about: string;
  price: { amount: number }[];
  subTotalPrice: number;
  location: { address: string };
  city: string;
  images: string[];
  areaSqFt: number;
  address: string;
  state: string;
  totalPrice: number;
  monthlyAmount: number;
}

export default function Hero() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Rent");
  const [location, setLocation] = useState("");
  const [month, setMonth] = useState(0);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Function to fetch warehouse data
  interface WarehouseResponse {
    data: {
      warehouses: Warehouse[];
    };
  }

  const fetchWarehouses = () => {
    if (!location?.trim() || (activeTab === "Rent" && month <= 0)) {
      setWarehouses([]);
      setShowResults(false);
      return;
    }

    setLoading(true);
    const rentOrSell = activeTab === "Rent" ? "Rent" : "Sell";

    // Construct the API URL with query parameters directly
    const apiUrl = `/user/home/warehouse?rentOrSell=${rentOrSell}&WarehouseStatus=Available&search=${encodeURIComponent(
      location.trim()
    )}`;

    apiService
      .get<WarehouseResponse>(apiUrl) // Explicitly define the expected response type
      .then((response) => {
        const warehouses =
          response?.data?.warehouses && Array.isArray(response.data.warehouses)
            ? response.data.warehouses
            : [];

        setWarehouses(warehouses);
        setShowResults(warehouses.length > 0);
      })
      .catch((error) => {
        console.error("Error fetching warehouses:", error);
      })
      .finally(() => setLoading(false));
  };

  const handleWarehouseClick = (warehouseId: string) => {
    if (warehouseId) {
      navigate(`/warehouse-profile/${warehouseId}`);
    } else {
      alert("Partner document ID is missing.");
    }
  };

  return (
    <div className="relative -mb-36 lg:pl-32 md:pr-32 lg:pr-0 md:px-16 sm:px-8 px-4">
      <WHNavbar dark />
      <div
        className="absolute top-0 -mt-72 left-0 -z-20 w-full h-screen"
        style={{
          backgroundImage: "url('/Rectangle%203465097.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Centered Content Section */}
      <div className="h-screen flex flex-col items-center justify-center text-center sm:px-4 -mx-2">
        {/* Buy/Rent Slider */}
        <div className="bg-white p-4 sm:p-8 rounded-2xl border w-full max-w-[450px]">
          <div className="bg-white border backdrop-blur-sm rounded-full p-1.5 mb-8 shadow-lg w-full">
            <div className="relative w-full">
              <div className="flex gap-0.5 bg-white/10 rounded-full p-1.5 relative w-full">
                {/* Animated sliding background */}
                <div
                  className={`absolute h-[44px] sm:h-[54px] w-[calc(50%-8px)] bg-gradient-to-br from-[#907afc] to-[#6246ea] rounded-full transition-all duration-300 ${
                    activeTab === "Rent" ? "left-[4px]" : "left-[calc(50%+4px)]"
                  }`}
                ></div>

                <button
                  onClick={() => setActiveTab("Rent")}
                  className="relative h-[44px] sm:h-[54px] w-1/2 rounded-full z-10"
                >
                  <span
                    className={`text-sm sm:text-[16px] font-medium transition-colors duration-300 ${
                      activeTab === "Rent" ? "text-white" : "text-[#7d7f88]"
                    }`}
                  >
                    I need to rent
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("Sell")}
                  className="relative h-[44px] sm:h-[54px] w-1/2 rounded-full z-10"
                >
                  <span
                    className={`text-sm sm:text-[16px] transition-colors duration-300 ${
                      activeTab === "Sell"
                        ? "text-white font-medium"
                        : "text-[#7d7f88] font-normal"
                    }`}
                  >
                    I need to buy
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Form Section */}
          <div className="bg-white backdrop-blur-sm rounded-2xl p-0 w-full">
            {/* Location Section */}
            <div className="text-left mb-6">
              <label className="text-[#1a1e25] text-sm sm:text-base font-medium mb-2 block">
                Enter location
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search location..."
                  className="w-full h-[44px] sm:h-[54px] pl-10 sm:pl-12 pr-6 bg-white rounded-[81px] border border-[#e3e2e6] focus:outline-none focus:ring-2 focus:ring-[#907afc] text-sm sm:text-base"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <svg
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#7d7f88]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Duration Section */}
            {activeTab === "Rent" && (
              <div className="text-left mb-8">
                <label className="text-[#1a1e25] text-sm sm:text-base font-medium mb-2 block">
                  How long you want to stay
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="number"
                      min="1"
                      max="12"
                      className="w-full h-[44px] sm:h-[54px] pl-6 pr-12 sm:pr-14 bg-white rounded-[81px] border border-[#e3e3e7] focus:outline-none focus:ring-2 focus:ring-[#907afc] appearance-none text-sm sm:text-base"
                      placeholder="Enter number "
                      inputMode="numeric"
                      onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        if (parseInt(input.value) > 12) {
                          input.value = "12";
                        }
                        if (input.value.length > 2) {
                          input.value = input.value.slice(0, 2);
                        }
                      }}
                      style={{
                        MozAppearance: "textfield", // Firefox
                        WebkitAppearance: "none", // Safari and Chrome
                        appearance: "none", // General case
                      }}
                      required
                      onChange={(e) => setMonth(Number(e.target.value))}
                    />
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#1a1e25] text-sm font-normal">
                      Month(s)
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Show Results Button */}
            <button
              className="w-full h-[44px] sm:h-[54px] bg-gradient-to-br from-[#907afc] to-[#6246ea] rounded-[61px] text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
              onClick={fetchWarehouses} // Fetch data on button click
            >
              {loading ? (
                <div className=" text-lg text-white font-medium flex justify-center items-center">
                  <ClipLoader
                    color="#ffffff"
                    size={40}
                    className="text-white p-2"
                  />
                </div>
              ) : (
                <h1> Show Results</h1>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Displaying the fetched results */}
      {loading ? (
        <div className="-mt-56 mb-28 text-lg font-medium flex justify-center items-center"></div>
      ) : (
        <>
          {showResults && warehouses.length > 0 ? (
            <div className="mx-auto -mt-20 mb-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {warehouses.map((warehouse) => (
                  <div
                    key={warehouse._id}
                    onClick={() => handleWarehouseClick(warehouse._id)}
                    className="cursor-pointer flex overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Left Image */}
                    <img
                      src={
                        warehouse.images[0] ||
                        "https://static.vecteezy.com/system/resources/previews/005/647/972/non_2x/isometric-illustration-concept-goods-delivery-warehouse-application-map-free-vector.jpg"
                      }
                      alt={warehouse.name}
                      className="w-40 h-full object-cover rounded-l-2xl"
                    />

                    {/* Right Content */}
                    <div className="p-4 flex flex-col justify-between flex-1">
                      {/* Top - Name, Address */}
                      <div>
                        <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium">
                          <FontAwesomeIcon icon={faStar} />
                          <span className="text-gray-800 font-medium">4.8</span>
                          <span className="text-gray-500 text-sm">(73)</span>
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-1">
                          {warehouse.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 leading-tight line-clamp-2">
                          {warehouse.address}, {warehouse.city},{" "}
                          {warehouse.state}
                        </p>
                      </div>

                      {/* Middle - Area */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                        <FontAwesomeIcon
                          icon={faMap}
                          className="text-gray-400 w-4 h-4"
                        />
                        <span>
                          {warehouse.areaSqFt} m<sup>2</sup>
                        </span>
                      </div>

                      {/* Bottom - Price */}

                      <div className="mt-3 text-base font-bold text-black">
                        ₹
                        {activeTab === "Rent"
                          ? warehouse.monthlyAmount
                          : warehouse.totalPrice}
                        {activeTab === "Rent" && (
                          <span className="text-sm font-normal text-gray-500">
                            {" "}
                            / month
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            showResults &&
            location && (
              <div className="-mt-36 mb-32 text-lg font-medium text-center text-gray-500">
                No results found for "{location}"
              </div>
            )
          )}
        </>
      )}
    </div>
  );
}

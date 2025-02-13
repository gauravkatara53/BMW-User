import WHNavbar from "@/components/common/WHNavbar";
import { useState } from "react";
import { apiService } from "@/components/APIService/ApiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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
}

export default function Hero() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Rent");
  const [location, setLocation] = useState("");
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
    if (!location?.trim()) {
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
      <div className="h-screen flex flex-col items-center justify-center text-center px-4">
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
              Show Results
            </button>
          </div>
        </div>
      </div>

      {/* Displaying the fetched results */}
      {loading ? (
        <div className="-mt-36 mb-10 text-lg font-medium">Loading...</div>
      ) : (
        <>
          {showResults && warehouses.length > 0 ? (
            <div className="-mt-36 mb-10 sm:ml-12  w-full max-w-6xl ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-20">
                {warehouses.map((warehouse) => (
                  <div
                    key={warehouse._id}
                    onClick={() => handleWarehouseClick(warehouse._id)}
                    className=" w-[353px] h-[200px] relative bg-white rounded-[10px] shadow-[0px_24px_96px_0px_rgba(67,67,67,0.15)]"
                  >
                    <img
                      className="w-[168px] h-[200px] left-0 top-0 absolute rounded-tl-[10px] rounded-bl-[10px]"
                      src={
                        warehouse.images[0] ||
                        "https://static.vecteezy.com/system/resources/previews/005/647/972/non_2x/isometric-illustration-concept-goods-delivery-warehouse-application-map-free-vector.jpg"
                      }
                      alt={warehouse.name}
                    />
                    <div className="h-[134px] left-[180px]  top-[8px] absolute flex-col justify-start items-start gap-[18px] inline-flex">
                      <div className="flex-col justify-start items-start gap-3 flex">
                        <div className="flex-col justify-start items-start gap-2 flex">
                          <div className="h-4 pt-px pb-0.5 justify-end items-start gap-1.5 inline-flex">
                            <div className="w-3 h-3 relative">
                              <FontAwesomeIcon
                                icon={faStar}
                                className="text-yellow-500"
                              />
                            </div>
                            <div>
                              <span className="text-[#1a1e25] text-xs font-normal leading-3">
                                4.8
                              </span>
                              <span className="text-black text-xs font-normal leading-3">
                                {" "}
                              </span>
                              <span className="text-[#7d7f88] text-xs font-normal leading-3">
                                (73)
                              </span>
                            </div>
                          </div>
                          <div className="flex-col justify-start items-start gap-1 flex">
                            <div className="w-[206px] text-[#1a1e25] text-base font-normal leading-tight">
                              {warehouse.name}
                            </div>
                            <div className="text-[#7d7f88] text-[13px] font-normal leading-[16.90px] tracking-tight">
                              {warehouse.address}, <br />
                              {warehouse.city},{warehouse.state}
                            </div>
                          </div>
                        </div>
                        <div className="justify-start items-start gap-3 inline-flex">
                          <div className="justify-start items-center gap-1.5 flex">
                            <div className="w-3.5 h-3.5 relative">
                              <FontAwesomeIcon
                                icon={faMap}
                                className="text-gray-500"
                              />
                            </div>
                            <div>
                              <span className="text-[#7d7f88] text-[13px] font-normal leading-[16.90px] tracking-tight">
                                {warehouse.areaSqFt} m
                              </span>
                              <sup className="text-[#7d7f88] text-[13px] font-normal leading-[16.90px] tracking-tight">
                                2
                              </sup>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-black text-base font-semibold leading-tight tracking-tight">
                          ₹{warehouse.price[0].amount}
                        </span>
                        <span className="text-black text-xs font-normal leading-none tracking-tight">
                          {" "}
                        </span>
                        <span className="text-[#7d7f88] text-xs font-normal leading-none tracking-tight">
                          {activeTab === "Rent" && "/ month"}
                        </span>
                      </div>
                    </div>
                    <div className="w-[18px] h-[18px] left-[311px] top-[131px] absolute">
                      <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
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

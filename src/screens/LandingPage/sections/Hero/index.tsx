import WHNavbar from "@/components/common/WHNavbar";
import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("rent");

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
                    activeTab === "rent" ? "left-[4px]" : "left-[calc(50%+4px)]"
                  }`}
                ></div>

                <button
                  onClick={() => setActiveTab("rent")}
                  className="relative h-[44px] sm:h-[54px] w-1/2 rounded-full z-10"
                >
                  <span
                    className={`text-sm sm:text-[16px] font-medium transition-colors duration-300 ${
                      activeTab === "rent" ? "text-white" : "text-[#7d7f88]"
                    }`}
                  >
                    I need to rent
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("buy")}
                  className="relative h-[44px] sm:h-[54px] w-1/2 rounded-full z-10"
                >
                  <span
                    className={`text-sm sm:text-[16px] transition-colors duration-300 ${
                      activeTab === "buy"
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
            {activeTab === "rent" && (
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
                        // If the value is more than 12, set it back to 12
                        if (parseInt(input.value) > 12) {
                          input.value = "12";
                        }
                        // Prevent typing more than 2 digits (for number 12)
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
            <button className="w-full h-[44px] sm:h-[54px] bg-gradient-to-br from-[#907afc] to-[#6246ea] rounded-[61px] text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg">
              Show Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

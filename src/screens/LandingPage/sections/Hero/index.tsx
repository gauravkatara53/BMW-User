import WHNavbar from "@/components/common/WHNavbar";
import { motion } from "framer-motion";
import "./style.css";

export default function Hero() {
  return (
    <div className="relative lg:pl-32 md:pr-32 lg:pr-0 md:px-16 sm:px-8 px-4">
      <WHNavbar dark />
      <img
        className="absolute top-0 left-0 -z-20"
        src="Vector-blue.png"
        alt=""
      />
      <div className="flex flex-col-reverse md:flex-row justify-center sm:justify-between relative z-10">
        <div className="max-w-[38rem] mt-20 sm:mt-44 flex flex-col sm:items-start items-center gap-4 sm:gap-8">
          <div className="capitalize text-2xl sm:text-4xl xl:text-5xl font-bold sm:flex hidden flex-col sm:items-start items-start sm:gap-2">
            <p className="text-left gradient-text">find the warehouse of</p>
            <p className="text-left transparent-outline">your dreams</p>
            <p className="text-left gradient-text">easily here</p>
          </div>
          <div className="text-2xl text-left -ml-10 capitalize font-bold text-deep-blue-1B sm:hidden block">
            <p className="gradient-text">find the warehouse of</p>
            <p className="transparent-outline">your dreams</p>
            <p className="gradient-text">easily here</p>
          </div>
          <p className="text-WH-light-purple text-sm text-left sm:text-lg">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>

          {/* button */}
          <div className="flex flex-col sm:flex-row sm:items-start items-center">
            {/* <!-- Existing Buttons for larger screens --> */}
            <div className="hidden sm:flex flex-row">
              <button
                type="button"
                className="flex items-center justify-center w-48 text-white bg-black rounded-lg h-14 mr-3"
              >
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    ></path>
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    Google Play
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-48 text-white bg-black h-14 rounded-xl"
              >
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    App Store
                  </div>
                </div>
              </button>
            </div>

            {/* <!-- "Download Now" Button for small screens --> */}
            <div className="block sm:hidden w-full h-14">
              <div className="flex items-center">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="py-3 px-6 bg-gradient-to-b from-[#674CEC] to-[#8D77FC] text-gray-100 cursor-pointer hover:border-blue-900 border text-sm xl:text-base rounded-full font-semibold"
                >
                  Download Now
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-0">
          <img className="pt-[20%] mx-auto" src="iPhone 15 Pro.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

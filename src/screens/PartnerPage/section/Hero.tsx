import APSectionHeading from "@/components/about-page/APSectionHeading";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="lg:ml-10">
      <div className="pb-[10%] flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center lg:px-32 md:px-16 sm:px-8 px-4 gap-8 mt-0">
        {/* Section heading and text */}
        <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-start lg:items-start lg:relative lg:-ml-32 sm:-mt-20">
          <APSectionHeading bgTitle="Partner?" smallTitle="Become a Host" />
          <p className="mt-10 lg:ml-10 text-gray-500">
            BookMyWarehouse is a platform that simplifies buying and selling
            warehouses. We provide detailed listings, connecting buyers and
            sellers with ease to help you find the perfect space.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-start items-center">
            <div className="sm:flex flex-row lg:ml-10 mt-8">
              <Link
                to={
                  "https://play.google.com/store/apps/details?id=com.partner.bookmywarehouse&hl=en"
                }
              >
                <button
                  type="button"
                  className="flex items-center justify-center w-48 text-white bg-black rounded-lg h-14 mr-3 my-2"
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
              </Link>
              <Link to={"/comming-soon"}>
                <button
                  type="button"
                  className="flex items-center justify-center w-48 text-white bg-black h-14 rounded-xl my-2"
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
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="pt-[80px] lg:w-1/2 flex justify-end lg:justify-end pr-4 lg:pr-0 lg:relative lg:-right-20">
          <img
            src="iPhone 14.svg"
            alt="iPhone Image"
            className="w-full lg:w-auto lg:max-w-[800px] mb-4 lg:mb-0"
          />
        </div>
      </div>
    </div>
  );
}

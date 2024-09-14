import React, { useRef, useEffect } from "react";
import WHNavbar from "@/components/common/WHNavbar";
import WHFillButton from "@/components/common/WHFillButton";
import WHFooter from "@/components/common/WHFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  // Specify the correct type for the ref
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simulate a form submission with a success or error response
    toast.success("Your message has been sent successfully!");
  };

  return (
    <div>
      <div ref={topRef} className="relative min-h-screen overflow-hidden">
        {/* Background Images */}
        <img
          className="absolute top-0 left-0 -z-20"
          src="Vector-blue.png"
          alt=""
        />

        <WHNavbar dark />

        <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1B1C57] font-bold text-center mb-8 mt-24 sm:mt-32 lg:mt-12">
            Contact Us!
          </h2>

          <div className="flex flex-col md:flex-col lg:flex-row rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3 space-y-6 lg:space-y-0 lg:space-x-8 relative z-10">
            <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 lg:pl-12">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-md"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-md"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-md"
                    placeholder="Enter your mobile number"
                    pattern="\d{10}"
                    title="Please enter a 10-digit mobile number"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md h-32 resize-none shadow-md"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <div>
                  <WHFillButton title="Send" />
                </div>
              </form>
            </div>

            <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:pr-12 flex justify-center items-center">
              <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] md:h-[500px] h-[400px] mb-24 lg:mb-0">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89797313168!2d77.04417451233647!3d28.52755440771719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0314ca599f2f%3A0x5d4a0525be09a9c8!2sRicoz!5e0!3m2!1sen!2sin!4v1724835316732!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="rounded-lg shadow-lg border-4 border-white"
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WHFooter />
      <ToastContainer />
    </div>
  );
}

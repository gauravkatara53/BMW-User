const Footer = () => {
  return (
    <div className="hidden md:block w-full h-[450px] lg:h-[440px]  shadow-FooterBox bg-gradient-to-br from-white via-white to-cyan-100">
      <div className="w-[95%] lg:w-[90%] mx-auto py-[2rem]">
        <div className="flex justify-between items-start ml-2">
          <div className="w-[30%]">
            <div className="font-Lexend font-normal text-[#0E1735] px-[1rem] lg:px-[2rem] pt-[1.5rem] flex items-center">
              <div className="flex items-center gap-3">
                <img src="logo1.png" className="h-12" alt="" />
              </div>
            </div>
            <div>
              <p className="text-lg ml-8 mt-4  text-[#626687] lg:text-lg">
                We provide information about properties such as houses, villas,
                and apartments to help people find their dream home
              </p>
            </div>

            <div className="flex items-center ml-8 mt-4 text-[#3C4563]">
              <a href="https://www.facebook.com">
                {/* <FaFacebookF className="text-3xl mr-4 " /> */}
              </a>
              <a href="https://www.instagram.com">
                {/* <FaInstagram className="text-3xl mr-4" /> */}
              </a>
              <a href="https://www.instagram.com">
                {/* <FaTwitter className="text-3xl mr-4 " /> */}
              </a>
            </div>
          </div>

          <div className="font-Lexend font-normal text-[#0E1735] px-[1rem] lg:px-[2rem] pt-[1.5rem]">
            <h3 className="text-lg whitespace-nowrap lg:text-xl pb-1">
              Property
            </h3>
            <ul className="my-5 text-[#888B97]">
              <li>
                <p className="text-base lg:text-lg leading-7 lg:leading-9">
                  House
                </p>
              </li>
              <li>
                <p className="text-base lg:text-lg leading-7 lg:leading-9">
                  Apartment
                </p>
              </li>
              <li>
                <p className="text-base lg:text-lg leading-7 lg:leading-9">
                  Villa
                </p>
              </li>
            </ul>
          </div>
          <div className="font-Lexend font-normal text-[#0E1735] px-[10px] lg:px-[2rem] pt-[1.5rem]">
            <h3 className="text-lg lg:text-xl pb-1">Links</h3>
            <ul className="my-5 text-[#888B97]">
              <li>
                <p className="text-base lg:text-lg leading-7 lg:leading-9">
                  Article
                </p>
              </li>
              <li>
                <p className="text-base lg:text-lg leading-7 lg:leading-9">
                  New Article
                </p>
              </li>
              <li>
                <p className="text-base lg:text-lg leading-7 lg:leading-9">
                  Popular Article
                </p>
              </li>
              <li>
                <p className="text-base lg:text-lg leading-7 lg:leading-9">
                  Most Read
                </p>
              </li>
              <li>
                <p className="text-base lg:text-lg leading-7 lg:leading-9">
                  Tips & Tricks
                </p>
              </li>
            </ul>
          </div>
          <div className="font-Lexend font-normal text-[#0E1735] px-[10px] pt-[1.5rem]">
            <p className="text-lg lg:text-xl pb-1">Contact</p>
            <ul className="my-5 text-[#888B97]">
              <li>
                <p className="text-base lg:text-lg leading-7 lg:leading-9">
                  New Delhi
                </p>
              </li>
              <li>
                <p className="text-base lg:text-lg leading-7 lg:leading-9">
                  +91 1234567890
                </p>
              </li>
              <li>
                <p className="text-base lg:text-lg leading-7 lg:leading-9">
                  info@warehouseonhire.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

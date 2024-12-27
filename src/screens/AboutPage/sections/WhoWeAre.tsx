import APSectionHeading from "@/components/about-page/APSectionHeading";

export default function WhoWeAre() {
  return (
    <div className="pt-[80px] pb-[10%] flex flex-col items-center lg:px-32 md:px-16 sm:px-8 px-4 gap-8 mt-0">
      <APSectionHeading bgTitle="About Us" smallTitle="Who we are?" />

      {/* Mobile-only image */}
      <img
        src="/Group 15.svg" // Ensure the image path is correct
        alt="Mobile Image"
        className="block lg:hidden w-full mt-4 mb-8"
      />

      <div className="w-full bg-WH-light-pink/30 rounded-[3rem] flex flex-col lg:flex-row lg:p-16 p-4 overflow-hidden lg:overflow-visible">
        <div className="flex-1 flex flex-col gap-8 lg:pr-16">
          <p className="text-lg font-normal text-black/80 px-4 pt-1 mr-0 sm:-mr-56">
            At BookMyWarehouse, we make buying and selling warehouses easy and
            efficient. Whether you're a seller looking to showcase your property
            or a buyer in search of the perfect space, our platform provides
            detailed listings with key information like size, location, and
            amenities to help you make informed decisions.
          </p>
          <p className="text-lg font-normal text-black/70 px-4  mr-0 sm:-mr-56">
            Sellers can reach a wide audience and manage their listings
            effortlessly, while buyers can easily find warehouses tailored to
            their needs. We’re committed to ensuring smooth and transparent
            transactions, supporting both sellers and buyers in finding the
            ideal warehouse solutions.
          </p>
          <div className="flex items-center justify-center lg:justify-start mt-4 lg:mt-0">
            <img
              src="/quote.png"
              alt="Quote Icon"
              className="w-12 h-12 lg:mr-4"
            />
            <p className="italic sm:whitespace-nowrap  font-semibold text-xl lg:text-2xl text-center lg:text-left lg:-mt-[1.5rem]">
              From the Owner of BookMyWarehouse
            </p>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:relative lg:items-center lg:justify-center">
          <div className="lg:w-full lg:max-w-[80%]">
            <img
              src="Group 15.png"
              className="w-full ml-40 -mt-20 h-auto object-cover"
              alt="Warehouse"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

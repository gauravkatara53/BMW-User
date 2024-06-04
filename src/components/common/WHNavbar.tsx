import WHNavLink from "./WHNavLink";

export default function WHNavbar() {
  return (
    <div className="py-8 lg:px-32 md:px-16 sm:px-8 px-4 flex justify-between w-full absolute top-0 left-0 z-20">
      <div className="flex items-center gap-3">
        <img src="logo1.png" className="h-12" alt="" />
        {/* <WHSvg />
        <h1 className="text-lg font-semibold text-deep-blue-1B">
          Warehouse On Hire
        </h1> */}
      </div>
      <div className=" flex xl:gap-16 gap-4 items-center">
      <div className="lg:flex hidden gap-4 items-center">
        <WHNavLink title="About Us" />
        <WHNavLink title="Article" />
        <WHNavLink title="Property" />
      </div>
      <div className="py-3 px-6 text-WH-dark-green bg-WH-light-green text-sm xl:text-base  rounded-full font-semibold">Sign Up!</div>

      </div>
    </div>
  );
}

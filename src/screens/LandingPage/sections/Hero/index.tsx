import { ChevronSVG } from "@/assets/svgs";
import WHNavbar from "@/components/common/WHNavbar";
import LPAchievementContainer from "@/components/landing-page/LPAchievementContainer";
import LPSearchBarHero from "@/components/landing-page/LPSearchBarHero";
import "./style.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="lg:pl-32 md:pr-32 lg:pr-0 md:px-16 sm:px-8 px-4">
      <WHNavbar />
      <div className="flex justify-center sm:justify-between relative z-10 gap-16">
        <img
          className="absolute lg:top-[-12rem] lg:left-[-24rem] sm:top-[-5rem] sm:left-[-10rem] top-0 left-[-10rem] -z-20"
          src="green-blur-blob.png"
          alt=""
        />
        <div className="max-w-[38rem] sm:mt-48 mt-44 flex flex-col sm:items-start items-center gap-8">
          <div className="capitalize text-2xl sm:text-4xl xl:text-5xl text-deep-blue-1B font-bold sm:flex hidden flex-col sm:items-start items-center sm:gap-2">
            <p className="sm:text-start text-center">find the warehouse of</p>
            <p className="transparent-outline">your dreams</p>
            <p>easily here</p>
          </div>
          <div className="text-2xl text-center capitalize font-bold text-deep-blue-1B sm:hidden block">
            find the warehouse of your dreams easily here
          </div>
          <p className="text-WH-light-purple text-sm sm:text-start text-center sm:text-lg">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>
          <LPSearchBarHero
            buttonChild={<ChevronSVG direction="right" strokeWidth={2} />}
            iconUrl="location-pin.png"
            buttonTitle="Search"
            placeholder="Search for the location you want!"
          />
          <div className="flex flex-col sm:items-start items-center">
            <h4 className="text-WH-light-purple text-lg mb-2">
              Our Partnership
            </h4>
            <div className="grid xs:grid-cols-4 grid-cols-2 items-center justify-center sm:justify-start sm:gap-12 gap-4">
              <img src="traveloka.png" alt="" />
              <img src="ticket.png" alt="" />
              <img src="airbnb.png" alt="" />
              <img src="tripadvisor.png" alt="" />
            </div>
          </div>
        </div>
        <div className="relative xl:w-[45rem] w-[60rem] h-full hidden lg:block">
          <div className="overflow-hidden rounded-bl-[4.8rem] w-full">
            <motion.img
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 1 }}
              className="object-cover w-full"
              src="hero.png"
              alt=""
            />
          </div>
          <LPAchievementContainer />
        </div>
      </div>
    </div>
  );
}

import WHNavbar from "@/components/common/WHNavbar";
import NewsAndUpdates from "./sections/NewsAndUpdates";
import WhoWeAre from "./sections/WhoWeAre";
import PeopleAndEnvironment from "./sections/PeopleAndEnvironment";
import GeteverythingDone from "./sections/GeteverythingDone";
import WHFooter from "@/components/common/WHFooter";
import Hero from "./sections/Hero";
import OurPartnersAndInvestors from "./sections/OurPartnersAndInvestors";

export default function AboutPage() {
  return (
    <div className="">
      <WHNavbar dark/>
      <Hero/>
      <WhoWeAre />
      <GeteverythingDone />
      <OurPartnersAndInvestors/>
      <PeopleAndEnvironment/>
      <NewsAndUpdates />
      <WHFooter />
    </div>
  );
}

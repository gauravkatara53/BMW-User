import WHNavbar from "@/components/common/WHNavbar";
import NewsAndUpdates from "./sections/NewsAndUpdates";
import WhoWeAre from "./sections/WhoWeAre";
import PeopleAndEnvironment from "./sections/PeopleAndEnvironment";
import GeteverythingDone from "./sections/GeteverythingDone";
import WHFooter from "@/components/common/WHFooter";
import Hero from "./sections/Hero";

export default function AboutPage() {
  return (
    <div className="">
      <WHNavbar dark/>
      <Hero/>
      <WhoWeAre />
      <GeteverythingDone />
      <PeopleAndEnvironment/>
      <NewsAndUpdates />
      <WHFooter />
    </div>
  );
}

import WHNavbar from "@/components/common/WHNavbar";
import Hero from "./section/Hero";
import OurPartnersAndInvestors from "./section/OurPartnersAndInvestors";
import GeteverythingDone from "./section/GeteverythingDone";
import WHFooter from "@/components/common/WHFooter";

export default function Partner() {
  return (
    <div className="">
      <WHNavbar dark />
      <Hero />
      <OurPartnersAndInvestors />
      <GeteverythingDone />
      <WHFooter />
    </div>
  );
}

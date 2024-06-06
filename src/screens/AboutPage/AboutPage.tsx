import WHNavbar from "@/components/common/WHNavbar";
// import NewsAndUpdates from "./sections/NewsAndUpdates";
import WhoWeAre from "./sections/WhoWeAre";
import PeopleAndEnvironment from "./sections/PeopleAndEnvironment";
import WHFooter from "@/components/common/WHFooter";

export default function AboutPage() {
  return (
    <div className="">
      <WHNavbar dark/>
      {/* <NewsAndUpdates /> */}
      <WhoWeAre />
      <PeopleAndEnvironment/>
      <WHFooter/>
    </div>
  );
}

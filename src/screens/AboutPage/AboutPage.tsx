import WHNavbar from "@/components/common/WHNavbar";
import NewsAndUpdates from "./sections/NewsAndUpdates";
import WhoWeAre from "./sections/WhoWeAre";
import WHFooter from "@/components/common/WHFooter";

export default function AboutPage() {
  return (
    <div className="">
      <WHNavbar dark />
      <WhoWeAre />

      <WHFooter />
    </div>
  );
}

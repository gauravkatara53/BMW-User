import WHNavbar from "@/components/common/WHNavbar";
import WhoWeAre from "./sections/WhoWeAre";
import WHFooter from "@/components/common/WHFooter";
import OurTeam from "./sections/OurTeam";

export default function AboutPage() {
  return (
    <div className="">
      <WHNavbar dark />
      <WhoWeAre />
      <OurTeam />
      <WHFooter />
    </div>
  );
}

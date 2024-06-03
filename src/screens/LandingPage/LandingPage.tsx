import WHFooter from "@/components/common/WHFooter";
import Hero from "./containers/Hero";
import OurRecommendation from "./containers/OurRecommendation";
import ReadyToSell from "./containers/ReadyToSell";
import Newsletter from "./containers/Newsletter";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-40">
      <Hero />
      <OurRecommendation />
      <ReadyToSell />
      <Newsletter/>
      <WHFooter/>
    </div>
  );
}

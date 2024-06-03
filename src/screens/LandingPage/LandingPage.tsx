import Hero from "./containers/Hero";
import OurRecommendation from "./containers/OurRecommendation";
import ReadyToSell from "./containers/ReadyToSell";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <OurRecommendation />
      <ReadyToSell />
    </div>
  );
}

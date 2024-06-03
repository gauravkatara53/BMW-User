import Hero from "./containers/Hero";
import OurRecommendation from "./containers/OurRecommendation";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-32">
      <Hero/>
      <OurRecommendation/>
    </div>
  );
}

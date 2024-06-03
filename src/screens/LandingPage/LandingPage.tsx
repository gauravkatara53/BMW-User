import WHFooter from "@/components/common/WHFooter";
import Hero from "./containers/Hero";
import OurRecommendation from "./containers/OurRecommendation";
import ReadyToSell from "./containers/ReadyToSell";
import Newsletter from "./containers/Newsletter";
import ArticleSection from "./containers/ArticlesSection";
import OurReviews from "./containers/OurReviews";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-40 overflow-x-hidden">
      <Hero />
      <OurRecommendation />
      <ReadyToSell />
      <OurReviews/>
      <ArticleSection/>
      <Newsletter/>
      <WHFooter/>
    </div>
  );
}

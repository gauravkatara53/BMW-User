import WHFooter from "@/components/common/WHFooter";
import Hero from "./containers/Hero";
import OurRecommendation from "./containers/OurRecommendation";
import ReadyToSell from "./containers/ReadyToSell";
import Newsletter from "./containers/Newsletter";
import ArticleSection from "./containers/ArticlesSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-40">
      <Hero />
      <OurRecommendation />
      <ReadyToSell />
      <ArticleSection/>
      <Newsletter/>
      <WHFooter/>
    </div>
  );
}

import WHFooter from "@/components/common/WHFooter";
import Hero from "./sections/Hero";
import OurRecommendation from "./sections/OurRecommendation";
import Newsletter from "./sections/Newsletter";
import ArticleSection from "./sections/ArticlesSection";
import OurReviews from "./sections/OurReviews";
import RecommendationProvider from "@/providers/RecommendationProvider";
import StatsSection from "./sections/ StatsSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-40 overflow-x-hidden">
      <Hero />
      <RecommendationProvider>
        <OurRecommendation />
      </RecommendationProvider>
      <StatsSection />

      <OurReviews />
      <ArticleSection />
      <Newsletter />
      <WHFooter />
    </div>
  );
}

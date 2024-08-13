import ChevronSVG from "@/assets/svgs/ChevronSVG";
import LPFeaturedContainer from "@/components/landing-page/LPFeaturedContainer";
import LPSectionHeading from "@/components/landing-page/LPSectionHeading";
import LPSelector from "@/components/landing-page/LPSelector";

export default function OurRecommendation() {
  return (
    <div className="lg:pl-32 md:pr-32 lg:pr-0 md:px-16 sm:px-8 px-4">
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row items-center md:justify-between lg:pr-32 mb-8">
        <LPSectionHeading
          title="Our Recommendation"
          superHeading="Featured House"
        />
        <LPSelector />
        <div className="lg:flex gap-4 hidden">
          <div className="bg-gray-200 px-6 py-4 rounded-full flex justify-center items-center hover:bg-WH-light-green-01 transition-colors duration-300">
            <ChevronSVG direction="left" strokeWidth={2} />
          </div>
          <div className="bg-gray-200 px-6 py-4 rounded-full flex justify-center items-center hover:bg-WH-light-green-01 transition-colors duration-300">
            <ChevronSVG direction="right" strokeWidth={2} />
          </div>
        </div>
      </div>
      <LPFeaturedContainer />
    </div>
  );
}

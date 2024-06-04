import ChevronSVG from "@/assets/svgs/ChevronSVG";
import LPFeaturedContainer from "@/components/landing-page/LPFeaturedContainer";
import LPSectionHeading from "@/components/landing-page/LPSectionHeading";
import LPSelector from "@/components/landing-page/LPSelector";

export default function OurRecommendation() {
  return (
    <div className="pl-32">
      <div className="flex items-center justify-between pr-32 mb-8">
        <LPSectionHeading
          title="Our Recommendation"
          superHeading="Featured House"
        />
        <LPSelector />
        <div className="flex gap-4">
          <div className=" bg-WH-light-gray px-6 py-4 rounded-full flex justify-center items-center">
            <ChevronSVG direction="left" strokeWidth={2} />
          </div>
          <div className=" bg-WH-light-green-01 px-6 py-4 rounded-full flex justify-center items-center">
            <ChevronSVG direction="right" color="white" strokeWidth={2} />
          </div>
        </div>
      </div>
      <LPFeaturedContainer />
    </div>
  );
}

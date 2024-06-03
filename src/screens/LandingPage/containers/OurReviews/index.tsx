import LPReviewCard from "@/components/landing-page/LPReviewCard";
import LPSectionHeading from "@/components/landing-page/LPSectionHeading";

export default function OurReviews() {
  return (
    <div className="flex flex-col items-center">
      <LPSectionHeading
        title="See Our Review"
        alignment="center"
        superHeading="What Our User Say About Us"
      />
      <div className="mt-12 mb-56 flex gap-12 ">
        <LPReviewCard/>
        <LPReviewCard/>
        <LPReviewCard/>
      </div>
      <div className="flex gap-4">
        <div className="bg-WH-dark-gray w-4 h-4 rounded-full"></div>
        <div className="bg-WH-light-gray w-4 h-4 rounded-full"></div>
        <div className="bg-WH-light-gray w-4 h-4 rounded-full"></div>
      </div>
    </div>
  );
}

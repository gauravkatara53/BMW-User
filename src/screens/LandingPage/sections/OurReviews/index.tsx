import LPReviewCard from "@/components/landing-page/LPReviewCard";
import LPSectionHeading from "@/components/landing-page/LPSectionHeading";
import { REVIEWS } from "@/data/landing-page/REVIEWS";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

export default function OurReviews() {
  return (
    <div className="flex flex-col items-center">
      <LPSectionHeading
        title="See Our Review"
        alignment="center"
        superHeading="What Our User Say About Us"
      />
      <div className="mt-12 flex justify-center gap-12 lg:w-[125rem] md:w-[110rem] sm:w-[80rem] w-[70rem]">
        <Swiper
          modules={[Autoplay]}
          speed={1000}
          pagination={true}
          autoplay={true}
          parallax={true}
          spaceBetween={16}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {REVIEWS.map((review) => (
            <SwiperSlide>
              <LPReviewCard
                key={review._id}
                bgImageUrl={review.bgImageUrl}
                rating={review.rating}
                review={review.review}
                reviewTitle={review.reviewTitle}
                reviewerImage={review.reviewerImage}
                reviewerName={review.reviewerName}
                reviewerdes={review.reviewerdes}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-4">
        <div className="bg-WH-dark-gray w-4 h-4 rounded-full"></div>
        <div className="bg-WH-light-gray w-4 h-4 rounded-full"></div>
        <div className="bg-WH-light-gray w-4 h-4 rounded-full"></div>
      </div>
    </div>
  );
}

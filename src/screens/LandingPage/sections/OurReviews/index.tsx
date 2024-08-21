import LPReviewCard from "@/components/landing-page/LPReviewCard";
import LPSectionHeading from "@/components/landing-page/LPSectionHeading";
import { REVIEWS } from "@/data/landing-page/REVIEWS";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination"; // Import Swiper pagination CSS

export default function OurReviews() {
  return (
    <div className="flex flex-col items-center">
      <LPSectionHeading
        title="See Our Review"
        alignment="center"
        superHeading="What Our Users Say About Us"
      />
      <div className="mt-12 flex justify-center gap-12 lg:w-[125rem] md:w-[110rem] sm:w-[80rem] w-[70rem]">
        <Swiper
          modules={[Autoplay, Pagination]} // Include Pagination module
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true} // Enable loop mode
          parallax={true}
          spaceBetween={16}
          slidesPerView={3}
          centeredSlides={true} // Center the slides
          pagination={{ clickable: true, dynamicBullets: true }} // Dynamic bullets for pagination
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {REVIEWS.map((review) => (
            <SwiperSlide key={review._id}>
              {" "}
              {/* Move key to SwiperSlide */}
              <LPReviewCard
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

      {/* Custom CSS for the dots */}
      <style>{`
        .swiper-pagination-bullet {
          width: 10px; /* Increase the width */
          height: 10px; /* Increase the height */
          background-color: #000; /* Optional: change the color */
          opacity: 0.7; /* Optional: adjust opacity */
          margin: 0 4px; /* Optional: adjust spacing between dots */
        }

        .swiper-pagination-bullet-active {
          opacity: 1; /* Make the active dot more visible */
          background-color: #007bff; /* Optional: change the active dot color */
        }
      `}</style>
    </div>
  );
}

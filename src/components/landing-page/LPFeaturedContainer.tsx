import { useContext, useEffect, useState } from "react";
import LPFeaturedWrapper from "./LPFeaturedWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { RecommendationContext } from "@/providers/RecommendationProvider";

export default function LPFeaturedContainer() {
  const RC = useContext(RecommendationContext);
  const [slidesPerView, setSlidesPerView] = useState(4);

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setSlidesPerView(1);
    } else if (width < 768) {
      setSlidesPerView(2);
    } else if (width < 1024) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <div className="flex w-full justify-center">
      <Swiper
        modules={[Autoplay, Pagination]}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {RC?.recommendations.map((property) => (
          <SwiperSlide key={property._id}>
            <LPFeaturedWrapper
              ownerImage={property.ownerImage}
              ownerName={property.ownerName}
              img={property.img}
              place={property.place}
              price={Number(property.price).toLocaleString()}
              propertyName={property.propertyName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

import LPFeaturedWrapper from "./LPFeaturedWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import { useContext } from "react";
import { RecommendationContext } from "@/providers/RecommendationProvider";

export default function LPFeaturedContainer() {
  const RC = useContext(RecommendationContext)
  return (
    <div className="flex">
      <Swiper
        modules={[Pagination,Autoplay,Parallax]}
        speed={1000}
        pagination={true}
        autoplay={true}
        parallax={true}
        spaceBetween={16}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {RC?.recommendations.map((property) => (
          <SwiperSlide>
            <LPFeaturedWrapper
              key={property._id}
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

import { useContext, useEffect, useState, MutableRefObject } from "react";
import LPFeaturedWrapper from "./LPFeaturedWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Import only the necessary modules
import "swiper/css";
import "swiper/css/pagination"; // Import only the necessary styles
import { RecommendationContext } from "@/providers/RecommendationProvider";
import { Swiper as SwiperCore } from "swiper"; // Import SwiperCore type

interface LPFeaturedContainerProps {
  swiperRef: MutableRefObject<SwiperCore | null>; // Explicitly type the swiperRef prop
}

export default function LPFeaturedContainer({
  swiperRef,
}: LPFeaturedContainerProps) {
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
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Assign Swiper instance to ref
        }}
        modules={[Autoplay, Pagination]} // Use only necessary modules
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        // Remove default pagination and navigation
        pagination={false}
        navigation={false}
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

import {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  MutableRefObject,
} from "react";
import LPFeaturedWrapper from "./LPFeaturedWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { RecommendationContext } from "@/providers/RecommendationProvider";
import { Swiper as SwiperCore } from "swiper";
import { useNavigate } from "react-router-dom";

interface LPFeaturedContainerProps {
  swiperRef: MutableRefObject<SwiperCore | null>;
}

export default function LPFeaturedContainer({
  swiperRef,
}: LPFeaturedContainerProps) {
  const RC = useContext(RecommendationContext);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const navigate = useNavigate();

  const updateSlidesPerView = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setSlidesPerView(1);
    else if (width < 768) setSlidesPerView(2);
    else if (width < 1024) setSlidesPerView(3);
    else setSlidesPerView(4);
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateSlidesPerView, 200);
    };

    let resizeTimer: NodeJS.Timeout;
    updateSlidesPerView();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      clearTimeout(resizeTimer);
    };
  }, [updateSlidesPerView]);

  const swiperSettings = useMemo(
    () => ({
      modules: [Autoplay, Pagination],
      speed: 1000,
      autoplay: { delay: 3000, disableOnInteraction: false },
      spaceBetween: 16,
      slidesPerView: slidesPerView,
      pagination: false,
      navigation: false,
    }),
    [slidesPerView]
  );

  const handleWarehouseClick = (warehouseId: string) => {
    if (warehouseId) {
      navigate(`/warehouse-profile/${warehouseId}`);
    } else {
      alert("Warehouse ID missing.");
    }
  };

  // ✅ Fix: Ensure context exists before checking RC.loading
  if (!RC || RC.loading) {
    return (
      <div className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 animate-pulse">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-base-200 rounded-xl shadow p-4 space-y-4 w-full h-[280px]"
          >
            <div className="h-32 bg-gray-300 rounded w-full" />
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center">
      <Swiper
        {...swiperSettings}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {RC.recommendations.map((property) => (
          <SwiperSlide
            key={property._id}
            onClick={() => handleWarehouseClick(property._id)}
          >
            <LPFeaturedWrapper
              ownerImage={property.partnerName.avatar || ""}
              tag={property.tag || "unique"}
              ownerName={property.partnerName.name || "Unknown Owner"}
              img={property.thumbnail || ""}
              place={property.city || "Unknown Place"}
              price={Number(property.totalPrice).toLocaleString() || "0"}
              propertyName={property.name || "Unknown Property"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

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
import { Autoplay, Pagination } from "swiper/modules"; // Import only the necessary modules
import "swiper/css";
import "swiper/css/pagination"; // Import only the necessary styles
import { RecommendationContext } from "@/providers/RecommendationProvider";
import { Swiper as SwiperCore } from "swiper"; // Import SwiperCore type
import { useNavigate } from "react-router-dom";
interface LPFeaturedContainerProps {
  swiperRef: MutableRefObject<SwiperCore | null>; // Explicitly type the swiperRef prop
}

export default function LPFeaturedContainer({
  swiperRef,
}: LPFeaturedContainerProps) {
  const RC = useContext(RecommendationContext);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const navigate = useNavigate();
  // Module-level variable for debouncing
  let resizeTimer: NodeJS.Timeout;

  // Debounced resize handler to optimize performance
  const updateSlidesPerView = useCallback(() => {
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
  }, []);

  useEffect(() => {
    // Debounce logic to avoid frequent updates on resize
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateSlidesPerView, 200);
    };

    updateSlidesPerView(); // Initial setup
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [updateSlidesPerView]); // Add updateSlidesPerView as a dependency

  // Memoize Swiper's configuration
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
    [slidesPerView] // Recompute settings only when slidesPerView changes
  );
  const handleWarehouseClick = (warehouseId: string) => {
    if (warehouseId) {
      navigate(`/warehouse-profile/${warehouseId}`);
    } else {
      alert("Partner document ID is missing.");
    }
  };
  return (
    <div className="flex w-full justify-center">
      <Swiper
        {...swiperSettings} // Spread the swiperSettings object
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Directly assign Swiper instance
      >
        {RC?.recommendations.map((property) => (
          <SwiperSlide
            key={property._id}
            onClick={() => handleWarehouseClick(property._id)}
          >
            <LPFeaturedWrapper
              ownerImage={property.partnerName.avatar || ""} // Provide a default empty string if undefined
              tag={property.tag || "unique"}
              ownerName={property.partnerName.name || "Unknown Owner"} // Provide a default value to avoid undefined
              img={property.thumbnail || ""} // Provide a default empty string if undefined
              place={property.city || "Unknown Place"} // Provide a default value to avoid undefined
              price={Number(property.totalPrice).toLocaleString() || "0"} // Ensure price is a valid string
              propertyName={property.name || "Unknown Property"} // Provide a default value
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

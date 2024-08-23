import React, { useCallback } from "react";
import LPAchievementCard from "./LPAchievementCard";
import { ACHIEVEMENTS } from "@/data/landing-page/ACHEIVEMENTS";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper"; // Import Swiper types

import "swiper/css";
import "swiper/css/autoplay";

export default function LPAchievementContainer(): React.JSX.Element {
  // Handlers
  const handleSlideChange = useCallback(() => {
    console.log("slide change");
  }, []);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    console.log(swiper);
  }, []);

  return (
    <div className="absolute bottom-11 left-11 flex gap-4 overflow-hidden w-[50rem]">
      <Swiper
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }} // Customize autoplay for better control
        spaceBetween={16}
        slidesPerView={3}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
      >
        {ACHIEVEMENTS.map((achievement) => {
          // Ensure images, title, and subtitle are never undefined
          const { _id, images = [], subtitle = "", title = "" } = achievement;

          return (
            <SwiperSlide key={_id}>
              <LPAchievementCard
                images={images}
                subtitle={subtitle}
                title={title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

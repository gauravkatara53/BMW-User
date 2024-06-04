import LPAchievementCard from "./LPAchievementCard";
import { ACHIEVEMENTS } from "@/data/landing-page/ACHEIVEMENTS";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

export default function LPAchievementContainer() {
  return (
    <div className="absolute bottom-11 left-11 flex gap-4 overflow-hidden w-[50rem]">
      <Swiper
        speed={1000}
        modules={[Autoplay]}
        autoplay={true}
        spaceBetween={16}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {ACHIEVEMENTS.map((achievement) => (
          <SwiperSlide>
            <LPAchievementCard
              key={achievement._id}
              subtitle={achievement.subtitle}
              title={achievement.title}
              images={achievement.images}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

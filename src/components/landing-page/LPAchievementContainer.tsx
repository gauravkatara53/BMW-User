import React from "react";
import LPAchievementCard from "./LPAchievementCard";
import { ACHIEVEMENTS } from "@/data/landing-page/ACHEIVEMENTS";

export default function LPAchievementContainer() {
  React.useEffect(() => {}, []);
  return (
    <div className="absolute bottom-11 left-11 flex gap-4 overflow-hidden">
      {ACHIEVEMENTS.map((achievement) => (
        <LPAchievementCard
          key={achievement._id}
          subtitle={achievement.subtitle}
          title={achievement.title}
          images={achievement.images}
        />
      ))}
    </div>
  );
}

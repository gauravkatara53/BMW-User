import React from "react";

export default function LPAchievementCard({
  images,
  subtitle,
  title,
}: LPAchievement): React.JSX.Element {
  return (
    <div className="bg-white flex py-3 pl-1 pr-6 rounded-[2rem] gap-5 items-center flex-shrink-0">
      <div className="flex">
        {images?.map((image, i) => (
          <img
            className={i !== 0 ? "-ml-8 rounded-full " : " rounded-full"}
            key={`LPAC_${i}`}
            src={image}
            alt=""
          />
        ))}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-WH-light-purple">{subtitle}</p>
      </div>
    </div>
  );
}

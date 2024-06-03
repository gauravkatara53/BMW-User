import React from "react";

type TProps = {
  title?: string;
  subtitle?: string;
  images?: Array<string>;
};

export default function LPAchievementCard({
  images,subtitle,title
}: TProps): React.JSX.Element {
  return (
    <div className="bg-white flex py-4 pl-4 pr-6 rounded-[2rem] gap-4 items-center flex-shrink-0">
      <div className="flex">
        {images?.map((image, i) => (
          <img
            className={i !== 0 ? "-ml-6 rounded-full" : " rounded-full"}
            key={`LPAC_${i}`}
            src={image}
            alt=""
          />
        ))}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-WH-light-purple">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

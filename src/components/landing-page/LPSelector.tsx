import ApartmentSVG from "@/assets/svgs/ApartmentSVG";
import HouseSVG from "@/assets/svgs/HouseSVG";
import VillaSVG from "@/assets/svgs/VillaSVG";
import { motion } from "framer-motion";
import {
  RecommendationContext,
  RecommendationType,
} from "@/providers/RecommendationProvider";
import { cn } from "@/utilities";
import React, { useContext } from "react";

const TABS: Array<{ name: RecommendationType; icon: React.JSX.Element }> = [
  {
    name: "house",
    icon: <HouseSVG />,
  },
  {
    name: "villa",
    icon: <VillaSVG />,
  },
  {
    name: "warehouse",
    icon: <ApartmentSVG />,
  },
];

export default function LPSelector(): React.JSX.Element {
  const RC = useContext(RecommendationContext);
  return (
    <div className=" flex lg:gap-8 gap-2">
      {TABS.map((tab, i) => (
        <motion.div
        whileTap={{scale:0.95}}
          key={`OR_TAB_${i}`}
          onClick={() => RC?.changeTab(tab.name)}
          className={cn(
            "border md:py-3 py-1 capitalize cursor-pointer border-WH-light-gray md:text-base sm:text-sm text-xs hover:border-WH-light-green-01/40 px-2 md:px-6 rounded-full text-WH-light-purple flex gap-2 items-center font-medium",
            {
              "bg-WH-light-green text-WH-light-green-01 border-WH-light-green":
                RC?.selected === tab.name,
            }
          )}
        >
          {tab.icon}
          {tab.name}
        </motion.div>
      ))}
    </div>
  );
}

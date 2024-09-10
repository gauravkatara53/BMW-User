import BuySVG from "@/assets/svgs/HouseSVG"; // Replace with the actual path to your Buy icon
import RentSVG from "@/assets/svgs/ApartmentSVG"; // Replace with the actual path to your Rent icon
import { motion } from "framer-motion";
import {
  RecommendationContext,
  RecommendationType,
} from "@/providers/RecommendationProvider";
import { cn } from "@/utilities";
import React, { useContext, useMemo } from "react";

const TABS: Array<{
  name: RecommendationType;
  icon: React.FC<{ color?: string }>;
}> = [
  { name: "buy", icon: BuySVG },
  { name: "rent", icon: RentSVG },
];

export default function LPSelector(): React.JSX.Element {
  const RC = useContext(RecommendationContext);

  const tabs = useMemo(
    () =>
      TABS.map((tab, i) => {
        const isSelected = RC?.selected === tab.name;
        const IconComponent = tab.icon;

        return (
          <motion.div
            whileTap={{ scale: 0.95 }}
            key={`OR_TAB_${i}`}
            onClick={() => RC?.changeTab && RC.changeTab(tab.name)}
            className={cn(
              "border md:py-3 py-1 capitalize cursor-pointer border-WH-light-gray md:text-base sm:text-sm text-xs hover:border-blue-500 px-2 md:px-6 rounded-full text-WH-light-purple flex gap-2 items-center font-medium",
              {
                "bg-gradient-to-b from-[#674CEC] to-[#8D77FC] text-white border-WH-light-green":
                  isSelected,
              }
            )}
          >
            <IconComponent color={isSelected ? "#FFFFFF" : "#888B97"} />
            {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}{" "}
            {/* Capitalize the tab name */}
          </motion.div>
        );
      }),
    [RC?.selected, RC?.changeTab]
  );

  return <div className="flex lg:gap-8 gap-2">{tabs}</div>;
}

import ApartmentSVG from "@/assets/svgs/ApartmentSVG";
import HouseSVG from "@/assets/svgs/HouseSVG";
import VillaSVG from "@/assets/svgs/VillaSVG";
import React from "react";

export default function LPSelector(): React.JSX.Element {
  return (
    <div className=" flex gap-8">
      <div className="border-2 border-WH-light-green py-3 px-6 rounded-full bg-WH-light-green text-WH-light-green-01 flex gap-2 items-center font-medium">
        <HouseSVG />
        House
      </div>
      <div className="border-2 border-WH-light-gray py-3 px-6 rounded-full text-WH-mild-gray flex gap-2 items-center font-medium">
        <VillaSVG />
        Villa
      </div>
      <div className="border-2 border-WH-light-gray py-3 px-6 rounded-full text-WH-mild-gray flex gap-2 items-center font-medium">
        <ApartmentSVG />
        Warehouse
      </div>
    </div>
  );
}

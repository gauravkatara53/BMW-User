import { cn } from "@/utilities";
import React from "react";

type TProps = {
  title?: string;
  superHeading?: string;
  alignment?: "start" | "center";
};

export default function LPSectionHeading({
  superHeading,
  title,
  alignment = "start",
}: TProps): React.JSX.Element {
  return (
    <div
      className={cn("flex flex-col gap-4", {
        "items-center": alignment == "center",
        "sm:items-start items-center": alignment == "start",
      })}
    >
      <div
        className={cn("flex  items-center", {
          "sm:flex-row flex-col sm:gap-2 gap-4": alignment === "start",
          "flex-col gap-4": alignment === "center",
        })}
      >
        <div className="bg-WH-gold h-[1px] w-8"></div>
        <p className="text-sm text-WH-gold font-medium">{title}</p>
      </div>
      <p className="md:ml-10 font-semibold sm:text-start text-center text-deep-blue-1B text-lg sm:text-2xl md:text-3xl">
        {superHeading}
      </p>
    </div>
  );
}

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
        "items-start": alignment == "start",
      })}
    >
      <div
        className={cn("flex  items-center", {
          "flex-row gap-2": alignment === "start",
          "flex-col gap-4": alignment === "center",
        })}
      >
        <div className="bg-WH-gold h-[1px] w-8"></div>
        <p className="text-sm text-WH-gold font-medium">{title}</p>
      </div>
      <p className="md:ml-10 font-semibold text-deep-blue-1B text-2xl md:text-3xl">
        {superHeading}
      </p>
    </div>
  );
}

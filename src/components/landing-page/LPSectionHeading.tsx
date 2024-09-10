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
      className={cn(
        "flex flex-col gap-4",
        alignment === "center" ? "items-center" : "sm:items-start items-center"
      )}
    >
      <div className="flex items-center flex-col sm:flex-row sm:gap-2 gap-4">
        <div className="bg-gradient-to-b from-[#674CEC] to-[#8D77FC] h-[1px] w-8"></div>
        <p className="text-sm gradient-text font-medium">{title}</p>
      </div>
      <p
        className={cn(
          "font-semibold text-center sm:text-start text-deep-blue-1B",
          "text-lg sm:text-2xl md:text-3xl md:ml-10"
        )}
      >
        {superHeading}
      </p>
    </div>
  );
}

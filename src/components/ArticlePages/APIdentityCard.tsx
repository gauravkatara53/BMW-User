import { cn } from "@/utilities"; // Assuming cn is a utility function to concatenate class names
import React from "react";

type TProps = {
  size?: "small" | "base";
  name?: string;
  img?: string;
  subtitle?: string;
  changeDirnSmall?: boolean;
};

export default function APIdentityCard({
  size = "base",
  img = "",
  name = "",
  subtitle = "",
  changeDirnSmall = false,
}: TProps): React.JSX.Element {
  return (
    <div
      className={cn("flex items-center", {
        "flex-row gap-2 sm:gap-4":
          size === "small" || (size === "base" && !changeDirnSmall),
        "flex-col sm:flex-row gap-2 sm:gap-4":
          size === "base" && changeDirnSmall,
      })}
    >
      {img && (
        <img
          className={cn({
            "w-8 h-8": size === "small",
            "w-12 h-12 lg:w-14 lg:h-14": size === "base",
          })}
          src={img}
          alt={name} // Provide a meaningful alt text
        />
      )}
      <div className="flex flex-col items-center sm:items-start">
        {name && (
          <p
            className={cn("text-nowrap font-medium", {
              "text-sm": size === "small",
              "text-sm md:text-base xl:text-lg": size === "base",
            })}
          >
            {name}
          </p>
        )}
        {size === "base" && subtitle && (
          <p className="text-xs sm:text-sm font-medium text-WH-mild-gray">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

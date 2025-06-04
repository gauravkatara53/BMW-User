import { cn } from "@/utilities";
import React from "react";

type TProps = {
  size?: "small" | "base";
  name?: string;
  img?: string;
  subtitle?: string;
  changeDirnSmall?: boolean;
};

export default function LPIdentityCard({
  size = "small",
  img = "",
  name = "Owner Name",
  subtitle = "Owner",
  changeDirnSmall = false,
}: TProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "flex items-center rounded-lg bg-white d p-2 sm:p-2.5 shadow-sm border border-gray-100 ",
        {
          "flex-row gap-2":
            size === "small" || (size === "base" && !changeDirnSmall),
          "flex-col sm:flex-row gap-2 sm:gap-3":
            size === "base" && changeDirnSmall,
        }
      )}
    >
      {img && (
        <img
          src={img}
          alt={name}
          className={cn("rounded-full object-cover ring-1 ring-gray-200 ", {
            "w-8 h-8": size === "small",
            "w-12 h-12": size === "base",
          })}
        />
      )}

      <div className="flex flex-col justify-center">
        {name && (
          <p
            className={cn("font-medium text-gray-800  leading-tight", {
              "text-xs": size === "small",
              "text-sm sm:text-base": size === "base",
            })}
          >
            {name}
          </p>
        )}
        {subtitle && (
          <p className="text-[11px] sm:text-xs text-gray-500 dark:text-neutral-400 font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

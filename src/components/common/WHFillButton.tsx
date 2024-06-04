import { cn } from "@/utilities";
import React from "react";

export default function WHFillButton({
  title,
  onClick,
  variant = "primary-fill",
  children,
  rounded = "full",
}: {
  title: string;
  onClick?: () => void;
  variant?:
    | "primary-fill"
    | "primary-bordered"
    | "white-fill"
    | "white-bordered"
    | "light-green-fill";
  children?: React.JSX.Element;
  rounded?: "sm" | "md" | "lg" | "none" | "full";
}) {
  return (
    <button
      onClick={onClick}
      // whileTap={{ scale: 0.9 }}
      className={cn(
        `rounded-full text-nowrap border-2 tracking-[1px] font-normal px-4 lg:px-8 py-2 lg:py-4 text-sm sm:text-base flex items-center gap-2`,
        {
          "bg-WH-light-green-01 text-white border-WH-light-green-01 sm:hover:text-WH-light-green-01 hover:border-WH-light-green-01 sm:hover:bg-transparent":
            variant === "primary-fill",
          "sm:hover:bg-WH-light-green-01 sm:hover:text-black text-WH-bg-WH-light-green-01 border-WH-bg-WH-light-green-01":
            variant === "primary-bordered",
          "bg-white text-black sm:hover:text-white hover:border-white sm:hover:bg-transparent":
            variant === "white-fill",
          "sm:hover:bg-white sm:hover:text-black text-white border-white":
            variant === "white-bordered",
          "bg-[#3db56d] text-white sm:hover:text-[#3db56d] border-[#3db56d] sm:hover:bg-transparent":
            variant === "light-green-fill",
        },
        {
          "rounded-sm": rounded === "sm",
          "rounded-md": rounded === "md",
          "rounded-lg": rounded === "lg",
          "rounded-none": rounded === "none",
        }
      )}
    >
      {title}
      {children}
    </button>
  );
}

import { cn } from "@/utilities";
import { motion } from "framer-motion";
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
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      className={cn(
        `rounded-full text-nowrap justify-center border-2 tracking-[1px] font-normal px-4 lg:px-8 py-2 lg:py-4 text-sm xl:text-base flex items-center gap-2`,
        {
          // Gradient background for primary-fill with hover border change
          "bg-gradient-to-b from-[#674CEC] to-[#8D77FC] text-white hover:border-[#674CEC] sm:hover:border-[#8D77FC]  ":
            variant === "primary-fill",
          "sm:hover:border-[#8D77FC] sm:hover:text-white text-WH-bg-WH-light-green-01 border-WH-bg-WH-light-green-01":
            variant === "primary-bordered",
          "bg-white text-black sm:hover:text-white hover:border-white sm:hover:bg-transparent":
            variant === "white-fill",
          "sm:hover:bg-white sm:hover:text-black text-white border-white":
            variant === "white-bordered",
          " text-white sm:hover:text-[#3db56d] border-[#3db56d] sm:hover:bg-transparent":
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
      {children}
      {title}
    </motion.button>
  );
}

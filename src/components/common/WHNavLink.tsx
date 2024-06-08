import { cn } from "@/utilities";
import React from "react";
import { Link, useLocation } from "react-router-dom";

type TProps = {
  title?: string;
  to: string;
  isDark?: boolean;
};

export default function WHNavLink({
  title = "No Link Title",
  to,
  isDark,
}: TProps): React.JSX.Element {
  const pathName = useLocation().pathname;

  return (
    <Link
      to={to}
      className={cn(
        "  py-[6px] px-4 text-sm xl:text-base rounded-full border  ",
        {
          "text-black border-white hover:border-white hover:text-WH-light-green-01": isDark && !(pathName === to),
          "text-light-white-F0 bg-white/10 border-white/30 hover:border-WH-light-green hover:text-WH-light-green": !isDark,
        },
        {
          "border-black": pathName === to,
        }
      )}
    >
      {title}
    </Link>
  );
}

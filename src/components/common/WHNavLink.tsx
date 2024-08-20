import { cn } from "@/utilities";
import React, { useEffect, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const pathName = useLocation().pathname;

  useEffect(() => {
    // Update windowWidth state on resize
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Link
      to={to}
      className={cn(
        "py-[6px] px-4 text-sm xl:text-base rounded-full border transition-colors duration-300 ease-in-out",
        {
          // Dark theme styles
          "text-black border-white hover:border-white hover:text-WH-light-green-01":
            isDark && !(pathName === to),
          "bg-white/10 border-white/30 hover:border-WH-light-green hover:text-WH-light-green":
            !isDark,
          // Mobile screen styles
          "text-gray-800": !isDark && windowWidth < 640,
          // Desktop screen styles
          "text-light-white-F0": !isDark && windowWidth >= 1020,
          // Active link styles
          "border-black": pathName === to,
        }
      )}
    >
      {title}
    </Link>
  );
}

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

  const isSmallScreen = windowWidth < 640; // Define small screen width

  return (
    <Link
      to={to}
      className={cn(
        "py-[6px] px-4 text-sm xl:text-base rounded-full transition-colors duration-300 ease-in-out",
        {
          // Small screen styles (no border)
          "bg-gray-100 text-black border-none hover:bg-gray-300":
            isSmallScreen && !isDark,
          "bg-gray-200 text-gray-900 border-none hover:bg-gray-400":
            isSmallScreen && isDark,

          // Larger screen styles (with border)
          "text-black border-gray-400 bg-gray-200 hover:border-white hover:text-white hover:bg-gradient-to-b hover:from-[#674CEC] hover:to-[#8D77FC] border":
            !isSmallScreen && isDark,
          "bg-white/10 border-white/30 hover:border-WH-light-green hover:text-WH-light-green border":
            !isSmallScreen && !isDark,
        }
      )}
    >
      {title}
    </Link>
  );
}

import { cn } from "@/utilities";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type TProps = {
  title?: string;
  to: string;
  isDark?: boolean;
  className?: string;
};

const WHNavLink: React.FC<TProps> = ({
  title = "No Link Title",
  to,
  isDark = false,
  className = "",
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Debounce resize to optimize performance
    const debounceResize = () => {
      clearTimeout(handleResize as unknown as NodeJS.Timeout);
      setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  }, []);

  const isSmallScreen = windowWidth < 640;

  return (
    <Link
      to={to}
      className={cn(
        "py-[6px] px-4 text-sm xl:text-base rounded-full transition-colors duration-300 ease-in-out",
        {
          "bg-gray-100 text-black border-none hover:bg-gray-300":
            isSmallScreen && !isDark,
          "bg-gray-200 text-gray-900 border-none hover:bg-gray-400":
            isSmallScreen && isDark,
          "text-black border-gray-400 bg-gray-200 hover:border-white hover:text-white hover:bg-gradient-to-b hover:from-[#674CEC] hover:to-[#8D77FC] border":
            !isSmallScreen && isDark,
          "bg-white/10 border-white/30 hover:border-WH-light-green hover:text-WH-light-green border":
            !isSmallScreen && !isDark,
        },
        className // Allow custom class names
      )}
    >
      {title}
    </Link>
  );
};

export default WHNavLink;

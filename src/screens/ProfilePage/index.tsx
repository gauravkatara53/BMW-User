import { useEffect, useState } from "react";
import { ProfilePageMobile } from "./ProfilePageMobile";
import { ProfilePageDesktop } from "./ProfilePageDesktop";

export const ProfilePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile ? <ProfilePageMobile /> : <ProfilePageDesktop />;
};

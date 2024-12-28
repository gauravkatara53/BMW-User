import React from "react";
import { FaFire, FaHome, FaWallet } from "react-icons/fa";

interface WHChipProps {
  tag: string; // Type definition for the tag
}

export default function WHChip({ tag }: WHChipProps): React.JSX.Element {
  let chipStyle = "";
  let icon = null;

  // Define styles and icons based on the tag
  if (tag === "New") {
    chipStyle = "bg-[#DBEAFE] text-[#1D4ED8]"; // New tag background and text color
    icon = <FaHome className="mr-2" />; // Home icon for New tag
  } else if (tag === "Best Deal") {
    chipStyle = "bg-[#D1FAE5] text-[#047857]"; // Best Deal tag background and text color
    icon = <FaWallet className="mr-2" />; // Wallet icon for Best Deal tag
  } else {
    chipStyle = "bg-WH-light-red text-[#EF4444]"; // Default style for Popular tag
    icon = <FaFire className="mr-2" />;
  }

  return (
    <div
      className={`text-sm font-medium px-4 py-2 rounded-full ${chipStyle} flex items-center space-x-2`}
    >
      {icon}
      {tag}
    </div>
  );
}

import React from "react";

type TProps = {
  title?: string;
  superHeading?: string;
};

export default function LPSectionHeading({
  superHeading,
  title,
}: TProps): React.JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <div className="bg-WH-gold h-[1px] w-8"></div>
        <p className="text-sm text-WH-gold font-medium">{title}</p>
      </div>
      <p className="ml-10 font-semibold text-deep-blue-1B text-3xl">{superHeading}</p>
    </div>
  );
}

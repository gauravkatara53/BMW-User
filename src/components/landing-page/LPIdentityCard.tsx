import { cn } from "@/utilities";
import React from "react";

type TProps = {
  size?: "small" | "base";
};

export default function LPIdentityCard({
  size = "base",
}: TProps): React.JSX.Element {
  return (
    <div className={cn("flex gap-4 items-center",{
        "gap-4": size==="base",
        "gap-2": size==="small",
    })}>
      <img className={cn({
        "w-8 h-8" : size==="small",
        "w-14 h-14" : size==="base",
      })} src="dummy-user-img-1.png" alt="" />
      <div>
        <p className={cn("",{
            "text-sm": size==="small",
            "text-lg font-medium": size==="base"
        })}>Rishav Bhardwaz</p>
        {size === "base" && (
          <p className="text-sm font-medium text-WH-mild-gray">New Delhi</p>
        )}
      </div>
    </div>
  );
}

import { cn } from "@/utilities";
import React from "react";

type TProps = {
  size?: "small" | "base";
  name?:string,
  img?:string,
  subtitle?:string
};

export default function LPIdentityCard({
  size = "base",
  img,name,subtitle
}: TProps): React.JSX.Element {
  return (
    <div className={cn("flex gap-4 items-center",{
        "gap-4": size==="base",
        "gap-2": size==="small",
    })}>
      <img className={cn({
        "w-8 h-8" : size==="small",
        "w-14 h-14" : size==="base",
      })} src={img} alt="" />
      <div>
        <p className={cn("",{
            "text-sm": size==="small",
            "text-lg font-medium": size==="base"
        })}>{name}</p>
        {size === "base" && (
          <p className="text-sm font-medium text-WH-mild-gray">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

import { cn } from "@/utilities";
import clsx from "clsx";

type TProps = {
  title?: string;
  value?: string;
  color?: "blue" | "violet";
};

export default function APDetailContainer({ title, value, color="blue" }: TProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p
        className={clsx(
          "text-8xl leading-[4rem] font-extrabold text-[#00E5FF]",{
            "text-[#00E5FF]" : color==="blue",
            "text-[#D1C4E9]" : color==="violet",
          }
        )}
      >
        {value}
      </p>
      <p className="text-5xl font-extrabold">{title}</p>
      <div className={cn(" h-6 rounded-full w-[10rem] mt-6 ",{
        "bg-[#00E5FF]":color === "blue",
        "bg-[#651FFF]":color === "violet"
      })}></div>
    </div>
  );
}

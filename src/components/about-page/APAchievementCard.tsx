import { cn } from "@/utilities";

type TProps = {
  value?: string;
  title?: string;
  width?: number;
  height?: number;
  imgUrl?: string;
  gradient?: "TYPE-1" | "TYPE-2" | "TYPE-3";
};

export default function APAchievementCard({
  title,
  value,
  height,
  width,
  imgUrl,
  gradient="TYPE-1"
}: TProps) {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundImage: `url(${imgUrl})`,
      }}
      className="bg-cover bg-center rounded-[1.2rem] overflow-hidden"
    >
      <div
        className={cn(
          "w-full h-full text-white bg-gradient-to-b  p-8 flex flex-col items-center",{
            "from-[#651FFF]/50 to-[#00BCD4]/50": gradient==="TYPE-1",
            "from-[#651FFF]/50 via-[#00E5FF]/50 to-[#FF4081]/50": gradient==="TYPE-2",
            "from-[#B2EBF2]/50 via-[#D1C4E9]/50 to-[#F8BBD0]/50": gradient==="TYPE-3",
          }
        )}
      >
        <p className="text-7xl font-extrabold ">{value}</p>
        <p className="text-3xl font-bold capitalize">{title}</p>
      </div>
    </div>
  );
}

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
  title = "",
  value = "",
  width = 0,
  height = 0,
  imgUrl = "",
  gradient = "TYPE-1",
}: TProps) {
  // Define a mapping for gradients to improve readability
  const gradientClasses = {
    "TYPE-1": "from-[#651FFF]/50 to-[#00BCD4]/50",
    "TYPE-2": "from-[#651FFF]/50 via-[#00E5FF]/50 to-[#FF4081]/50",
    "TYPE-3": "from-[#B2EBF2]/50 via-[#D1C4E9]/50 to-[#F8BBD0]/50",
  };

  return (
    <div
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
        backgroundImage: `url(${imgUrl})`,
      }}
      className="bg-cover bg-center rounded-[1.2rem] overflow-hidden"
    >
      <div
        className={`w-full h-full text-white bg-gradient-to-b p-8 flex flex-col items-center justify-center ${gradientClasses[gradient]}`}
      >
        <p className="text-4xl md:text-7xl font-extrabold">{value}</p>
        <p className="text-xl md:text-3xl font-bold capitalize">{title}</p>
      </div>
    </div>
  );
}

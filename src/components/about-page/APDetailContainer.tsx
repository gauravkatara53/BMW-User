import clsx from "clsx";

type TProps = {
  title?: string;
  value?: string;
  color?: "blue" | "violet";
};

export default function APDetailContainer({
  title,
  value,
  color = "blue",
}: TProps) {
  const textColor = color === "blue" ? "text-[#00E5FF]" : "text-[#D1C4E9]";
  const bgColor = color === "blue" ? "bg-[#00E5FF]" : "bg-[#651FFF]";

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4">
      <p
        className={clsx(
          "text-5xl sm:text-6xl md:text-8xl leading-[3rem] sm:leading-[4rem] font-extrabold",
          textColor
        )}
      >
        {value}
      </p>
      <p className="text-2xl sm:text-3xl md:text-5xl font-extrabold">{title}</p>
      <div
        className={clsx(
          "h-3 sm:h-4 md:h-6 rounded-full w-[6rem] sm:w-[8rem] md:w-[10rem] mt-3 sm:mt-4 md:mt-6",
          bgColor
        )}
      ></div>
    </div>
  );
}

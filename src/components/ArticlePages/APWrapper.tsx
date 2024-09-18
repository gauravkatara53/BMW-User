import { cn } from "@/utilities";
import LPIdentityCard from "../common/IdentityCard";

type TProps = {
  title?: string;
  readTime?: string;
  date?: string;
  img?: string;
  img2?: string;
  name?: string;
  large?: boolean;
  description?: string;
};

export default function APWrapper({
  readTime = "N/A",
  date = "Unknown date",
  title = "No title provided",
  img = "default-image.png",
  name = "Anonymous",
  img2,
  large = false,
  description,
}: TProps): React.JSX.Element {
  return (
    <div
      className={cn("flex sm:gap-6 gap-2", {
        "flex-col xl:flex-row": !large,
        "flex-col": large,
      })}
    >
      <div
        className={cn("relative", {
          "w-full": !large,
          "w-full ": large,
        })}
      >
        <img
          className={cn("rounded-xl object-cover", {
            "w-full h-36 sm:h-48 md:h-64 lg:h-80": !large,
            "w-full h-80 xl:h-full sm:mt-0 mt-18 ": large,
          })}
          src={img2}
          alt={title}
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <LPIdentityCard size="small" img={img} name={name} />
        </div>
        <div className="flex gap-2 items-center sm:ml-auto mt-2 sm:mt-0">
          <img src="clock.png" className="w-4 h-4" alt="Clock icon" />
          <p className="text-WH-mild-gray text-xs sm:text-sm">
            {readTime ? `${readTime} min read` : "N/A"} | {date}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 font-medium">
          {title}
        </p>
        {large && description && (
          <p className="text-gray-400 text-base sm:text-lg mt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

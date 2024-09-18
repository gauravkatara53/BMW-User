import { cn } from "@/utilities";
import LPIdentityCard from "./IdentityCard";

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

export default function LPArticleWrapper({
  readTime = "N/A",
  date = "Unknown date",
  title = "No title provided",
  img = "default-image.png",
  name = "Anonymous",
  img2, // Passed here
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
      <img
        className={cn("rounded-xl object-cover", {
          "h-36": !large,
          "h-80": large,
        })}
        src={img2}
        alt={title}
      />

      <div className="flex flex-col sm:gap-4 gap-2 justify-between">
        {/* Pass UserImg and name props to LPIdentityCard */}
        <LPIdentityCard size="small" img={img} name={name} />
        <p className="md:text-lg font-medium">{title}</p>
        {large && description && (
          <p className="text-WH-light-purple">{description}</p>
        )}
        <div className="flex gap-2 items-center">
          <img
            src="clock.png"
            className="sm:w-auto sm:h-auto w-4 h-4"
            alt="Clock icon"
          />
          <p className="text-WH-mild-gray text-xs sm:text-sm">
            {readTime ? `${readTime} min read` : "N/A"} | {date}
          </p>
        </div>
      </div>
    </div>
  );
}

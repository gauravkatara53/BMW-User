import { cn } from "@/utilities";
import LPIdentityCard from "./LPIdentityCard";

type TProps = {
  title?: string;
  readTime?: string;
  date?: number;
  img?: string;
  large?: boolean;
  description?: string;
};

export default function LPArticleWrapper({
  readTime,
  title,
  img,
  large,
  description,
}: TProps): React.JSX.Element {
  return (
    <div
      className={cn("flex gap-6", {
        "flex-row": !large,
        "flex-col": large,
      })}
    >
      <img className={cn({
        'h-36': !large,
        'h-80': large,
      })} src={img} alt="" />
      <div className="flex flex-col gap-4 justify-between">
        <LPIdentityCard size="small" />
        <p className="text-lg font-medium">{title}</p>
        {large && <p className=" text-WH-light-purple">{description}</p>}
        <div className="flex gap-2">
          <img src="clock.png" alt="" />
          <p className="text-WH-mild-gray">{readTime} min read | 25 Apr 2023</p>
        </div>
      </div>
    </div>
  );
}

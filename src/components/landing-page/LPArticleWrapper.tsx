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
      className={cn("flex sm:gap-6 gap-2 ", {
        "flex-col xl:flex-row": !large,
        "flex-col": large,
      })}
    >
      <img className={cn("rounded-xl object-cover",{
        'h-36': !large,
        'h-80': large,
      })} src={img} alt="" />
      <div className="flex flex-col sm:gap-4 gap-2 justify-between">
        <LPIdentityCard size="small" img="dummy-user-img-3.png" name="Dianne Russell" />
        <p className="md:text-lg font-medium">{title}</p>
        {large && <p className=" text-WH-light-purple">{description}</p>}
        <div className="flex gap-2 items-center">
          <img src="clock.png" className="sm:w-auto sm:h-auto w-4 h-4" alt="" />
          <p className="text-WH-mild-gray text-xs sm:text-sm">{readTime} min read | 25 Apr 2023</p>
        </div>
      </div>
    </div>
  );
}

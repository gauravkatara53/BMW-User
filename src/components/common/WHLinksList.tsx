import { ChevronSVG } from "@/assets/svgs";
import React from "react";

export default function WHLinksList({
  heading,
  links,
}: {
  heading: string;
  links: Array<{ title: string; href: string }>;
}) {
  const [expand, setExpand] = React.useState(false);
  return (
    <div className="">
      <div
        onClick={() => setExpand((x) => !x)}
        className={`flex justify-between border-b-2 sm:border-none border-black/20`}
      >
        <h3 className="text-black text-sm lg:text-base text-nowrap font-bold mb-0 sm:mb-4 ">
          {heading}
        </h3>
        <div className={`sm:hidden flex ${expand ? "rotate-180":"rotate-0"}`}>
          <ChevronSVG />
        </div>
      </div>
      {expand && (
        <div
          className={` sm:hidden flex flex-col gap-1 sm:gap-4 text-sm mt-1 sm:mt-0`}
        >
          {links.map((link, i) => (
            <a key={`LINK_${link.title}_${i}`} href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      )}
      <div className={` sm:flex hidden flex-col gap-4 text-sm `}>
        {links.map((link, i) => (
          <a key={`LINK_B_${link.title}_${i}`} href={link.href}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
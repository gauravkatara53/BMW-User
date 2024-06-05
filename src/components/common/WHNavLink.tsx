import React from "react";

type TProps = {
  title?: string;
};
export default function WHNavLink({
  title = "No Link Title",
}: TProps): React.JSX.Element {
  return (
    <a href="#" className="text-light-white-F0 bg-white/10 py-[6px] px-4 text-sm xl:text-base rounded-full border border-white/30 hover:border-WH-light-green hover:text-WH-light-green">
      {title}
    </a>
  );
}

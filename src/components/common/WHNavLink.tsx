import React from "react";
import { Link } from "react-router-dom";

type TProps = {
  title?: string;
  to: string;
};

export default function WHNavLink({
  title = "No Link Title",
  to,
}: TProps): React.JSX.Element {
  return (
    <Link
      to={to}
      className="text-light-white-F0 bg-white/10 py-[6px] px-4 text-sm xl:text-base rounded-full border border-white/30 hover:border-WH-light-green hover:text-WH-light-green"
    >
      {title}
    </Link>
  );
}


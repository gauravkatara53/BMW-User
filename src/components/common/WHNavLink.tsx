import React from "react";

type TProps = {
  title?: string;
};
export default function WHNavLink({
  title = "No Link Title",
}: TProps): React.JSX.Element {
  return (
    <div className="text-light-white-F0 bg-white/10 py-[6px] px-4 rounded-full border border-white/30">
      {title}
    </div>
  );
}

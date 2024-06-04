import React from "react";
import WHFillButton from "../common/WHFillButton";
import { cn } from "@/utilities";

type TProps = {
  buttonTitle?: string;
  placeholder?: string;
  iconUrl?: string;
  buttonChild?: React.JSX.Element;
};

export default function LPSearchBar({
  buttonTitle = "",
  iconUrl,
  placeholder,
  buttonChild,
}: TProps) {
  const [inputFocus, setInputFocus] = React.useState<boolean>(false);
  return (
    <div
      className={cn(
        "border border-WH-light-gray flex rounded-full items-center overflow-hidden pl-6 pr-1 py-1 bg-white",
        {
          "border-WH-light-green-01": inputFocus,
        }
      )}
    >
      <img src={iconUrl} alt="" />
      <input
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        className="flex-1 px-3 text-sm lg:text-base outline-none focus:outline-none"
        type="text"
        placeholder={placeholder}
        name=""
        id=""
      />
      <div className="hidden sm:flex">
      <WHFillButton title={buttonTitle}>{buttonChild}</WHFillButton>

      </div>

      
    </div>
  );
}

import React, { useState } from "react";
import WHFillButton from "../common/WHFillButton";
import { cn } from "@/utilities";
import { toast } from "react-toastify"; // Import toast library

type TProps = {
  buttonTitle?: string;
  placeholder?: string;
  iconUrl?: string;
  buttonChild?: React.JSX.Element;
};

export default function LPSearchBar({
  buttonTitle = "Subscribe",
  iconUrl,
  placeholder = "Enter your email",
  buttonChild,
}: TProps) {
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = () => {
    if (email) {
      // Add your subscription logic here, e.g., API call
      toast.success("Successfully subscribed!"); // Show success toast
      setEmail(""); // Clear the input field after successful subscription
    } else {
      toast.error("Please enter a valid email address."); // Show error toast if email is empty
    }
  };

  return (
    <div className="flex sm:block w-full flex-col items-center gap-4">
      <div
        className={cn(
          "border border-WH-light-gray flex rounded-full w-[18rem] xs:w-[20rem] sm:w-auto items-center overflow-hidden pl-2 sm:pl-6 pr-2 py-2 bg-white",
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
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
        />
        <div className="hidden sm:flex">
          <WHFillButton title={buttonTitle} onClick={handleSubscribe}>
            {buttonChild}
          </WHFillButton>
        </div>
      </div>
      <div className="flex sm:hidden">
        <WHFillButton title={buttonTitle} onClick={handleSubscribe} />
      </div>
    </div>
  );
}

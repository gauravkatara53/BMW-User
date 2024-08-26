import React, { useState, useCallback } from "react";
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
  const [inputFocus, setInputFocus] = useState(false);
  const [email, setEmail] = useState("");

  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Memoize the handleSubscribe function to avoid unnecessary re-creations
  const handleSubscribe = useCallback(() => {
    if (email.trim()) {
      if (emailRegex.test(email)) {
        // If email is valid, proceed with subscription logic
        toast.success("Successfully subscribed!"); // Show success toast
        setEmail(""); // Clear the input field after successful subscription
      } else {
        // Show error toast if email format is invalid
        toast.error("Please enter a valid email address.");
      }
    } else {
      // Show error toast if email is empty
      toast.error("Please enter a valid email address.");
    }
  }, [email]);

  const handleInputFocus = () => setInputFocus(true);
  const handleInputBlur = () => setInputFocus(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return (
    <div className="flex sm:block w-full flex-col items-center gap-4">
      <div
        className={cn(
          "border border-WH-light-gray flex rounded-full w-[18rem] xs:w-[20rem] sm:w-auto items-center overflow-hidden pl-2 sm:pl-6 pr-2 py-2 bg-white",
          { "border-WH-light-green-01": inputFocus }
        )}
      >
        {iconUrl && <img src={iconUrl} alt="Search icon" />}{" "}
        {/* Add meaningful alt text */}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="flex-1 px-3 text-sm lg:text-base outline-none focus:outline-none"
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={handleInputChange}
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

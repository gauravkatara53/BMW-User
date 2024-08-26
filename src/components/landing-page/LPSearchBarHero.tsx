import React, { useState, useCallback } from "react";
import WHFillButton from "../common/WHFillButton";
import { cn } from "@/utilities";
import { LOCATION } from "../../data/landing-page/LOCATION";

type TProps = {
  buttonTitle?: string;
  placeholder?: string;
  iconUrl?: string;
  buttonChild?: React.JSX.Element;
};

export default function LPSearchBar({
  buttonTitle = "Search",
  iconUrl,
  placeholder = "Enter location",
  buttonChild,
}: TProps) {
  const [inputFocus, setInputFocus] = useState(false);
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setLocation(value);

      if (value.length > 0) {
        const filteredCities = LOCATION.filter((city) =>
          city.toLowerCase().startsWith(value.toLowerCase())
        );
        setSuggestions(filteredCities);
      } else {
        setSuggestions([]);
      }
    },
    []
  );

  const handleSuggestionClick = useCallback((city: string) => {
    setLocation(city);
    setSuggestions([]);
  }, []);

  const handleInputFocus = () => setInputFocus(true);
  const handleInputBlur = () => setInputFocus(false);

  return (
    <div className="flex sm:block w-full flex-col items-center gap-4 relative">
      <div
        className={cn(
          "border border-WH-light-gray flex rounded-full w-[18rem] xs:w-[20rem] sm:w-auto items-center overflow-hidden pl-2 sm:pl-6 pr-2 py-2 bg-white",
          { "border-WH-light-green-01": inputFocus }
        )}
      >
        {iconUrl && <img src={iconUrl} alt="Icon" />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="flex-1 px-3 text-sm lg:text-base outline-none focus:outline-none"
          type="text"
          placeholder={placeholder}
          value={location}
          onChange={handleInputChange}
          name="location"
          id="location"
        />
        <div className="hidden sm:flex">
          <WHFillButton title={buttonTitle}>{buttonChild}</WHFillButton>
        </div>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 top-full left-0 w-full bg-white border border-WH-light-gray rounded-lg shadow-lg">
          {suggestions.map((city) => (
            <li
              key={city}
              className="px-4 py-2 cursor-pointer hover:bg-WH-light-green-01"
              onClick={() => handleSuggestionClick(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
      <div className="flex sm:hidden">
        <WHFillButton title={buttonTitle} />
      </div>
    </div>
  );
}

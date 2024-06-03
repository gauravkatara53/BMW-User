import ChevronWhiteSVG from "../common/WHChevronWhiteSVG";
import WHFillButton from "../common/WHFillButton";

export default function LPSearchBar() {
  return (
    <div className="border border-WH-light-gray flex rounded-full items-center overflow-hidden pl-4 pr-1 py-1 bg-white">
      <img src="location-pin.png" alt="" />
      <input
        className="flex-1 px-4"
        type="text"
        placeholder="Search for the location you want!"
        name=""
        id=""
      />
      <WHFillButton title="Search">
        <ChevronWhiteSVG />
      </WHFillButton>
    </div>
  );
}

import WHFillButton from "../common/WHFillButton";

type TProps = {
buttonTitle?:string,
placeholder?:string,
iconUrl?:string,
buttonChild?:React.JSX.Element
}

export default function LPSearchBar({buttonTitle="",iconUrl,placeholder,buttonChild}:TProps) {
  return (
    <div className="border border-WH-light-gray flex rounded-full items-center overflow-hidden pl-6 pr-1 py-1 bg-white ">
      <img src={iconUrl} alt="" />
      <input
        className="flex-1 px-3 focus:outline-none"
        type="text"
        placeholder={placeholder}
        name=""
        id=""
      />
      <WHFillButton title={buttonTitle}>
        {buttonChild}
      </WHFillButton>
    </div>
  );
}

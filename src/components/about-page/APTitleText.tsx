type TProps = {
  text?: string;
};

export default function APTitleText({ text }: TProps) {
  return (
    <div className=" xl:bottom-[-0.2rem] lg:bottom-[-0.3rem] md:bottom-[-0.7rem] sm:bottom-[-1rem] xs:bottom-[-1.3rem] bottom-[-1.8rem] left-14 xs:left-24 sm:left-28 md:left-32 lg:left-44 xl:left-60 flex flex-col gap-6 items-start">
      <p className="text-[1.3rem] xs:text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4.5rem] xl:leading-[5.5rem] text-black font-bold ">
        {text}
      </p>
      <div className="flex gap-3">
        <div className="w-4 h-4 bg-gradient-to-br from-[#84FFFF] via-[#D1C4E9] to-[#F8BBD0] rounded-full"></div>
        <div className="w-24 h-4 bg-gradient-to-br from-[#84FFFF] via-[#D1C4E9] to-[#F8BBD0] rounded-full"></div>
      </div>
    </div>
  );
}

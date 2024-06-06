type TProps = {
  bgTitle?: string;
  smallTitle?: string;
};

export default function APSectionHeading({ bgTitle, smallTitle }: TProps) {
  return (
    <div className="relative box-border">
      <p className="font-bold text-[#B2EBF2] text-[3rem] xs:text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem]">
        {bgTitle}
      </p>
      <div className="absolute xl:bottom-[-0.2rem] lg:bottom-[-0.3rem] md:bottom-[-0.7rem] sm:bottom-[-1rem] xs:bottom-[-1.3rem] bottom-[-1.8rem] left-14 xs:left-24 sm:left-28 md:left-32 lg:left-44 xl:left-60 flex flex-col gap-6 items-center">
        <p className="text-[1.3rem] xs:text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[6rem] text-black font-bold ">
          {smallTitle}
        </p>
        <div className="flex gap-3">
          <div className="w-4 h-4 bg-gradient-to-br from-[#84FFFF] via-[#D1C4E9] to-[#F8BBD0] rounded-full"></div>
          <div className="w-24 h-4 bg-gradient-to-br from-[#84FFFF] via-[#D1C4E9] to-[#F8BBD0] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

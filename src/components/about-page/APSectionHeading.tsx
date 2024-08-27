type TProps = {
  bgTitle?: string;
  smallTitle?: string;
};

export default function APSectionHeading({ bgTitle, smallTitle }: TProps) {
  return (
    <div className="relative box-border">
      <p className="font-bold text-[#B2EBF2] text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem]">
        {bgTitle}
      </p>
      <div className="absolute bottom-[-1.8rem] xs:bottom-[-1.3rem] sm:bottom-[-1rem] md:bottom-[-0.7rem] lg:bottom-[-0.3rem] xl:bottom-[-0.2rem] left-14 xs:left-24 sm:left-28 md:left-32 lg:left-44 xl:left-60 flex flex-col gap-6 items-center">
        <p className="text-[1.3rem] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-bold">
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

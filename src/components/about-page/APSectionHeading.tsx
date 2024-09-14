type TProps = {
  bgTitle: string;
  smallTitle: string;
};

export default function APSectionHeading({ bgTitle, smallTitle }: TProps) {
  return (
    <div className="relative box-border text-center">
      {/* Gradient text for bgTitle */}
      <p className="font-bold text-transparent opacity-40 bg-clip-text bg-gradient-to-br from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0] text-6xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem]">
        {bgTitle}
      </p>
      {/* Small title */}
      <div className="absolute bottom-[-0.5rem] xs:bottom-[-0.3rem] sm:bottom-[-0.5rem] md:bottom-[-1rem] lg:bottom-[-1rem] xl:bottom-[-0.8rem] left-10 xs:left-14 sm:left-20 md:left-32 lg:left-44 xl:left-60 flex flex-col gap-3 xs:gap-4 sm:gap-5 items-center">
        <p className="mt-3 xs:mt-4 sm:mt-5 text-black font-bold text-[1.5rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-5xl xl:text-6xl">
          {smallTitle}
        </p>
      </div>
    </div>
  );
}

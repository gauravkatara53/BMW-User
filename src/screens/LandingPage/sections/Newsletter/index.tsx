import WHFillButton from "@/components/common/WHFillButton";

export default function Newsletter() {
  return (
    <div className="relative">
      <img
        className="hidden md:block absolute top-0 left-0 z-[-10]"
        src="Vector-more.png"
        alt=""
      />
      <div className="">
        <div
          style={{ backgroundImage: "url(newsletter-bg.png)" }}
          className="mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 bg-no-repeat bg-center bg-cover w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[85%] flex flex-col items-center justify-center h-[18rem] sm:h-[20rem] md:h-[22rem] lg:h-[24rem] xl:h-[23rem] rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-[2rem] p-4 sm:p-8 xl:p-0"
        >
          <h3 className="text-center text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-deep-blue-1B max-w-full sm:max-w-[40rem] md:max-w-[50rem] lg:max-w-[55rem] xl:max-w-[60rem] leading-tight sm:leading-normal md:leading-relaxed xl:leading-none py-2 sm:py-4 md:py-6 xl:py-8">
            <p className="py-1">Having A Warehouse?</p>
            <p>Partner Up With Us?</p>
            <div className="flex justify-center pt-6">
              <WHFillButton title="Become a Host" />
            </div>
          </h3>
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5"></div>
        </div>
      </div>
    </div>
  );
}

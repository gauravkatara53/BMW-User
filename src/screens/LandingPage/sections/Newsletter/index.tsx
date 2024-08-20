import LPSearchBar from "@/components/landing-page/LPSearchBar";

export default function Newsletter() {
  return (
    <div
      style={{ backgroundImage: "url(newsletter-bg.png)" }}
      className="mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 bg-no-repeat bg-center bg-cover w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[85%] flex flex-col items-center justify-center h-[18rem] sm:h-[20rem] md:h-[22rem] lg:h-[24rem] xl:h-[23rem] rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-[2rem] p-4 sm:p-8 xl:p-0"
    >
      <h3 className="text-center text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-deep-blue-1B max-w-full sm:max-w-[40rem] md:max-w-[50rem] lg:max-w-[55rem] xl:max-w-[60rem] leading-tight sm:leading-normal md:leading-relaxed xl:leading-none py-2 sm:py-4 md:py-6 xl:py-8">
        <p>Subscribe for more Info</p>
        <p>And Updates From Warehouse On Hire</p>
      </h3>
      <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5">
        <LPSearchBar
          iconUrl="mail.png"
          buttonTitle="Subscribe Now"
          placeholder="Your Email here"
        />
      </div>
    </div>
  );
}

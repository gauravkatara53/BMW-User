import APTitleText from "@/components/about-page/APTitleText";

export default function Hero() {
  return (
    <div className="mt-40 lg:px-32 md:px-16 sm:px-8 px-4">
      <img className="w-full h-[20rem] rounded-[3rem] mx-auto" src="about-hero-bg.png" alt="" />
      <div className="mt-[-13rem] ml-4 sm:ml-8 flex flex-col md:flex-row justify-between w-full items-center">
        <div className="max-w-full md:max-w-[40rem] mb-4 md:mb-0">
          <APTitleText text="Find the warehouse of your dreams" />
        </div>
        <img className="w-full md:w-auto" src="video-dummy.png" alt="" />
      </div>
    </div>
  );
}
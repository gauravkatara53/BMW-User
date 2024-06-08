import APTitleText from "@/components/about-page/APTitleText";

export default function Hero() {
  return (
    <div className="mt-40 lg:px-32 md:px-16 sm:px-8 px-4">
      <img className="w-[90%] h-[20rem] rounded-[3rem]" src="about-hero-bg.png" alt="" />
      <div className="-mt-[13rem] ml-8 flex justify-between w-full items-center">
        <div className="max-w-[40rem] ">
          <APTitleText text="Find the warehouse of your dreams" />
        </div>
        <img src="video-dummy.png" alt="" />
      </div>
    </div>
  );
}

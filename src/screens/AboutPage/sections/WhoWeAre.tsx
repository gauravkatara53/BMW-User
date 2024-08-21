import APAchievementCard from "@/components/about-page/APAchievementCard";
import APSectionHeading from "@/components/about-page/APSectionHeading";

export default function WhoWeAre() {
  return (
    <div className="flex flex-col items-center lg:px-32 md:px-16 sm:px-8 px-4 gap-8 mt-0">
      <APSectionHeading bgTitle="COMPANY" smallTitle="Who we are?" />
      <div className="w-full bg-WH-light-pink/30 rounded-[5rem] flex flex-col lg:flex-row lg:p-16 p-4 overflow-hidden lg:overflow-visible">
        <div className="flex-1 flex flex-col gap-8 lg:pr-16">
          <p className="text-lg font-normal text-black/80 px-4 pt-1">
            At Book My Warehouse, we provide flexible and secure warehouse
            solutions tailored to your business needs. Our tech-driven platform
            simplifies storage management, allowing you to book and monitor
            space in real-time.
          </p>
          <p className="text-lg font-normal text-black/70 px-4">
            We're more than just a storage provider—we're your strategic partner
            in ensuring efficient inventory management, helping your business
            grow and thrive.
          </p>
          <div className="flex items-center justify-center lg:justify-start mt-4 lg:mt-0">
            <img src="quote.png" alt="" className="w-12 h-12 lg:mr-4" />
            <p className="italic font-semibold text-xl lg:text-2xl text-center lg:text-left lg:-mt-[1.5rem]">
              Effortless Storage Solutions for Every Business
            </p>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:relative lg:flex-row lg:items-center lg:justify-end">
          <div className="lg:absolute lg:top-0 lg:right-1/2 lg:translate-x-1/2">
            <APAchievementCard
              imgUrl="article1.png"
              title="Developers"
              value="300+"
              height={250}
              width={250}
            />
          </div>
          <div className="lg:absolute lg:top-2/4 lg:right-0">
            <APAchievementCard
              imgUrl="article1.png"
              title="Founded on"
              value="2011"
              width={250}
              height={200}
              gradient="TYPE-2"
            />
          </div>
          <div className="lg:absolute lg:bottom-3/4 lg:right-0">
            <APAchievementCard
              imgUrl="article1.png"
              title="Projects"
              value="1000+"
              width={250}
              height={200}
              gradient="TYPE-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

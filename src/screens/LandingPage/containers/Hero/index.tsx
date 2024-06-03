import WHNavbar from "@/components/common/WHNavbar";
import LPAchievementCard from "@/components/landing-page/LPAchievementCard";
import LPSearchBar from "@/components/landing-page/LPSearchBar";

export default function Hero() {
  return (
    <div className="pl-32">
      <WHNavbar />
      <div className="flex justify-between relative -z-10">
        <img
          className="absolute top-[-12rem] left-[-24rem] -z-20"
          src="green-blur-blob.png"
          alt=""
        />
        <div className="max-w-[37rem] mt-48 flex flex-col gap-8">
          <div className="capitalize text-5xl text-deep-blue-1B font-bold flex flex-col gap-4">
            <p>find the warehouse of</p>
            <p>your dreams</p>
            <p>easily here</p>
          </div>
          <p className="text-WH-light-purple text-lg">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>
          <LPSearchBar />
          <div>
            <h4 className="text-WH-light-purple text-lg mb-2">
              Our Partnership
            </h4>
            <div className="flex items-center gap-12">
              <img src="traveloka.png" alt="" />
              <img src="ticket.png" alt="" />
              <img src="airbnb.png" alt="" />
              <img src="tripadvisor.png" alt="" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="hero.png" alt="" />
          <div className="absolute bottom-11 left-11 flex gap-4 overflow-hidden">
            <LPAchievementCard
              subtitle="Successfully Getting Home"
              title="1K+ People"
              images={[
                "dummy-user-img-1.png",
                "dummy-user-img-2.png",
                "dummy-user-img-3.png",
              ]}
            />
            <LPAchievementCard
              subtitle="Sold monthly"
              title="56 Houses"
              images={[
                "dummy-resort.png",
              ]}
            />
            <LPAchievementCard
              subtitle="Peoples looking for new home"
              title="4K+"
              images={[
                "dummy-user-img-4.png",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

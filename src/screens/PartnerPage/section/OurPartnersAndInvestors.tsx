import APDetailContainer from "@/components/about-page/APDetailContainer";

export default function OurPartnersAndInvestors() {
  return (
    <div
      style={{
        backgroundImage: "url(partner-bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex flex-col gap-4 items-center lg:mx-32 md:mx-16 sm:mx-8 mx-4 p-8 sm:p-16 rounded-[7rem] sm:rounded-[2rem] md:rounded-[7rem]"
    >
      <p className="text-white text-3xl sm:text-6xl font-extrabold text-center">
        Our Partners and Investors
      </p>
      <p className="text-sm sm:text-lg text-white font-normal text-center">
        Cras convallis lacus orci, tristique tincidunt magna consequat in. In
        vel pulvinar est, at euismod libero.
      </p>
      <div className="h-[10rem] sm:h-[20rem]"></div>
      <div className="flex flex-col sm:flex-row text-2xl sm:text-6xl justify-between w-full text-white gap-4 overflow-auto">
        <APDetailContainer title="Investors" value="123" />
        <APDetailContainer title="Funded" value="$123M" color="violet" />
        <APDetailContainer title="Partners" value="456" />
      </div>
    </div>
  );
}

import APDetailContainer from "@/components/about-page/APDetailContainer";
import "./OurOartnersAndInvestor.css";

const logos = [
  "/logo11.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
  "/logo10.png",
];

export default function OurPartnersAndInvestors() {
  return (
    <div
      style={{
        backgroundImage: "url(partner-bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex flex-col gap-4 items-center lg:mx-32 md:mx-16 sm:mx-8 mx-4 p-8 sm:p-16 rounded-[3rem] sm:rounded-[2rem] md:rounded-[7rem] justify-center"
    >
      <p className="text-white text-3xl sm:text-6xl font-extrabold text-center">
        Our Partners
      </p>
      <p className="text-sm sm:text-lg text-white font-normal text-center">
        "Empowering Success Through Strong Partnerships"
      </p>

      {/* Logo section */}
      <div className="relative w-full overflow-hidden h-[4rem] sm:h-[6rem]  flex my-[10%]">
        <div className="logo-scroll flex gap-8">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-full object-contain"
            />
          ))}
        </div>
      </div>

      {/* Other content below the logos */}
      <div className="flex flex-col sm:flex-row text-2xl sm:text-6xl justify-between w-full text-white gap-4 overflow-auto ">
        <APDetailContainer title="Clients" value="900+" />
        <APDetailContainer title="Revenue" value="$123M" color="violet" />
        <APDetailContainer title="Partners" value="500+" />
      </div>
    </div>
  );
}

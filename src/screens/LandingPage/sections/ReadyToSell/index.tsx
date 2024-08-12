import PhoneSVG from "@/assets/svgs/PhoneSVG";
import WHFillButton from "@/components/common/WHFillButton";
import LPHouseDetailChip from "@/components/landing-page/LPHouseDetailChip";
import LPIdentityCard from "@/components/landing-page/LPIdentityCard";
import LPSectionHeading from "@/components/landing-page/LPSectionHeading";

const PROPERTY_DETAILS = [
  {
    img: "bed.png",
    text: "1400 Sq. Meter",
  },
  {
    img: "bathtub.png",
    text: "2 Bathrooms",
  },
  {
    img: "car.png",
    text: "1 Carport",
  },
  {
    img: "stairs.png",
    text: "5 Floors",
  },
];

export default function ReadyToSell() {
  return (
    <div className="flex md:flex-row flex-col items-center lg:px-32 md:px-16 sm:px-8 px-4 gap-16 justify-between relative">
      <div className="flex flex-col gap-4">
        <LPSectionHeading
          superHeading="Let’s tour and see our Warehouse!"
          title="Ready to Sell!"
        />
        <div className="md:ml-10 flex flex-col gap-8 xl:max-w-[30rem] max-w-[40rem]">
          <p className="text-WH-light-purple sm:text-start text-center ">
            Warehouses recommended by our partners that have been curated to
            become the office of your dreams!
          </p>
          <p className="font-semibold text-deep-blue-1B sm:text-start text-center">
            House Detail
          </p>
          <div className="grid grid-cols-2 gap-8 border-b-2 pb-10 border-WH-light-purple/10">
            {PROPERTY_DETAILS.map((property, i) => (
              <LPHouseDetailChip
                key={`READY_TO_SELL_PROPERTY_${i}`}
                img={property.img}
                text={property.text}
              />
            ))}
          </div>
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between">
            <LPIdentityCard
              changeDirnSmall
              img="dummy-user-img-2.png"
              name="James Smith"
              subtitle="Owner"
            />
            <div className="flex flex-col sm:items-end items-center w-full">
              <WHFillButton
                title="Contact Now"
                onClick={() =>
                  (window.location.href = "mailto:care@bookmywarehouse.ac.in")
                }
              >
                <PhoneSVG />
              </WHFillButton>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="red-yellow-blur-blob.png"
          className="absolute md:-top-64 md:-right-0 top-96 left-[-10rem] -z-10"
          alt=""
        />
        <img src="ready-to-sell-dummy.png" alt="" />
      </div>
    </div>
  );
}

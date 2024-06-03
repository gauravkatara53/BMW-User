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
    img: "bathtub.png",
    text: "5 Floors",
  },
];

export default function ReadyToSell() {
  return (
    <div className="flex px-32 justify-between relative">
      <img
        src="red-yellow-blur-blob.png"
        className="absolute -top-64 -right-0 -z-10"
        alt=""
      />
      <div className="flex flex-col gap-4">
        <LPSectionHeading
          superHeading="Let’s tour and see our Warehouse!"
          title="Ready to Sell!"
        />
        <div className="ml-10 flex flex-col gap-8 max-w-[30rem]">
          <p className="text-WH-light-purple ">
            Warehouses recommended by our partners that have been curated to
            become the office of your dreams!
          </p>
          <p className="font-semibold text-deep-blue-1B">House Detail</p>
          <div className="grid grid-cols-2 gap-8 border-b-2 pb-10 border-WH-light-purple/10">
            {PROPERTY_DETAILS.map((property, i) => (
              <LPHouseDetailChip
                key={`READY_TO_SELL_PROPERTY_${i}`}
                img={property.img}
                text={property.text}
              />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <LPIdentityCard img="dummy-user-img-2.png" name="James Smith" subtitle="Owner"/>
            <WHFillButton title="Contact Now">
              <PhoneSVG />
            </WHFillButton>
          </div>
        </div>
      </div>
      <div>
        <img src="ready-to-sell-dummy.png" alt="" />
      </div>
    </div>
  );
}

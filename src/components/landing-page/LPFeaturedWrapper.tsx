import WHChip from "../common/WHChip";
import LPIdentityCard from "./LPIdentityCard";

export default function LPFeaturedWrapper({
  propertyName,
  price,
  img,
  ownerImage,
  ownerName,
  place,
}: LPFeatured) {
  return (
    <div className="flex flex-col gap-4 ml-10">
      <div className="relative">
        <img src={img} alt="" />
        <div className="absolute bottom-4 left-4">
          <WHChip />
        </div>
      </div>
      <div>
        <p className="text-2xl text-deep-blue-1B font-medium">{propertyName}</p>
        <p className="text-WH-dark-gray text-lg font-medium">Rs. {price}</p>
      </div>
      <LPIdentityCard img={ownerImage} name={ownerName} subtitle={place} />
    </div>
  );
}

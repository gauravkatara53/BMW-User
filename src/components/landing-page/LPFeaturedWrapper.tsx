import WHChip from "../common/WHChip";
import LPIdentityCard from "./LPIdentityCard";

export default function LPFeaturedWrapper() {
  return (
    <div className="flex flex-col gap-4 ml-10">
      <div className="relative">
        <img src="dummy-featured1.png" alt="" />
        <div className="absolute bottom-4 left-4">
          <WHChip />
        </div>
      </div>
      <div>
        <p className="text-2xl text-deep-blue-1B font-medium">
          Highlands Warehouse
        </p>
        <p className="text-WH-dark-gray text-lg font-medium">Rs. 350,000.00</p>
      </div>
      <LPIdentityCard />
    </div>
  );
}

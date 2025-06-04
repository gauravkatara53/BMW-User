import React, { memo } from "react";
import WHChip from "../common/WHChip";
import LPIdentityCard from "../common/IdentityCard";

interface LPFeatured {
  propertyName: string;
  price: number | string;
  img: string;
  ownerImage: string;
  ownerName: string;
  place: string;
  tag: string;
}

const LPFeaturedWrapper: React.FC<LPFeatured> = memo(
  ({
    propertyName,
    price,
    img,
    ownerImage,
    ownerName,
    place,
    tag,
  }: LPFeatured) => {
    return (
      <div className="flex flex-col sm:items-start items-center gap-4 md:ml-10">
        <div className="relative">
          {/* Added meaningful alt text */}
          <img
            src={img}
            alt={`Property image of ${propertyName}`}
            className="w-[300px] h-[200px] object-cover rounded-md"
          />

          <div className="absolute bottom-4 left-4">
            <WHChip tag={tag} />
          </div>
        </div>
        {/* Combined similar class names */}
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-lg md:text-xl text-deep-blue-1B font-medium">
            {propertyName}
          </p>
          <p className="text-green-700 text-sm md:text-lg font-medium">
            Rs. {price}
          </p>
        </div>
        <LPIdentityCard
          changeDirnSmall
          img={ownerImage}
          name={ownerName}
          subtitle={place}
        />
      </div>
    );
  }
);

export default LPFeaturedWrapper;

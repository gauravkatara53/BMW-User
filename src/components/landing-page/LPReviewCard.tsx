import LPIdentityCard from "./LPIdentityCard";

export default function LPReviewCard({
  rating,
  review,
  reviewTitle,
  reviewerImage,
  reviewerName,
  reviewerdes,
  bgImageUrl,
}: LPReview) {
  return (
    <div className="relative w-[40rem] h-[32rem]">
      <img className="w-full h-[20rem] rounded-[1.2rem]" src={bgImageUrl} alt="" />
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-4/5 bg-white p-8 rounded-2xl flex flex-col gap-6 shadow-xl">
        <p className="text-xl font-semibold text-deep-blue-1B">{reviewTitle}</p>
        <p className="text-sm text-WH-light-purple ">{review}</p>
        <div className="flex justify-between">
          <LPIdentityCard
            img={reviewerImage}
            name={reviewerName}
            subtitle={reviewerdes}
          />
          <div className="flex gap-2 items-center">
            <img src="star.png" alt="" />
            <p className="font-semibold text-xl ">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

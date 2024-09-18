import LPIdentityCard from "../common/IdentityCard";

type LPReviewProps = {
  rating?: number;
  review?: string;
  reviewTitle?: string;
  reviewerImage?: string;
  reviewerName?: string;
  reviewerdes?: string;
  bgImageUrl?: string;
};

export default function LPReviewCard({
  rating = 0,
  review = "",
  reviewTitle = "",
  reviewerImage = "",
  reviewerName = "",
  reviewerdes = "",
  bgImageUrl = "",
}: LPReviewProps) {
  return (
    <div className="relative lg:w-[40rem] md:w-[35rem] h-[32rem]">
      {bgImageUrl && (
        <img
          className="w-full h-[20rem] rounded-[1.2rem] object-cover"
          src={bgImageUrl}
          alt="Background"
        />
      )}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-5/6 sm:w-4/5 bg-white p-8 rounded-2xl flex flex-col gap-6 shadow-xl">
        {reviewTitle && (
          <p className="text-lg lg:text-xl font-semibold text-deep-blue-1B">
            {reviewTitle}
          </p>
        )}
        {review && (
          <p className="text-xs lg:text-sm text-WH-light-purple">{review}</p>
        )}
        <div className="flex justify-between items-center">
          <LPIdentityCard
            img={reviewerImage}
            name={reviewerName}
            subtitle={reviewerdes}
          />
          <div className="flex gap-2 items-center">
            <img
              src="star.png"
              className="w-4 sm:w-auto h-4 sm:h-auto"
              alt="Star rating"
            />
            <p className="font-semibold text-base lg:text-xl">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

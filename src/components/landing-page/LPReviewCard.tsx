import LPIdentityCard from "./LPIdentityCard";

export default function LPReviewCard() {
  return (
    <div className="relative w-[40rem]">
      <img className="w-full" src="article4.png" alt="" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-4/5 bg-white p-8 rounded-2xl flex flex-col gap-6 shadow-xl">
        <p className="text-xl font-semibold text-deep-blue-1B">
          Best! I got the warehouse I wanted through Warehouse on Hire
        </p>
        <p className="text-sm text-WH-light-purple ">
          Through this website I can get a house with the type and
          specifications I want very easily, without a complicated process to be
          able to find information on the house we want.
        </p>
        <div className="flex justify-between">
            <LPIdentityCard img="dummy-user-img-1.png" name="Dianne Russell" subtitle="Manager Director"/>
            <div className="flex gap-2 items-center">
                <img src="star.png" alt="" />
                <p className="font-semibold text-xl ">4.5</p>
            </div>
        </div>
      </div>
    </div>
  );
}

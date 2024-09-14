import cuckoo from "../../../../public/cuckoo.jpeg";
import launch from "../../../../public/launch.jpeg";
import moneybag from "../../../../public/moneybag.jpeg";

const GeteverythingDone = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-white lg:px-32 md:px-16 sm:px-8 px-4 w-full">
      <h1 className="text-4xl md:text-5xl font-bold mb-28 mt-6 text-center">
        Get Everything Done
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 justify-between w-full">
        <div className="relative flex flex-col items-center md:items-start bg-white rounded-lg ">
          <img
            src={launch}
            alt="Check Circle Icon"
            className="w-16 h-16 md:w-24 md:h-24 mb-4"
          />
          <h2 className="text-lg md:text-lg font-semibold mb-2 text-center md:text-left w-full">
            Skyrocket conversion rate
          </h2>
          <p className="text-gray-500 text-center md:text-left w-full">
            Increase online store conversion up to 25% with our online visual
            merchandising interface.
          </p>
        </div>
        <div className="relative flex flex-col items-center md:items-start bg-white rounded-lg ">
          <img
            src={moneybag}
            alt="Clock Icon"
            className="w-16 h-16 md:w-24 md:h-24 mb-4"
          />
          <h2 className="text-lg md:text-lg font-semibold mb-2 text-center md:text-left w-full">
            Increase average order value
          </h2>
          <p className="text-gray-500 text-center md:text-left w-full">
            Increase the average order value of your online store up to 15%
            easily.
          </p>
        </div>
        <div className="relative flex flex-col items-center md:items-start bg-white rounded-lg ">
          <img
            src={cuckoo}
            alt="Tasks Icon"
            className="w-16 h-16 md:w-24 md:h-24 mb-4"
          />
          <h2 className="text-lg md:text-lg font-semibold mb-2 text-center md:text-left w-full">
            Spend less time for management
          </h2>
          <p className="text-gray-500 text-center md:text-left w-full">
            Let your employees spend much less time managing the online store
            catalog.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeteverythingDone;

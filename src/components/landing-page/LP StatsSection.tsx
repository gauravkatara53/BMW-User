export default function StatsSection() {
  return (
    <section className="bg-[#F6F4FB] py-10">
      <div className="flex flex-col md:flex-row justify-around items-center text-center py-6 space-y-6 md:space-y-0 md:space-x-6 overflow-x-auto md:overflow-x-visible">
        {/* Users */}
        <div
          className="rounded-md p-4 bg-light bg-opacity-50 flex-shrink-0 w-full md:w-auto"
          id="users-section"
        >
          <h2 className="text-6xl md:text-8xl font-bold gradient-text text-[#6d52ef]">
            1K+
          </h2>
          <p className="text-lg md:text-2xl text-gray-400">Users</p>
          <div className="mt-4 p-2 rounded-md h-2 w-[40%] opacity-30 bg-gradient-to-b from-[#674CEC] to-[#8D77FC] mx-auto"></div>
        </div>

        {/* Partners */}
        <div
          className="rounded-md p-4 bg-light bg-opacity-50 flex-shrink-0 w-full md:w-auto"
          id="partners-section"
        >
          <h2 className="text-6xl md:text-8xl font-bold gradient-text text-[#6d52ef]">
            500+
          </h2>
          <p className="text-lg md:text-2xl text-gray-400">Partners</p>
          <div className="mt-4 p-2 rounded-md h-2 w-[40%] opacity-30 bg-gradient-to-b from-[#674CEC] to-[#8D77FC] mx-auto"></div>
        </div>

        {/* Warehouse */}
        <div
          className="rounded-md p-4 bg-light bg-opacity-50 flex-shrink-0 w-full md:w-auto"
          id="warehouse-section"
        >
          <h2 className="text-6xl md:text-8xl font-bold gradient-text text-[#6d52ef]">
            2K+
          </h2>
          <p className="text-lg md:text-2xl text-gray-400">Warehouse</p>
          <div className="mt-4 p-2 rounded-md h-2 w-[40%] opacity-30 bg-gradient-to-b from-[#674CEC] to-[#8D77FC] mx-auto"></div>
        </div>
      </div>
    </section>
  );
}

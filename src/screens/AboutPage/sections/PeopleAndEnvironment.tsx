import APSectionHeading from "@/components/about-page/APSectionHeading";

export default function PeopleAndEnvironment() {
  return (
    <div className="m-0 flex flex-col items-center pt-8 px-4">
      <APSectionHeading bgTitle="CULTURE" smallTitle="People And Environment" />
      <div className="mt-8 md:mt-16 max-w-screen-lg w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <img
            src="people.png"
            alt="People"
            className="w-full lg:w-1/2 object-cover"
          />
          <div className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
            <p className="font-semibold text-xl md:text-2xl">
              Find Your Ideal Warehouse: Simplify Storage Solutions with Our
              Seamless Booking Platform
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Book My Warehouse is a cutting-edge company dedicated to
              streamlining the warehouse booking process for businesses of all
              sizes. We connect you with ideal warehouse spaces tailored to your
              specific needs, ensuring efficiency and convenience.
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Our platform not only simplifies the search for the perfect
              warehouse but also integrates seamlessly into your logistics
              operations, helping you manage storage solutions with ease and
              precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

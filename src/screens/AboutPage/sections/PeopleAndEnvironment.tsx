import APSectionHeading from "@/components/about-page/APSectionHeading";

export default function PeopleAndEnvironment() {
  return (
    <div className="m-0 md:mr-32 flex flex-col items-center">
      {" "}
      {/* Added 'items-center' to center content */}
      <APSectionHeading bgTitle="CULTURE" smallTitle="People And Environment" />
      <div className="flex flex-col md:flex-row mt-8 md:mt-16 items-center">
        <img src="people.png" alt="" className="md:mr-8 mb-8 md:mb-0" />
        <div className="flex flex-col gap-4 md:gap-10">
          <p className="font-semibold text-xl md:text-2xl">
            Find Your Ideal Warehouse: Simplify Storage Solutions with Our
            Seamless Booking Platform
          </p>
          <p className="text-sm md:text-base">
            Book My Warehouse is a cutting-edge company dedicated to
            streamlining the warehouse booking process for businesses of all
            sizes. We connect you with ideal warehouse spaces tailored to your
            specific needs, ensuring efficiency and convenience.
          </p>
          <p className="text-sm md:text-base">
            Our platform not only simplifies the search for the perfect
            warehouse but also integrates seamlessly into your logistics
            operations, helping you manage storage solutions with ease and
            precision.
          </p>
        </div>
      </div>
    </div>
  );
}

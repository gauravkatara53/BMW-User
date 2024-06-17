import APSectionHeading from "@/components/about-page/APSectionHeading";

export default function PeopleAndEnvironment() {
  return (
    <div className="m-0 md:mr-32 flex flex-col items-center"> {/* Added 'items-center' to center content */}
      <APSectionHeading bgTitle="CULTURE" smallTitle="People And Environment" />
      <div className="flex flex-col md:flex-row mt-8 md:mt-16 items-center">
        <img src="people.png" alt="" className="md:mr-8 mb-8 md:mb-0" />
        <div className="flex flex-col gap-4 md:gap-10">
          <p className="font-semibold text-xl md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sed urna in justo euismod condimentum. Fusce placerat enim et odio
            molestie sagittis.
          </p>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sed urna in justo euismod condimentum. Fusce placerat enim et odio
            molestie sagittis. Vestibulum dignissim orci vitae eros rutrum
            euismod.
          </p>
        </div>
      </div>
    </div>
  );
}

import APSectionHeading from "@/components/about-page/APSectionHeading";

export default function PeopleAndEnvironment() {
  return (
    <div className="m-0 md:mr-32">
      <APSectionHeading bgTitle="CULTURE" smallTitle="People And Environment" />
      <div className="flex mt-16 items-center">
        <img src="people.png" alt="" />
        <div className="flex flex-col gap-10">
          <p className="font-semibold text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sed urna in justo euismod condimentum. Fusce placerat enim et odio
            molestie sagittis.{" "}
          </p>
          <p>
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

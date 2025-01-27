import APSectionHeading from "@/components/about-page/APSectionHeading";

export default function OurTeam() {
  const teamMembers = [
    {
      image: "/CEO.png",
      name: "John Doe",
      position: "[CEO]",
      experience: "6 years",
      description:
        "Our CEO is not just a leader but a visionary who brings a distinctive perspective to the development of our apps. With a wealth of apps. With a wealth of experience and a knack for innovation, they are the driving force behind our app's success",
    },
    {
      image: "/cto.png",
      name: "Jane Smith",
      position: "[CTO]",
      experience: "18 years",
      description:
        "With years of technical leadership experience. He posses proven ability to success in leading technical teams and delivering innovative solutions.",
    },
  ];

  return (
    <div>
      <div className="pb-[10%] flex flex-col items-start lg:px-32 md:px-16 sm:px-8 px-4 gap-8 mt-0">
        <APSectionHeading bgTitle="Our Team" smallTitle="Meet Our Team" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl text-green-600 font-semibold">
                {member.name}
              </h3>
              <p className="text-gray-600 font-bold">{member.position}</p>
              <p className="text-sm text-gray-500 mt-2">
                Experience: {member.experience}
              </p>
              <p className="text-gray-700 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

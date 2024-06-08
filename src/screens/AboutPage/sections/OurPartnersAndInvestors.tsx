import APDetailContainer from "@/components/about-page/APDetailContainer";

export default function OurPartnersAndInvestors() {
  return (
    <div style={{backgroundImage:'url(partner-bg.png)'}} className="flex flex-col gap-4 bg-cover items-center lg:mx-32 md:mx-16 sm:mx-8 mx-4 p-16 rounded-[5rem]">
        {/* <img src="partner-bg.png" alt="" /> */}
        <p className="text-white text-6xl font-extrabold">Our Partners and Investors</p>
        <p className="text-lg text-white font-normal">Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.</p>
        <div className="h-[20rem]"></div>
        <div className="flex text-6xl justify-between w-full text-white">
            <APDetailContainer title="Investors" value="123"/>
            <APDetailContainer title="Funded" value="$123M" color="violet"/>
            <APDetailContainer title="Partners" value="456"/>
        </div>
    </div>
  )
}

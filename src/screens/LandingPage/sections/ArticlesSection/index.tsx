import WHFillButton from "@/components/common/WHFillButton";
import LPArticleWrapper from "@/components/landing-page/LPArticleWrapper";
import LPSectionHeading from "@/components/landing-page/LPSectionHeading";

export default function ArticleSection() {
  return (
    <div className="lg:px-32 md:px-16 sm:px-8 px-4 flex flex-col items-center gap-6 relative">
      <img
        className="absolute -left-80 -z-10 -top-16"
        src="blur-blob-3.png"
        alt=""
      />
      <LPSectionHeading
        alignment="center"
        title="See tips and trick from our partnership"
        superHeading="Find Out More About Selling And Buying Homes"
      />
      <WHFillButton title="More Articles" />
      <div className="grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-16 mt-12 w-full">
        <div className="md:col-span-3 flex flex-col gap-10 md:gap-12">
          <LPArticleWrapper
            img="article1.png"
            title="How to Choose the Right Location for Your New Home"
            date={1717438768}
            readTime="4"
          />
          <LPArticleWrapper
            img="article2.png"
            title="Understanding the Costs Involved in Home Buying"
            date={1717438769}
            readTime="6"
          />
          <LPArticleWrapper
            img="article3.png"
            title="The Importance of Home Inspections Before Purchase"
            date={1717438770}
            readTime="2"
          />
        </div>
        <div className="hidden md:block md:col-span-4">
          <LPArticleWrapper
            large
            img="article4.png"
            title="10 Tips for First-Time Homebuyers"
            description="Want to buy a house but are unsure about what to consider? Here, I will explain the essential tips that every first-time homebuyer should know."
            date={1717438771}
            readTime="2"
          />
        </div>
      </div>
    </div>
  );
}

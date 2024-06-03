import WHFillButton from "@/components/common/WHFillButton";
import LPArticleWrapper from "@/components/landing-page/LPArticleWrapper";
import LPSectionHeading from "@/components/landing-page/LPSectionHeading";

export default function ArticleSection() {
  return (
    <div className="px-32 flex flex-col items-center gap-6 relative">
      <img className="absolute -left-80 -z-10 -top-16" src="blur-blob-3.png" alt="" />
      <LPSectionHeading
        alignment="center"
        title="See tips and trick from our partnership"
        superHeading="Find Out More About Selling And Buying Homes"
      />
      <WHFillButton title="More Articles" />
      <div className="grid grid-cols-7 gap-16 mt-12">
        <div className="col-span-3 flex flex-col gap-12">
          <LPArticleWrapper
            img="article1.png"
            title="The things we need to check when we want to buy a house"
            date={1717438768}
            readTime="4"
          />
          <LPArticleWrapper
            img="article2.png"
            title="The things we need to check when we want to buy a house"
            date={917}
            readTime="6"
          />
          <LPArticleWrapper
            img="article3.png"
            title="The things we need to check when we want to buy a house"
            date={917}
            readTime="2"
          />
        </div>
        <div className="col-span-4">
          <LPArticleWrapper
            large
            img="article4.png"
            title="The things we need to check when we want to buy a house"
            description="Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house"
            date={917}
            readTime="2"
          />
          {/* <img className="w-full" src="article4.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

import APSectionHeading from "@/components/about-page/APSectionHeading";
import LPArticleWrapper from "@/components/common/ArticleWrapper";
export default function Hero() {
  return (
    <div className="mb-[10%] mt-[2%]">
      <div className="pt-[80px] pb-[10%] flex flex-col items-center lg:px-32 md:px-16 sm:px-8 px-4 gap-8 mt-0">
        <APSectionHeading bgTitle="Articles" smallTitle="Learn more" />
      </div>

      <div className="lg:px-32 md:px-16 sm:px-8 px-4 flex flex-col items-center gap-6 relative mt-0 md:-mt-[6%]">
        <img
          className="absolute top-0 left-0 z-[-10]" // Update the positioning here
          src="Vector-more.png"
          alt=""
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mt-12 w-full">
          <div className="flex flex-col gap-10 md:gap-12">
            <LPArticleWrapper
              img2="article1.png"
              name="Courtney Henry"
              img="user5.png"
              title="How to Select the Best Warehouse for Your Business"
              date={"12 Sept"}
              readTime="4"
            />
            <LPArticleWrapper
              img2="article2.png"
              name="Darlene Robertson"
              img="userw.png"
              title="Key Factors to Consider When Booking a Warehouse"
              date={"13 Sept"}
              readTime="6"
            />
            <LPArticleWrapper
              img2="article3.png"
              name="Dianne Russell"
              img="danial.png"
              title="Understanding Warehouse Lease Agreements"
              date={"14 Sept"}
              readTime="2"
            />
          </div>

          <div className="flex flex-col gap-10 md:gap-12">
            <LPArticleWrapper
              img2="article1.png"
              name="Courtney Henry"
              img="user5.png"
              title="How to Select the Best Warehouse for Your Business"
              date={"12 Sept"}
              readTime="4"
            />
            <LPArticleWrapper
              img2="article2.png"
              name="Darlene Robertson"
              img="userw.png"
              title="Key Factors to Consider When Booking a Warehouse"
              date={"13 Sept"}
              readTime="6"
            />
            <LPArticleWrapper
              img2="article3.png"
              name="Dianne Russell"
              img="danial.png"
              title="Understanding Warehouse Lease Agreements"
              date={"14 Sept"}
              readTime="2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

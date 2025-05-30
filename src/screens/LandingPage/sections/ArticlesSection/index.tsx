import WHFillButton from "@/components/common/WHFillButton";
import LPArticleWrapper from "@/components/common/ArticleWrapper";
import LPSectionHeading from "@/components/landing-page/LPSectionHeading";
import { Link } from "react-router-dom";

export default function ArticleSection() {
  return (
    <div className="lg:px-32 md:px-16 sm:px-8 px-4 flex flex-col items-center gap-6 relative">
      <img
        className="absolute top-0 left-0 z-[-10]" // Update the positioning here
        src="Vector-more.png"
        alt=""
      />
      <LPSectionHeading
        alignment="center"
        title="Explore expert tips and tricks from our trusted partners!"
        superHeading="Learn more about buying and selling properties!"
      />
      <Link
        to="/article"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <WHFillButton title="More Articles" />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-16 mt-12 w-full">
        <div className="md:col-span-3 flex flex-col gap-10 md:gap-12">
          <LPArticleWrapper
            img2="article1.png"
            name="Courtney Henry"
            img="user5.png"
            title="The things we need to check when we want to buy a house"
            date={"12 Sept"}
            readTime="4"
          />
          <LPArticleWrapper
            img2="article2.png"
            name="Darlene Robertson"
            img="userw.png"
            title="7 Ways to distinguish the quality of the house we want to buy"
            date={"13 Sept"}
            readTime="6"
          />
          <LPArticleWrapper
            img2="article3.png"
            name="Dianne Russell"
            img="danial.png"
            title="The best way to know the quality of the house we want to buy"
            date={"14 Sept"}
            readTime="2"
          />
        </div>
        <div className="hidden md:block md:col-span-4">
          <Link
            to="/article-page1"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <LPArticleWrapper
              large
              img2="article4.png"
              title="12 Things to know before buying a house"
              description="Want to buy a house but are unsure about what to consider? Here, I will explain the essential tips that every first-time homebuyer should know."
              date={"15 sept"}
              readTime="2"
              name="Dianne Russell"
              img="danial.png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

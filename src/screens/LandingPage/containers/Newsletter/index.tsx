import LPSearchBar from "@/components/landing-page/LPSearchBar";

export default function Newsletter() {
  return (
    <div style={{backgroundImage:'url(newsletter-bg.png)'}} className="mx-32 bg-no-repeat w-[85%] bg-cover flex flex-col items-center justify-center h-[23rem] rounded-[2rem]">
      <h3 className="text-4xl font-semibold text-deep-blue-1B max-w-[60rem] flex flex-col items-center py-8">
        <p>Subscribe for more Info</p>
        <p> And Update From Warehouse On Hire</p>
      </h3>
      <div className="w-2/5">
        <LPSearchBar />
      </div>
    </div>
  );
}

import WHNavbar from "@/components/common/WHNavbar";

export default function Hero() {
  return (
    <div className="pl-32">
      <WHNavbar />
      <div className="flex justify-between">
        <div className="w-1/2"></div>
        <img src="hero.png" alt="" />
      </div>
    </div>
  );
}

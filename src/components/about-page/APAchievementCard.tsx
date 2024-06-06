type TProps = {
  value?: string;
  title?: string;
  width?: number;
  height?: number;
  imgUrl?: string;
};

export default function APAchievementCard({
  title,
  value,
  height,
  width,
  imgUrl,
}: TProps) {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundImage: `url(${imgUrl})`,
      }}
      className="bg-cover bg-center rounded-[1.2rem] overflow-hidden"
    >
      <div className="w-full h-full text-white bg-gradient-to-b from-[#651FFF]/50 to-[#00BCD4]/50 p-8 flex flex-col items-center">
        <p className="text-7xl font-extrabold ">{value}</p>
        <p className="text-3xl font-bold capitalize">{title}</p>
      </div>
    </div>
  );
}

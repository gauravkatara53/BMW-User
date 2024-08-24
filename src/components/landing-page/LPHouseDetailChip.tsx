type TProps = {
  img?: string;
  text?: string;
};

export default function LPHouseDetailChip({ img = "", text = "" }: TProps) {
  return (
    <div className="flex gap-4 items-center">
      {/* Conditionally render the img tag only if img is provided */}
      {img && <img src={img} className="w-6 h-6" alt="icon" />}
      {/* Render text only if provided */}
      {text && (
        <p className="text-WH-dark-gray font-medium text-xs md:text-base">
          {text}
        </p>
      )}
    </div>
  );
}

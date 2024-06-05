
type TProps = {
  img?:string
  text?:string
}

export default function LPHouseDetailChip({img,text}:TProps) {
  return (
    <div className="flex gap-4 items-center">
        <img src={img} className="w-6 h-6" alt="" />
        <p className="text-WH-dark-gray font-medium text-xs md:text-base">{text}</p>
    </div>
  )
}

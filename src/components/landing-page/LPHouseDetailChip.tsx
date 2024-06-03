
type TProps = {
  img?:string
  text?:string
}

export default function LPHouseDetailChip({img,text}:TProps) {
  return (
    <div className="flex gap-4">
        <img src={img} alt="" />
        <p className="text-WH-dark-gray font-medium">{text}</p>
    </div>
  )
}

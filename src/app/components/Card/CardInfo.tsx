import { ICardItem } from "./ICardItem"

export default function CardInfo(props: ICardItem) {
  const { image = "", title = "", desc = ""} = props
  return(
    <>
      <div className="flex items-center">
        <div className="w-[180px] aspect-square rounded-[15px] truncate">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 ml-[20px]">
          <div className=" text-primary font-[700] text-[35px]">{title}</div>
          <div className=" font-[400] text-[14px] text-[#EFEEE0] mt-[10px]">{desc}</div>
        </div>
      </div>
    </>
  )
}
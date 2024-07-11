import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { ISongItem } from "./SongInterface";
import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart from "../button/ButtonHeart";

export default function SongItem(props: ISongItem) {
  const {
    id = "",
    image = "",
    title = "",
    link = "",
    singer = "",
    listen = 0,
    audio = "",
    wishlist = {}
  } = props;
  return(
    <>
      <div className="bg-[#212121] rounded-[15px] p-[10px] flex items-center" song-id={id}>
        <div className="w-[76px] aspect-square rounded-[10px] truncate mr-[10px]">
          <img src={image} alt={title} className="w-full h-full" />
        </div>
        <div className="flex-1 mr-[10px]">
          <div className="mb-[2px]">
            <Link href={`song/${id}`} className="font-[600] text-[16px]">{title}</Link>
          </div>
          <div className="text-[#FFFFFF80] font-[400] text-[12px] mb-[5px]">{singer}</div>
          <div className="font-[400] text-[12px]">{listen.toLocaleString()} luot nghe</div>
        </div>
        <div className="">
          <ButtonPlay {...props} className="w-[34px] h-[34px] rounded-full bg-transparent border border-white inline-flex items-center justify-center text-[15px] mr-[10px]"/>
          <ButtonHeart {...props} />
        </div>
      </div>
    </>
  )
}
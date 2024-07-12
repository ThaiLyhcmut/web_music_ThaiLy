import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart from "../button/ButtonHeart";

export default function SongItem_2(props: any) {
  const {
    image = "",
    title = "",
    singer = "",
    time = "",
    id = "",
    audio = "",
    wishlist = {}
  } = props;
  return (
    <>
      <div
        className="bg-[#212121] flex items-center justify-between px-[18px] py-[10px] rounded-[15px]"
        song-id={id}
      >
        <div className="w-[80%] flex items-center">
          <ButtonPlay {...props} className="text-white text-[20px]" />

          <div className="mx-[12px] w-[42px] h-[42px] aspect-square rounded-[8px] truncate">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-[700] text-[14px] truncate overflow-hidden">
            <Link href={`/song/${id}`}>{title}</Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="font-[400] text-[14px] mr-[18px]">{time}</div>
          <ButtonHeart {...props} />
        </div>
      </div>
    </>
  );
}

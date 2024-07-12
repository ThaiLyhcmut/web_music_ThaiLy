import PlayAudio from "./PlayAudio";
import PlayInfo from "./PlayInfo";
import PlayAction from "./PlayAction";
import PlayTime from "./PlayTime";
import PlayVolume from "./PlayVolume";

export default function Play() {
  return(
    <>
      <div className="bg-BGD border-t border-[#494949] fixed bottom-0 left-0 w-full z-[999] py-[20px] play-audio hidden">
        <PlayAudio/>
        <div className="container mx-auto flex items-center justify-between ">
          <PlayInfo/>
          <div className="flex-1 sm:mx-[67px] mx-[20px]">
            <PlayAction/>
            <PlayTime/>
          </div>
          <PlayVolume/>
        </div>
      </div>
    </>
  )
}
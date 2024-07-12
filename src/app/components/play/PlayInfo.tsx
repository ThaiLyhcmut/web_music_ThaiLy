export default function PlayInfo(){
  return(
    <>
      <div className="sm:w-[218px] w-[100px] flex items-center flex-wrap">
        <div className="w-[49px] sm:ml-0 ml-[12px] aspect-square rounded-[14px] truncate">
          <img src="" alt="play" className="w-full h-full object-cover inner-image" />
        </div>
        <div className="flex-1 ml-[12px]">
          <div className="text-white font-[700] text-[15px] mb-[2px] inner-title line-clamp-1"></div>
          <div className="text-[##FFFFFF70] font-[700] sm:text-[12px] text-[8px] inner-singer line-clamp-1"></div>
        </div>
      </div>
    </>
  )
}
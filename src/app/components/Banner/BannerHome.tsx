export default function BannerHome() {
  return(
    <>
      <div className="w-full bg-cover rounded-[15px] flex items-center" style={{ background: "url('/image/Banner-1.svg')"}}>
        <div className="flex-1 mr-[32px] ml-[30px]">
          <div className="font-[700] text-[32px] mb-[6px] text-white">Nhac EDM</div>
          <div className="font-[500] text-[14px] text-white">Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ</div>
        </div>
        <div className="w-[215px] mr-[23px] mt-[40px]">
          <img src="/image/Img-1.svg" alt="img-1" />
        </div>
      </div>
    </>
  )
}
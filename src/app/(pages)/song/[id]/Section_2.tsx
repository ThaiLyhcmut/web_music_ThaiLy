import Title from "@/app/components/Title/Title";

export default function Section_2(props: {
  lyric: string
}) {
  const {lyric = ""} = props
  return(
    <>
      <div className="mt-[30px]">
        <Title text="Lời Bài Hát"/>
        <div className="bg-[#212121] rounded-[15px] p-[20px] font-[500] text-[14px] whitespace-pre-line">
          {lyric}
        </div>  
      </div>
    </>
  )
}
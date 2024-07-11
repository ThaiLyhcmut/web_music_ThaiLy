import CardInfo from "@/app/components/Card/CardInfo";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import { getSongDetail } from "@/app/helper/getSong";
import { notFound } from "next/navigation";

export default async function SongDetailPage( {params}:{params: {
  id: string
}} ) {
  console.log(params.id)
  const data:any = await getSongDetail(params.id)
  if(!data) notFound()
  return(
    <>
      <CardInfo 
      image={data.image}
      title={data.title}
      desc={""}
      />
      <Section_2
        lyric={data.lyric}
      />
      <Section_3
        categoryId = {data.categoryId}
      />
    </>
  )
}
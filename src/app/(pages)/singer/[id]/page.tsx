import CardInfo from "@/app/components/Card/CardInfo";
import Section_2 from "./Section_2";
import { getSingerID } from "@/app/helper/getSinger";

export default async function SingerDetailPage({params} : {params : {
  id: string
}}) {
  const data: any = await getSingerID(params.id)
  return(
    <>
      <CardInfo 
      image={data.image}
      title={data.title}
      desc={data.description}
     />
     <Section_2 singerId = {params.id}/>
    </>
  )
}
import CardInfo from "@/app/components/Card/CardInfo";
import Section_2 from "./Section_2";
import { getCategories, getCategoriesID } from "@/app/helper/getCategories";

export default async function SongsByCategoriesPage({ params }: {
  params : {
    id: string
  }
}) {
  const Data:any = await getCategoriesID(params.id)
  return(
    <>
     <CardInfo 
      image={Data.image}
      title={Data.title}
      desc={Data.description}
     />
     <Section_2 id={params.id}/>
     
    </>
  )
}
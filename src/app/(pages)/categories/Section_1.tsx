import CardList from "@/app/components/Card/CardList";
import { ICardItem } from "@/app/components/Card/ICardItem";
import Title from "@/app/components/Title/Title";
import { getCategories } from "@/app/helper/getCategories";

export default async function Section_1() {
  const DataCategories: any[] = await getCategories()
  return(
    <>
      <div className="mt-[30px]">
        <Title text={"Danh Mục Bài Hát"}/>
        <CardList data={DataCategories}/>
      </div>
    </>
  )
}
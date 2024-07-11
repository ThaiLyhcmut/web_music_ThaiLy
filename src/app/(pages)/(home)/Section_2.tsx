import CardList from "@/app/components/Card/CardList";
import Title from "@/app/components/Title/Title";
import { getCategories } from "@/app/helper/getCategories";

export default async function Section_2() {
  const DataCategories:any[] = await getCategories(5)
  return(
    <>
      <div className="mt-[30px]">
        <Title text={"Danh Mục Nổi Bật"}/>
        <CardList data={DataCategories}/>
      </div>
    </>
  )
}
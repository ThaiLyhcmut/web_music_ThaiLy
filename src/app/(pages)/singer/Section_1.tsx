import CardList from "@/app/components/Card/CardList";
import Title from "@/app/components/Title/Title";
import { getSinger } from "@/app/helper/getSinger";

export default async function Section_1() {
  const Data: any = await getSinger()
  return(
    <>
      <div className="mt-[30px]">
        <Title text={"Danh Sách Ca Sĩ"}/>
        <CardList data={Data}/>
      </div>
    </>
  )
}
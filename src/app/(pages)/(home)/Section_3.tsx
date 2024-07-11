import CardList from "@/app/components/Card/CardList";
import { ICardItem } from "@/app/components/Card/ICardItem";
import Title from "@/app/components/Title/Title";
import { dbFB } from "@/app/FirebaseConfig";
import { onValue, ref } from "firebase/database";
const getSingers = async () => {
  const songRef = ref(dbFB, "singers"); // đường dẫn

  const result:any[] = await new Promise((save) => {
    onValue(songRef, (res) => {
      const data:any[] = [];
      res.forEach(item => {
        const chil = item.key;
        const chilData = item.val()
        data.push({
          id: chil,
          link: `singer/${chil}`,
          ...chilData
        })
      });
      save(data.slice(0,5))
    })
  })

  
  return result;
}
export default async function Section_3() {
  const DataSingers: any[] = await getSingers()
  return(
    <>
      <div className="mt-[30px]">
        <Title text={"Ca Sĩ Nổi Bật"}/>
        <CardList data={DataSingers}/>
      </div>
    </>
  )
}
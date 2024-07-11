import { onValue, ref } from "firebase/database";
import { dbFB } from "../FirebaseConfig";

export const getSinger = async (MAX? :number) => {
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
      if(MAX){
        save(data.slice(0,MAX))
      }
      save(data)
    })
  })
  return result
}

export const getSingerID = async (id :string) => {
  const songRef = ref(dbFB, "singers/" + id); // đường dẫn

  const result:any[] = await new Promise((save) => {
    onValue(songRef, (res) => {
      const chil = res.key;
      const chilData = res.val()
      const data = ({
        id: chil,
        ...chilData
      })
      save(data)
    })
  })
  return result;
}
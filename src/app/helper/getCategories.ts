import { onValue, ref } from "firebase/database";
import { dbFB } from "../FirebaseConfig";

export const getCategories = async (MAX? :number) => {
  const songRef = ref(dbFB, "categories"); // đường dẫn

  const result:any[] = await new Promise((save) => {
    onValue(songRef, (res) => {
      const data:any[] = [];
      res.forEach(item => {
        const chil = item.key;
        const chilData = item.val()
        data.push({
          id: chil,
          link: `categories/${chil}`,
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

export const getCategoriesID = async (id :string) => {
  const songRef = ref(dbFB, "categories/" + id); // đường dẫn

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
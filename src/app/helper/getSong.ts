import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { dbFB } from "../FirebaseConfig";

export const getSongList = async (MAX?: number, categoryId? : string) => {
  const songRef = ref(dbFB, "songs"); // đường dẫn
  let songQuery:any;
  if(!categoryId){
    songQuery = songRef
  }
  else{
    songQuery = query(songRef, orderByChild("categoryId"), equalTo(categoryId));
  }
  

  const result:any[] = await new Promise((save) => {
    onValue(songQuery, (res) => {
      let data:any[] = [];
      res.forEach(item => {
        const chil = item.key;
        const chilData = item.val()
        data.push({
          id: chil,
          ...chilData
        })
      });
      if(MAX){
        save(data.slice(0,MAX))
      }
      save(data)
    })
  })

  return result;
}
export const getSongWishList = async (userId : string) => {
  const songRef = ref(dbFB, "songs"); // đường dẫn
  let songQuery = query(songRef, orderByChild(`wishlist/${userId}`), equalTo(true));

  

  const result:any[] = await new Promise((save) => {
    onValue(songQuery, (res) => {
      let data:any[] = [];
      res.forEach(item => {
        const chil = item.key;
        const chilData = item.val()
        data.push({
          id: chil,
          ...chilData
        })
      });

      save(data)
    })
  })

  return result;
}

export const getSongDetail = async (id? : string) => {
  const songRef = ref(dbFB, "songs/" + id); // đường dẫn
  

  const result:any[] = await new Promise((save:any) => {
    onValue(songRef, (res) => {
        const chil = res.key;
        const chilData = res.val()
        if(chilData){
          const data = {
            id: chil,
            ...chilData
          }
          save(data)
        } 
        else save(null)
      })
})

  return result;
}

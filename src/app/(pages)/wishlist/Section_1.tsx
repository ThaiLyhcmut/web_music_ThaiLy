"use client"

import { ISongItem_2 } from "@/app/components/Song/SongInterface";
import SongList_2 from "@/app/components/Song/SongList_2";
import Title from "@/app/components/Title/Title";
import { Auth } from "@/app/FirebaseConfig";
import { getSongWishList } from "@/app/helper/getSong";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Section_1(){
  const [data,setData] = useState<any[]>()

  useEffect(() => {
    onAuthStateChanged(Auth,async (user) => {
      if(user) {
        const userId = user.uid
        const dataFinal: any[] = await getSongWishList(userId);
        setData(dataFinal)
      }
    })
  },[])
  
  return(
    <>
      <div className="mt-[30px]">
        <Title text="Bài Hát Yêu Thích"/>
        {data &&
          <SongList_2 data={data}/>
        }
      </div>
    </>
  )
}
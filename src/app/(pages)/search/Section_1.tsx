"use client"
import SongList_2 from "@/app/components/Song/SongList_2";
import Title from "@/app/components/Title/Title";
import { getSongList } from "@/app/helper/getSong";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section_1(){
  const [data,setData] = useState([]);
  const searchParams = useSearchParams();
  const keywordDefault = searchParams.get('keyword') || ""
  useEffect(() => {
    const fetchApi =  async () => {
      const SongList = await getSongList();
      const regex = new RegExp(keywordDefault, "i")
      const dataFilter:any = SongList.filter((item) => regex.test(item.title))
      setData(dataFilter)
    }
    fetchApi();
  },[keywordDefault])
  return(
    <>
      <div className="mt-[30px]">
        <Title text="Kết Quả Tìm Kiếm"/>
        <SongList_2 data={data}/>
      </div>
    </>
  )
}
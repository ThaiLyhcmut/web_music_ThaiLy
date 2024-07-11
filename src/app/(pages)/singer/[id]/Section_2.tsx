import { ISongItem_2 } from "@/app/components/Song/SongInterface";
import SongList_2 from "@/app/components/Song/SongList_2";
import Title from "@/app/components/Title/Title";
import { getSongList } from "@/app/helper/getSong";

export default async function Section_2(props: {
  singerId: string
}){
  const data: any[] = await getSongList();
  const dataDefault = data.filter(item => item.singerId.includes(props.singerId))

  return(
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát"/>
        <SongList_2 data={dataDefault}/>
      </div>
    </>
  )
}
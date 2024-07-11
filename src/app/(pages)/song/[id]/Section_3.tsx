import { ISongItem_2 } from "@/app/components/Song/SongInterface";
import SongList_2 from "@/app/components/Song/SongList_2";
import Title from "@/app/components/Title/Title";
import { getSongList } from "@/app/helper/getSong";

export default async function Section_3(props: any){
  const { categoryId } = props
  const data:any = await getSongList(undefined,categoryId)
  
  return(
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát"/>
        <SongList_2 data={data}/>
      </div>
    </>
  )
}
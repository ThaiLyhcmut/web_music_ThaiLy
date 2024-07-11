import { ISongItem_2 } from "./SongInterface";
import SongItem_2 from "./SongItem_2";

export default function SongList_2(props: {
  data: any[]
}){
  const { data } = props
  return(
    <>
      <div className="grid grid-cols-1 gap-[10px]" song-list="">
        {data.map((item,index) => (
          <SongItem_2
            id={item.id}
            key={index}
            image={item.image}
            title={item.title}
            singer={item.singer}
            time={item.time}
            audio={item.audio}
            wishlist={item.wishlist}
          />
        ))}
        
      </div>
    </>
  )
}
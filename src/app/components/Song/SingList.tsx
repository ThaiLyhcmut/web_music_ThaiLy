import { ISongItem } from "./SongInterface";
import SongItem from "./SongItem";

export default function SongList(props: {
  data: any[];
}) {
  const { data } = props;
  return(
    <>
      <div className="grid grid-rows-3 gap-[7px]" song-list="">
        {data.map((item,index) => (
          <SongItem 
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            link={item.link}
            singer={item.singer}
            listen={item.listen}
            audio={item.audio}
            wishlist={item.wishlist}
          />
        ))}
      </div>
    </>
  )
}
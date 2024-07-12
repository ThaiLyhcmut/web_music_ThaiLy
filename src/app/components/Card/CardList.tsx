import CardItem from "./CardItem";
import { ICardItem } from "./ICardItem";

export default function CardList(props: {
  data: any[]
}) {
  const {data} = props
  return(
    <>
      <div className="grid sm:grid-cols-5 grid-cols-3 gap-[20px]">
        {data.map((item,index) => (
          <CardItem
            key={index}
            image={item.image}
            title={item.title}
            link={item.link}
            desc={item.description}
          />
        ))}
      </div>
    </>
  )
}
export default function Title(props:{text:string}) {
  const { text = "" } = props;
  return(
    <div className="font-[700] text-[24px] text-[#EFEEE0] mb-[20px]">
      {text}
    </div>
  )
}
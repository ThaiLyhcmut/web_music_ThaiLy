export default function FormButton(props: {
  text: string
}) {
  const { text = "" } = props;

  return (
    <>
      <button
        type="submit"
        className="w-full h-[50px] bg-primary rounded-[6px] text-white text-center text-[16px] font-[700]"
      >
        {text}
      </button>
    </>
  )
}
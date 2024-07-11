import Link from "next/link";

export default function NotFoundPage(){
  return(
    <>
      <div className="text-center my-[10px]">
        <h2 className="text-[40px] font-700">404 Not Found</h2>
        <Link href="/">Return Trang chu</Link>
      </div>
    </>
  )
}
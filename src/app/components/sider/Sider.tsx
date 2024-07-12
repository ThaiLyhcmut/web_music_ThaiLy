import Link from "next/link";
import SiderMenu from "./SiderMenu";

export default function Sider() {
  return(
    <>
      <div className="bg-BGD h-[100vh] fixed xl:w-[280px] w-[200px]">
        <div className="bg-[#1C1C1C] py-[25px] px-[20px]">
          <Link href="/" className="flex justify-center items-center">
            <img src="/image/logo.svg" alt="logo" className="h-[42px]"/>
            <div className="text-primary font-[700] xl:text-[30px] text-[18px] ml-[20px]">
              Music Chill
            </div>
          </Link>
        </div>
        <SiderMenu/>
      </div>
    </>
  )
}
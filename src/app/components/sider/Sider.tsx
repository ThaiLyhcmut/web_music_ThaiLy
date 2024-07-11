import Link from "next/link";
import SiderMenu from "./SiderMenu";

export default function Sider() {
  return(
    <>
      <div className="bg-BGD h-[100vh] fixed w-[280px]">
        <div className="bg-[#1C1C1C] py-[25px] px-[20px]">
          <Link href="/">
            <img src="/image/logo.svg" alt="logo" className="h-[42px]"/>
          </Link>
        </div>
        <SiderMenu/>
      </div>
    </>
  )
}
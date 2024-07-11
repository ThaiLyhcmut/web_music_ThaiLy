"use client"
import { Auth } from "@/app/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import { FaHome } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { IoPersonAdd } from "react-icons/io5";


export default function SiderMenu(){

  const [isLogin,setIsLogin] = useState<boolean>()

  useEffect(() => {
    onAuthStateChanged(Auth,(user) => {
      if(user){
        const uid = user.uid;
        setIsLogin(true)
      }
      else{
        setIsLogin(false)
      }
    })
  },[])
  const pathname = usePathname();
  interface MenuLink {
    icon: ReactNode,
    title: string,
    link: Url
  }
  const Menu: MenuLink[] = [
    {
      icon: <FaHome/>,
      title: "Trang chu",
      link: "/"
    },
    {
      icon: <FaMusic/>,
      title: "Danh muc bai hat",
      link: "/categories"
    },
    {
      icon: <FaPodcast/>,
      title: "Ca si",
      link: "/singer"
    },
    {
      icon: <FaHeart/>,
      title: "Bai hat yeu thich",
      link: "/wishlist"
    },
    {
      icon: <FiLogOut/>,
      title: "Dang xuat",
      link: "/logout"
    },
    {
      icon: <FiLogIn/>,
      title: "Dang nhap",
      link: "/login"
    },
    {
      icon: <IoPersonAdd/>,
      title: "Dang ky",
      link: "/register"
    },
  ]
  return(
    <>
      <nav className="py-[30px] px-[20px]">
        <ul className="">
          {Menu.map((item,index) => (

            (isLogin != undefined)?(
              (isLogin == true)?(
                (item.link != "/login" && item.link != "/register")?(
                  <li key={index} className={"flex items-center mb-[15px] font-700 hover:text-primary text-[22px] capitalize " + (pathname === item.link ? "text-primary" : "text-white" )}>
                    {item.icon}
                    <Link href={item.link} className="ml-[20px]">{item.title}</Link>
                  </li>
                ):(
                  <div key={index}>
                  </div>
                )
              ):(
                <li key={index} className={"flex items-center mb-[15px] font-700 hover:text-primary text-[22px] capitalize " + (pathname === item.link ? "text-primary" : "text-white" )}>
                  {item.icon}
                  <Link href={item.link} className="ml-[20px]">{item.title}</Link>
                </li>
              )
            ):(
              <div key={index}></div>
            )

            
          ))}
        </ul>
       </nav>
    </>
  )
}
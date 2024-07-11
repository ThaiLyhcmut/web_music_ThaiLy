"use client"

import { Auth } from "@/app/FirebaseConfig"
import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LogoutPage() {
  const Navigation = useRouter()
  useEffect(() => {
    signOut(Auth).then(() => {
      Navigation.push("/login")
    })
  })
  return(
    <>
      Dang Dang Xuat
    </>
  )
}
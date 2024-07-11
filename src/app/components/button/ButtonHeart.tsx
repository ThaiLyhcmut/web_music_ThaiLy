"use client"
import { FaHeart } from "react-icons/fa";
import { ISongItem } from "../Song/SongInterface";
import { Auth, dbFB } from "@/app/FirebaseConfig";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { usePathname } from "next/navigation";

export default function ButtonHeart(props: ISongItem) {

  const [isActive, setActive] = useState(false);

  const {
    id = "",
    image = "",
    title = "",
    link = "",
    singer = "",
    listen = 0,
    audio = "",
    wishlist = {}
  } = props;
  useEffect(() => { 
    onAuthStateChanged(Auth, user => {
      if(user){
        const userId = user.uid;
        if(wishlist[userId]){
          setActive(true)
        }
      }
    })
  },[])
  const handleAddWishList = () => {
    const userId = Auth?.currentUser?.uid
    if(id && userId) {
      const SongRef = ref(dbFB, `/songs/${id}`);
      runTransaction(SongRef, (song) => {
        if (song) {
          if (song.wishlist && song.wishlist[userId]) {
            song.wishlist[userId] = null;
            setActive(false)
          } else {
            if (!song.wishlist) {
              song.wishlist = {};
            }
            song.wishlist[userId] = true;
            setActive(true)
          }
        }
        return song;
      });
    }
  }
  return(
    <>
      <button className={"w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] " +
        (isActive ? "border-primary bg-primary" : "border-white bg-transparent")
      }
        onClick={handleAddWishList}
      >
        <FaHeart/>
      </button>
    </>
  )
}
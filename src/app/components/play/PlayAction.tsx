"use client"
import { FaPause, FaPlay } from "react-icons/fa";
import { FaBackwardStep, FaForwardStep } from "react-icons/fa6";

export default function PlayAction() {
  const handlePlay = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio")
    if(elementPlayAudio){
      const elementAudio = elementPlayAudio.querySelector(".inner-audio")
      const elementPlay = elementPlayAudio.querySelector(".box-button-play")
      if (elementPlay.classList.contains("play")){
        elementPlay.classList.remove("play")
        elementAudio.pause()
      }else{
        elementPlay.classList.add("play")
        elementAudio.play()
      }
    }
  }

  const handleNextPrev = (action: string) => {
    const elementPlayAudio: any = document.querySelector(".play-audio")
    const idSongCurrent = elementPlayAudio.getAttribute("song-id")
    const elementSongCurrent = document.querySelector(`[song-list] [song-id='${idSongCurrent}']`)
    if(elementSongCurrent) {
      switch (action) {
        case "next":
          const elementSongNext = elementSongCurrent.nextElementSibling;
          if(elementSongNext){
            const buttonPlay:any = elementSongNext.querySelector("button[button-play]");
            buttonPlay.click()
          }
          break;
        default:
          const elementSongPrev = elementSongCurrent.previousElementSibling;
          if(elementSongPrev){
            const buttonPlay:any = elementSongPrev.querySelector("button[button-play]");
            buttonPlay.click()
          }
          break;
      }
    }
  }
  return (
    <>
      <div className="flex items-center justify-center text-[16px]">
        <button className="" onClick={() => handleNextPrev("prev")}>
          <FaBackwardStep />
        </button>
        <button className="w-[32px] h-[32px] bg-primary rounded-full mx-[42px] inline-flex items-center justify-center box-button-play" onClick={handlePlay}>
          <FaPlay className="inner-item-play"/>
          <FaPause className="inner-item-pause"/>
        </button>
        <button className="" onClick={() => handleNextPrev("next")}>
          <FaForwardStep />
        </button>
      </div>
    </>
  );
}

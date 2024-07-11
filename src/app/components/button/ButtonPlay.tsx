"use client"
import { FaPlay } from "react-icons/fa";
import { ISongItem } from "../Song/SongInterface";

export default function ButtonPlay(props: ISongItem) {
  const {
    id = "",
    image = "",
    title = "",
    link = "",
    singer = "",
    listen = 0,
    audio = "",
    className = ""
  } = props;
  const handlePlay = () => {
   const elementPlayAudio: any = document.querySelector(".play-audio");
   
   if(elementPlayAudio){

    elementPlayAudio.setAttribute("song-id", id);

    const elementAudio = elementPlayAudio.querySelector(".inner-audio");
    const elementSource = elementAudio?.querySelector(".inner-source");
    const elementImage = elementPlayAudio.querySelector(".inner-image")
    const elementTitle = elementPlayAudio.querySelector(".inner-title")
    const elementSinger = elementPlayAudio.querySelector(".inner-singer")
    const elementPlay = elementPlayAudio.querySelector(".box-button-play")
    const elementPlayTimeTotal = elementPlayAudio.querySelector(".inner-total")
    const elementPlayTimeCurrent = elementPlayAudio.querySelector(".inner-current")

    elementSource.src = audio
    elementAudio.load();
    elementAudio.play();

    elementAudio.onloadedmetadata = () => {
      const totleTime = elementAudio.duration;
      elementPlayTimeTotal.max = totleTime

      elementAudio.ontimeupdate = () => {
        const CurrentTime = elementAudio.currentTime;
        elementPlayTimeTotal.value = CurrentTime
        const Percent = CurrentTime*100 / totleTime;
        elementPlayTimeCurrent.style.width = `${Percent}%`
      }
      
    }

    elementPlayAudio.classList.remove("hidden")


    elementImage.src = image
    elementTitle.innerHTML = title
    elementSinger.innerHTML = singer
    elementPlay.classList.add("play")

   }
  }
  return(
    <>
      <button className={className}
        onClick={handlePlay}
        button-play=""
      >
        <FaPlay/>
      </button>
    </>
  )
}
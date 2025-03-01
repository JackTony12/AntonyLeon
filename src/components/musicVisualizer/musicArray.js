import valentineImg from "../../assets/images/astronauta.webp"
import valentineSong from "../../../public/music/valentineKotori.mp3"
import aikaImg from "../../assets/images/aikaimage2.webp"
import aikaKotoriSong from "../../../public/music/AikaKotoriStarscream.mp3"
import kotoriImg from "../../assets/images/kotori.webp"
import kotoriSong from "../../../public/music/kotori.mp3"
const musicData = [
  {
    songName: "VALENTINE & 4AM",
    artist: "Kotori (Remix)",
    duration: "4:07",
    date: "2017",
    type: "Dubstep",
    color: "#E5EFF940",
    downloadUrl: "/music/valentineKotori.mp3",
    copyRight: "Libre",
    image: valentineImg,
    song: valentineSong,
  },
  {
    songName: "Starscream",
    artist: "Kotori & Aika",
    duration: "4:08",
    date: "2018",
    type: "Dubstep",
    color: "#ffcd6fa8",
    copyRight: "Libre",
    downloadUrl: "/music/AikaKotoriStarscream.mp3",
    image: aikaImg,
    song: aikaKotoriSong,
  },
  {
    songName: "Kudere",
    artist: "Kotori",
    duration: "3:25",
    date: "2017",
    type: "Dubstep",
    color: "#d606ff59",
    copyRight: "Libre",
    downloadUrl: "/music/kotori.mp3",
    image: kotoriImg,
    song: kotoriSong,
  },
]

export default musicData

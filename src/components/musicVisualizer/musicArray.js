import valentineImg from "../../assets/images/astronauta.jpg"
import valentineSong from "../../../public/music/valentineKotori.mp3"
import aikaImg from "../../assets/images/aikaimage2.jpg"
import aikaKotoriSong from "../../../public/music/AikaKotoriStarscream.mp3"
import sickboyImg from "../../assets/images/sickboy.webp"
import sickboySong from "../../../public/music/sickboy.mp3"
import kotoriImg from "../../assets/images/kotori.webp"
import kotoriSong from "../../../public/music/kotori.mp3"
const musicData = [
  {
    songName: "VALENTINE & 4AM",
    artist: "Kotori (Remix)",
    duration: "4,07",
    date: "2017",
    type: "Dubstep",
    color: "#00ffbfe1",
    downloadUrl: "/public/music/valentineKotori.mp3",
    copyRight: "No",
    image: valentineImg,
    song: valentineSong,
  },
  {
    songName: "Starscream",
    artist: "Kotori & Aika",
    duration: "4,08",
    date: "2018",
    type: "Dubstep",
    color: "#ffcd6fa8",
    copyRight: "No",
    downloadUrl: "/public/music/AikaKotoriStarscream.mp3",
    image: aikaImg,
    song: aikaKotoriSong,
  },
  {
    songName: "Kudere",
    artist: "Kotori",
    duration: "3,25",
    date: "2017",
    type: "Dubstep",
    color: "#d606ff59",
    copyRight: "No",
    downloadUrl: "/public/music/kotori.mp3",
    image: kotoriImg,
    song: kotoriSong,
  },
  {
    songName: "Sick Boy",
    artist: "The chainsmokers-(Ray Volpe Remix)",
    duration: "4,29",
    date: "2019",
    type: "Dubstep",
    color: "#acacac59",
    copyRight: "No",
    downloadUrl: "/public/music/sickboy.mp3",
    image: sickboyImg,
    song: sickboySong,
  },
]

export default musicData

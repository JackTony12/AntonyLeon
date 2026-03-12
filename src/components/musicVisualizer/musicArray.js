import valentineImg from "../../assets/images/astronauta.webp"
import valentineSong from "../../../public/music/valentineKotori.mp3"
import kotoriImg from "../../assets/images/kotori.webp"
import kotoriSong from "../../../public/music/kotori.mp3"
import boundSong from "../../../public/music/Bound.mp3"
import boundImg from "../../assets/images/kokushivo.webp"
const musicData = [
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
  {
    songName: "Bound",
    artist: "Nanomake",
    duration: "4:28",
    date: "2016",
    type: "Dubstep",
    color: "#ff2e2eb2",
    copyRight: "Libre",
    downloadUrl: "/music/Bound.mp3",
    image: boundImg,
    song: boundSong,
  },
  {
    songName: "VALENTINE & 4AM",
    artist: "Kotori (Remix)",
    duration: "4:07",
    date: "2017",
    type: "Dubstep",
    color: "#0059ff67",
    downloadUrl: "/music/valentineKotori.mp3",
    copyRight: "Libre",
    image: valentineImg,
    song: valentineSong,
  },

]

export default musicData

import valentineImg from "../../assets/images/astronauta.webp"
import valentineSong from "../../../public/music/valentineKotori.mp3"
import kotoriImg from "../../assets/images/kotori.webp"
import kotoriSong from "../../../public/music/kotori.mp3"
import locosSong from "../../../public/music/Locos.mp3"
import locosImg from "../../assets/images/locosgif.gif"
const musicData = [
  {
    songName: "Locos",
    artist: "Leon Larregui",
    duration: "2:55",
    date: "2016",
    type: "pop",
    color: "#ffcd6fa8",
    copyRight: "Copyrighted",
    downloadUrl: "/music/Locos.mp3",
    image: locosImg,
    song: locosSong,
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

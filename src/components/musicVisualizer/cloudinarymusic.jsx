import { useEffect, useState, useRef } from "react"

function Reproductor() {
  const [indexA, setIndex] = useState(1)
  const audioref = useRef(null)
  const audios = [
    "https://res.cloudinary.com/dyfeb0sca/video/upload/v1741151064/videoplayback_m97wtx.mp4",
    "https://res.cloudinary.com/dyfeb0sca/video/upload/v1741151796/utomp3.com_-_Borgore_I_Dont_Care_Official_Music_Video_c84f8f.mp3",
  ]

  useEffect(() => {
    const song = new Audio(audios[indexA])
    audioref.current = song

    return () => {
      if (audioref.current) audioref.current.pause() 
    }
  }, [indexA])

  const playAudio = () => {
    if (audioref.current) {
      audioref.current.play()
    }
  }

  const pauseAudio = () => {
    if (audioref.current) {
      audioref.current.pause()
    }
  }
  const nextAudio = () => {
    if (audioref.current) {
      audioref.current.pause()
    }
    setIndex((prevIndex) => (prevIndex + 1) % audios.length)
  }

  return (
    <div>
      <button onClick={playAudio}>▶️ Reproducir</button>
      <button onClick={pauseAudio}>⏸️ Pausar</button>
      <button onClick={nextAudio}>⏸️ next</button>
    </div>
  )
}

export default Reproductor

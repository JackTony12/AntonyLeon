import React, { useEffect, useRef, useState } from "react"
import AudioMotionAnalyzer from "audiomotion-analyzer"
import musicData from "./musicArray.js"
import userSongImg from "../../assets/images/logotrazo.webp"
import "./styles.css"
import Loader from "./loader.jsx"
import ControlIcons from "./controlicons.jsx"
const AudioVisualizer = () => {
  const controlIcons = ControlIcons()
  const containerRef = useRef(null)
  const audioRef = useRef(null)
  const sectionRef = useRef(null)
  const audioMotionRef = useRef(null)
  const [isPlaying, setPlaying] = useState(false)
  const [songIndex, setSongIndex] = useState(0)
  const [energy, setEnergy] = useState(0)
  const [generalVolume, setGeneralVolume] = useState(1)
  const [isMute, setIsMute] = useState(false)
  const [volumeMode, setVolumeMode] = useState(false)
  const [uploadSong, setUploadSong] = useState(null)

  const handleVolumeScrollControl = () => {
    if (!volumeMode) return
    const section = sectionRef.current
    if (!section) return

    const { top, bottom, height } = section.getBoundingClientRect()
    const windowHeight = window.innerHeight

    const visibleHeight = Math.min(bottom, windowHeight) - Math.max(top, 0)
    const visibilityRatio = Math.max(0, Math.min(1, visibleHeight / height))

    const volume = Math.max(0.01, visibilityRatio)

    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }

  useEffect(() => {
    const handleScrollResize = () => {
      handleVolumeScrollControl()
    }

    if (volumeMode) {
      window.addEventListener("scroll", handleScrollResize)
      window.addEventListener("resize", handleScrollResize)
    }

    return () => {
      window.removeEventListener("scroll", handleScrollResize)
      window.removeEventListener("resize", handleScrollResize)
    }
  }, [volumeMode])

  useEffect(() => {
    const audio = new Audio(
      uploadSong ? URL.createObjectURL(uploadSong) : musicData[songIndex].song
    )
    audioRef.current = audio

    const analyzer = new AudioMotionAnalyzer(containerRef.current, {
      source: audio,
      height: 250,
      width: 700,
      gradient: "rainbow",
      showScaleY: true,
      frequencyScale: "log",
      bgAlpha: 2,
      ledBars: true,
      showBgColor: false,
      roundBars: true,
      mode: 6,
      reflexRatio: 0,
      fillAlpha: 0,
      lineWidth: 1,
      linearAmplitude: false,
      alphaBars: true,
      showScaleX: false,
      showPeaks: false,
    })
    audio.addEventListener("loadedmetadata", () => {
      const audioDuration = audioRef.current.duration / 60
      console.log(Math.floor((audioDuration * 100) / 100))
    })
    const updateEnergy = () => {
      const newEnergy = analyzer.getEnergy("bass")
      setEnergy(newEnergy)

      requestAnimationFrame(updateEnergy)
    }

    updateEnergy()

    audioMotionRef.current = analyzer

    return () => {
      if (audioMotionRef.current) {
        audioMotionRef.current.destroy()
      }
    }
  }, [songIndex, uploadSong])

  const handlePlay = () => {
    if (!isPlaying) {
      setPlaying(!isPlaying)
      audioRef.current
        .play()
        .then()
        .catch((error) => {
          console.log("Error al reproducir el audio:", error)
        })
    } else if (isPlaying) {
      audioRef.current.pause()
      setPlaying(!isPlaying)
    }
  }
  const handleVolume = (vol) => {
    if (!volumeMode) {
      const newVol = parseFloat(vol.target.value)
      setGeneralVolume(newVol)
      setIsMute(false)
      if (audioRef.current) {
        audioRef.current.volume = newVol
      }
    }
  }
  const handleNextSong = (action) => {
    if (action == "next") {
      setSongIndex((prevIndex) => (prevIndex + 1) % musicData.length)
      setPlaying(false)
    } else if (action == "prev") {
      setSongIndex(
        (prevIndex) => (prevIndex - 1 + musicData.length) % musicData.length
      )
      setPlaying(false)
    }
  }
  const handleMute = (prop) => {
    if (prop == "mute" && audioRef.current && !volumeMode) {
      audioRef.current.volume = 0
      setIsMute(!isMute)
    } else if (prop == "unmute") {
      audioRef.current.volume = generalVolume
      setIsMute(!isMute)
    }
  }
  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    setUploadSong(file)
    setPlaying(false)
  }
  const handleDeleteFile = () => {
    setUploadSong(null)
    URL.revokeObjectURL(uploadSong)
    setPlaying(false)
  }
  return (
    <>
      <div className='dubstep-title-container'>
        <h2 className='dubstep-zone-title'>Dubstep zone</h2>
        <div className='wrapper'>
          <p>Música</p>
          <div className='words'>
            <span className='w-span'>libre</span>
            <span className='w-span'>sin copyrigth</span>
            <span className='w-span'>free</span>
          </div>
        </div>
      </div>
      <section ref={sectionRef} className='audio-container'>
        <div className='music-controls'>
          <div className='m-control-separator'>
            <div className='m-title'>
              <h3 style={{ fontSize: "1.7em" }}>
                {uploadSong
                  ? "Cancion personalizada"
                  : musicData[songIndex].songName}{" "}
              </h3>
              <span>
                {uploadSong ? "Desconocido" : musicData[songIndex].artist}
              </span>
            </div>

            <span className='music-counter'>
              {songIndex + 1}/{musicData.length}
            </span>
          </div>
          {uploadSong ? (
            <img
              src={userSongImg}
              style={{
                boxShadow: `0px 0px ${energy * 40}px white `,
              }}
            />
          ) : (
            <img
              style={{
                boxShadow: `0px 0px ${energy * 40}px ${
                  musicData[songIndex].color
                }`,
              }}
              src={musicData[songIndex].image}
              alt='Skrillex'
            />
          )}
        </div>
        <div className='music-visualizer' ref={containerRef}></div>
        <div className='music-info'>
          <div className='m-i-volume-section'>
            <div className='m-i-volumeBar-container'>
              <div>
                <div className='b-controls-container'>
                  <button
                    className='m-button'
                    onClick={() => handleNextSong("prev")}
                  >
                    {controlIcons[3].prev}
                  </button>

                  <button className='m-button' onClick={handlePlay}>
                    {isPlaying ? controlIcons[1].pause : controlIcons[0].play}
                  </button>
                  <button
                    className='m-button'
                    onClick={() => handleNextSong("next")}
                  >
                    {controlIcons[2].next}
                  </button>
                </div>
                <span>Smart controls</span>
              </div>
              <div>
                <div>
                  <span className='m-button'>{generalVolume * 10}% </span>
                  <label className='slider'>
                    <input
                      type='range'
                      step='0.1'
                      min={0}
                      max={1}
                      onChange={handleVolume}
                      className='level'
                    />
                  </label>
                  <button
                    onClick={() => handleMute(isMute ? "unmute" : "mute")}
                    className='m-button'
                  >
                    {isMute ? controlIcons[4].volOff : controlIcons[6].volOn}
                  </button>
                </div>
                <div>
                  <div className='tooltip-container'>
                    <a
                      className='m-button'
                      href={musicData[songIndex].downloadUrl}
                      download={`${musicData[songIndex].songName}.mp3`}
                    >
                      {controlIcons[5].down}
                    </a>
                    <span className='tooltip'>Descargar</span>
                  </div>
                  <button
                    className='m-button volume-mode tooltip-container'
                    onClick={() => setVolumeMode((prev) => !prev)}
                  >
                    {volumeMode ? "Scroll" : "Manual"}
                    <span className='tooltip'>Volumen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='music-info-section'>
            <h3>Informacion de la pista</h3>
            <div>
              <ul>
                <li>
                  Nombre: {uploadSong ? "?" : musicData[songIndex].songName}
                </li>
              </ul>
              <ul>
                <li>
                  Artista: {uploadSong ? "?" : musicData[songIndex].artist}
                </li>
              </ul>
              <ul>
                <li>
                  Lanzamiento: {uploadSong ? "?" : musicData[songIndex].date}
                </li>
              </ul>
              <ul>
                <li>
                  Duracion: {uploadSong ? "?" : musicData[songIndex].duration}{" "}
                  min
                </li>
              </ul>
              <ul>
                <li>
                  CopyRight: {uploadSong ? "?" : musicData[songIndex].copyRight}
                </li>
              </ul>
            </div>
            <div className='upload-music-container'>
              <h3>Sube tu musica</h3>
              <div>
                <p>
                  Sube tu cancion favorita y disfruta del visualizador al ritmo
                  perfecto
                </p>
                <p>FORMATO SOPORTADO</p>
                <p>MP3</p>
                <div className='flex-separator'>
                  <input
                    style={{ display: "none" }}
                    type='file'
                    id='file-upload'
                    accept='audio/*'
                    onChange={handleFileUpload}
                  />
                  <label
                    className='m-button label-upload'
                    htmlFor='file-upload'
                  >
                    Subir&nbsp;{controlIcons[8].upload}
                  </label>
                  <button
                    className='m-button delete-upload'
                    onClick={handleDeleteFile}
                  >
                    Eliminar&nbsp;{controlIcons[7].delete}
                  </button>
                </div>
                <div className='upload-status'>
                  <p>
                    {uploadSong
                      ? "CANCION PERSONALIZADA LISTA PARA REPRODUCIR"
                      : "NO SE HA CARGADO NINGUNA CANCION"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AudioVisualizer

import React, { useEffect, useRef, useState } from "react"
import AudioMotionAnalyzer from "audiomotion-analyzer"
import musicData from "./musicArray.js"
import userSongImg from "../../assets/images/logotrazo.webp"
import "./styles.css"
import ModalVisualizer from "./modalVisualizer.jsx"
import ControlIcons from "./controlicons.jsx"
const AudioVisualizer = () => {
  const controlIcons = ControlIcons()
  const containerRef = useRef(null)
  const audioRef = useRef(null)
  const sectionRef = useRef(null)
  const audioMotionRef = useRef(null)
  const [isPlaying, setPlaying] = useState(false)
  const [isMute, setIsMute] = useState(false)
  const [songIndex, setSongIndex] = useState(0)
  const [aboutSection, setAboutSection] = useState(false)
  const [energy, setEnergy] = useState(0)
  const [generalVolume, setGeneralVolume] = useState(1)
  const [volumeMode, setVolumeMode] = useState(false)
  const [uploadSong, setUploadSong] = useState(null)
  const [seekTime, setSeekTime] = useState(0)
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
      setSeekTime(0)
    } else if (action == "prev") {
      setSongIndex(
        (prevIndex) => (prevIndex - 1 + musicData.length) % musicData.length
      )
      setSeekTime(0)
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
    setSeekTime(0)
  }
  const handleDeleteFile = () => {
    if (!uploadSong) return
    setUploadSong(null)
    URL.revokeObjectURL(uploadSong)
    setPlaying(false)
    setSeekTime(0)
  }
  const handleDuration = (e) => {
    const time = e.target.value
    setSeekTime(time)
    if (audioRef.current) audioRef.current.currentTime = time
  }

  const aboutInfo = []
  const handelAboutSection = () => {
    setAboutSection((prevIndex) => (prevIndex + 1) % aboutInfo.length)
  }
  return (
    <>
      <div className='dubstep-title-container'>
        <div>
          <h2 className='dubstep-zone-title h-title '>Dubstep zone</h2>
        </div>
        <div className='wrapper'>
          <p>Música</p>
          <div className='words'>
            <span className='w-span'>libre</span>
            <span className='w-span'>sin copyright</span>
            <span className='w-span'>free</span>
          </div>
        </div>
      </div>
      <section ref={sectionRef} className='audio-container'>
        <div className='music-controls'>
          <div className='m-control-separator'>
            <div className='m-title'>
              <h3 style={{ fontSize: "1.7em" }}>
                {uploadSong ? uploadSong.name : musicData[songIndex].songName}{" "}
              </h3>
              <span>
                {uploadSong ? "Desconocido" : musicData[songIndex].artist}
              </span>
            </div>

            <span className='music-counter '>
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
                <span>Controles</span>
                <div className='b-controls-container'>
                  <button
                    aria-label='PrevSong'
                    className='m-button'
                    onClick={() => handleNextSong("prev")}
                  >
                    {controlIcons[3].prev}
                  </button>

                  <button
                    aria-label='PlaySong'
                    className='m-button'
                    onClick={handlePlay}
                  >
                    {isPlaying ? controlIcons[1].pause : controlIcons[0].play}
                  </button>
                  <button
                    aria-label='NextSong'
                    className='m-button'
                    onClick={() => handleNextSong("next")}
                  >
                    {controlIcons[2].next}
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <span className='m-button'>{generalVolume * 10}% </span>
                  <label className='slider'>
                    <input
                      aria-label='volRange'
                      type='range'
                      step='0.1'
                      min={0}
                      max={1}
                      onChange={handleVolume}
                      className='level'
                    />
                  </label>

                  <button
                    aria-label='MuteSong'
                    onClick={() => handleMute(isMute ? "unmute" : "mute")}
                    className='m-button'
                  >
                    {isMute ? controlIcons[4].volOff : controlIcons[6].volOn}
                  </button>
                </div>
                <div>
                  <div className='tooltip-container'>
                    <a
                      aria-label='DowloadCurrentSong'
                      className='m-button'
                      href={musicData[songIndex].downloadUrl}
                      download={`${musicData[songIndex].songName}.mp3`}
                    >
                      {controlIcons[5].down}
                    </a>
                    <span className='tooltip'>Descargar</span>
                  </div>
                  <div className='tooltip-container'>
                    <button
                      aria-label='VolSong'
                      className='m-button volume-mode '
                      onClick={() => setVolumeMode((prev) => !prev)}
                    >
                      {volumeMode ? "Scroll" : "Manual"}
                    </button>
                    <span className='tooltip'>Volumen</span>
                  </div>
                </div>
              </div>
              <div>
                <input
                  aria-label='DurationSong'
                  style={{ width: "100%", cursor: "pointer" }}
                  className='duration-input'
                  type='range'
                  step='1'
                  value={audioRef.current ? audioRef.current.currentTime : 0}
                  max={
                    audioRef.current && !isNaN(audioRef.current.duration)
                      ? audioRef.current.duration
                      : 0
                  }
                  onChange={handleDuration}
                />
              </div>
            </div>
          </div>
          <div className='music-info-section'>
            <h3>Informacion de la pista</h3>
            <div>
              <ul>
                <li>
                  <span>
                    <svg
                      stroke='currentColor'
                      fill='white'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M18.41 5.8 17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83zM6.21 18H5v-1.21l8.66-8.66 1.21 1.21L6.21 18zM11 20l4-4h6v4H11z'></path>
                    </svg>
                  </span>
                  Nombre:
                  <span>
                    {uploadSong
                      ? uploadSong.name
                      : musicData[songIndex].songName}
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>
                    <svg
                      stroke='currentColor'
                      fill='white'
                      strokeWidth='0'
                      viewBox='0 0 448 512'
                      height='1em'
                      width='1em'
                    >
                      <path d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'></path>
                    </svg>
                  </span>
                  Artista:
                  <span>{uploadSong ? "?" : musicData[songIndex].artist}</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>
                    <svg
                      stroke='currentColor'
                      fill='white'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z'></path>
                    </svg>
                  </span>
                  Lanzamiento:
                  <span>{uploadSong ? "?" : musicData[songIndex].date}</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>
                    <svg
                      stroke='currentColor'
                      fill='white'
                      strokeWidth='0'
                      viewBox='0 0 512 512'
                      height='1em'
                      width='1em'
                    >
                      <path d='M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'></path>
                    </svg>
                  </span>
                  Duración:
                  <span>
                    {uploadSong ? "?" : musicData[songIndex].duration}
                  </span>
                  min
                </li>
              </ul>
              <ul>
                <li>
                  <span>
                    <svg
                      stroke='currentColor'
                      fill='white'
                      strokeWidth='0'
                      viewBox='0 0 512 512'
                      height='1em'
                      width='1em'
                    >
                      <path d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z'></path>
                    </svg>
                  </span>
                  CopyRight:
                  <span>
                    {uploadSong ? "?" : musicData[songIndex].copyRight}
                  </span>
                </li>
              </ul>
            </div>
            <div className='upload-music-container'>
              <div className='upload-music-title'>
                <h3>Sube tu música</h3>
                <button
                  type='button'
                  className='m-button'
                  aria-label='aboutSection'
                  onClick={() => setAboutSection(!aboutSection)}
                >
                  <svg
                    stroke='currentColor'
                    fill='white'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    height='1.2em'
                    width='1.2em'
                  >
                    <path d='M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z'></path>
                    <path d='M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z'></path>
                  </svg>
                </button>
              </div>
              {aboutSection ? (
                <ModalVisualizer />
              ) : (
                <div>
                  <p>
                    Sube tu canción favorita y disfruta del visualizador al
                    ritmo perfecto
                  </p>
                  <p>FORMATOS SOPORTADOS</p>
                  <p>MP3, M4a</p>
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
                      aria-label='DeleteSong'
                      className='m-button delete-upload'
                      onClick={handleDeleteFile}
                    >
                      Eliminar&nbsp;{controlIcons[7].delete}
                    </button>
                  </div>
                  <div className='upload-status'>
                    <p className={uploadSong ? "uploadtrue" : "uploadfalse"}>
                      {uploadSong
                        ? "CANCiÓN PERSONALIZADA LISTA PARA REPRODUCIR"
                        : "NO SE HA CARGADO NINGUNA CANCIÓN"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AudioVisualizer

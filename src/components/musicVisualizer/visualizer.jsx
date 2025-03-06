import React, { useEffect, useRef, useState } from "react"
import AudioMotionAnalyzer from "audiomotion-analyzer"
import musicData from "./musicArray.js"
import userSongImg from "../../assets/images/logotrazo.webp"
import "./styles.css"
import ModalVisualizer from "./modalVisualizer.jsx"
import InfoSong from "./infoSong.jsx"
import VisualizerlIcons from "./controlicons.jsx"
import Orb from "./orb.jsx"
const AudioVisualizer = () => {
  const visualizerIcons = VisualizerlIcons()
  const containerRef = useRef(null)
  const audioRef = useRef(null)
  const sectionRef = useRef(null)
  const audioMotionRef = useRef(null)
  const [songIndex, setSongIndex] = useState(0)
  const [energy, setEnergy] = useState(0)
  const [generalVolume, setGeneralVolume] = useState(1)
  const [uploadSong, setUploadSong] = useState(null)
  const [seekTime, setSeekTime] = useState(0)
  const [booleanState, setBooleanState] = useState({
    isPlaying: false,
    isMute: false,
    aboutSection: false,
    volumeMode: false,
  })
  const handleChangeStates = (key) => {
    setBooleanState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }))
  }
  const handleVolumeScrollControl = () => {
    if (!booleanState.volumeMode) return
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

    if (booleanState.volumeMode) {
      window.addEventListener("scroll", handleScrollResize)
      window.addEventListener("resize", handleScrollResize)
    }

    return () => {
      window.removeEventListener("scroll", handleScrollResize)
      window.removeEventListener("resize", handleScrollResize)
    }
  }, [booleanState.volumeMode])

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
      bgAlpha: 3,
      ledBars: true,
      showBgColor: false,
      roundBars: true,
      mode: 6,
      reflexRatio: 0,
      fillAlpha: 0,
      lineWidth: 1,
      linearAmplitude: false,
      alphaBars: false,
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
    const handleAudioEnd = () => {
      console.log("El audio ha terminado de reproducirse")
      handleNextSong("next")
      setSeekTime(0)
    }
    audio.addEventListener("ended", handleAudioEnd)
    return () => {
      if (audioMotionRef.current) {
        audioMotionRef.current.destroy()
      }
      audio.removeEventListener("ended", handleAudioEnd)
    }
  }, [songIndex, uploadSong])

  const handlePlay = () => {
    if (!booleanState.isPlaying) {
      handleChangeStates("isPlaying")

      audioRef.current
        .play()
        .then()
        .catch((error) => {
          console.log("Error al reproducir el audio:", error)
        })
    } else if (booleanState.isPlaying) {
      audioRef.current.pause()
      handleChangeStates("isPlaying")
    }
  }
  const handleVolume = (vol) => {
    if (!booleanState.volumeMode) {
      const newVol = parseFloat(vol.target.value)
      setGeneralVolume(newVol)
      setBooleanState((prev) => ({ ...prev, isMute: false }))
      if (audioRef.current) {
        audioRef.current.volume = newVol
      }
    }
  }
  const handleNextSong = (action) => {
    if (action == "next") {
      setSongIndex((prevIndex) => (prevIndex + 1) % musicData.length)
      setBooleanState((prev) => ({
        ...prev,
        isPlaying: false,
      }))
      setSeekTime(0)
    } else if (action == "prev") {
      setSongIndex(
        (prevIndex) => (prevIndex - 1 + musicData.length) % musicData.length
      )
      setSeekTime(0)
      setBooleanState((prev) => ({
        ...prev,
        isPlaying: false,
      }))
    }
  }
  const handleMute = (prop) => {
    if (prop == "mute" && audioRef.current && !booleanState.volumeMode) {
      audioRef.current.volume = 0
      handleChangeStates("isMute")
    } else if (prop == "unmute") {
      audioRef.current.volume = generalVolume
      handleChangeStates("isMute")
    }
  }
  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    setUploadSong(file)
    setBooleanState((prev) => ({
      ...prev,
      isPlaying: false,
    }))
    setSeekTime(0)
  }
  const handleDeleteFile = () => {
    if (!uploadSong) return
    setUploadSong(null)
    URL.revokeObjectURL(uploadSong)
    setBooleanState((prev) => ({
      ...prev,
      isPlaying: false,
    }))
    setSeekTime(0)
  }
  const handleDuration = (e) => {
    const time = e.target.value
    setSeekTime(time)
    if (audioRef.current) audioRef.current.currentTime = time
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
          <Orb energy={energy} musicData={musicData} songIndex={songIndex} />
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
                boxShadow: `0px 0px ${energy * 40}px #0059ff67 `,
              }}
            />
          ) : (
            <img
              src={musicData[songIndex].image}
              alt='Skrillex'
              style={{
                boxShadow: `0px 0px ${energy * 40}px ${
                  musicData[songIndex].color
                } `,
              }}
            />
          )}
        </div>
        <div className='music-visualizer' ref={containerRef}></div>
        <div className='music-info'>
          <div className='m-i-volume-section'>
            <div className='m-i-volumeBar-container'>
              <div>
                <h3>
                  Controles
                  <span className='headphones'>
                    {visualizerIcons[10].headPhones} Mejor experiencia
                  </span>
                </h3>

                <div className='b-controls-container'>
                  <button
                    aria-label='PrevSong'
                    className='m-button'
                    onClick={() => handleNextSong("prev")}
                  >
                    {visualizerIcons[3].prev}
                  </button>

                  <button
                    aria-label='PlaySong'
                    className='m-button'
                    onClick={handlePlay}
                  >
                    {booleanState.isPlaying
                      ? visualizerIcons[1].pause
                      : visualizerIcons[0].play}
                  </button>
                  <button
                    aria-label='NextSong'
                    className='m-button'
                    onClick={() => handleNextSong("next")}
                  >
                    {visualizerIcons[2].next}
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
                    onClick={() =>
                      handleMute(booleanState.isMute ? "unmute" : "mute")
                    }
                    className='m-button'
                  >
                    {booleanState.isMute
                      ? visualizerIcons[4].volOff
                      : visualizerIcons[6].volOn}
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
                      {visualizerIcons[5].down}
                    </a>
                    <span className='tooltip'>Descargar</span>
                  </div>
                  <div className='tooltip-container'>
                    <button
                      aria-label='VolSong'
                      className='m-button volume-mode '
                      onClick={() => handleChangeStates("volumeMode")}
                    >
                      {booleanState.volumeMode ? "Scroll" : "Manual"}
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
            <h3>Información de la pista</h3>
            <InfoSong
              uploadSong={uploadSong}
              musicData={musicData}
              songIndex={songIndex}
            />
            <div className='upload-music-container'>
              <div className='upload-music-title'>
                <h3>Sube tu música</h3>
                <button
                  type='button'
                  className='m-button'
                  aria-label='aboutSection'
                  onClick={() => handleChangeStates("aboutSection")}
                >
                  {visualizerIcons[9].info}
                </button>
              </div>
              {booleanState.aboutSection ? (
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
                      Subir&nbsp;{visualizerIcons[8].upload}
                    </label>
                    <button
                      aria-label='DeleteSong'
                      className='m-button delete-upload'
                      onClick={handleDeleteFile}
                    >
                      Eliminar&nbsp;{visualizerIcons[7].delete}
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

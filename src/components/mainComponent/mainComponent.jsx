import React from "react"
import "../../styles/mainStyles.css"
import "../../styles/generalQueries.css"
import Header from "../headerComponentFolder/header"
import CvBackComponent from "../cvComponentFolder/Cv_backComponent"
import SkilsTarjetasComponent from "../skillComponentFolder/skilsComponent"
import FooterComponent from "../footerComponentFolder/footerComponent"
import VideoComponent from "../videoComponentFolder/videoComponent"
import Proyects from "../proyectsComponent/proyects"
import Snap from "../scrollSnap/snap"
import Habanerox from "../habanerox/habanerox"
export function MainComponent() {
  return (
    <>
      <Header />
      <CvBackComponent />
      <SkilsTarjetasComponent />
      <Proyects />
      <Snap />
      <Habanerox />
      <VideoComponent />
      <FooterComponent />
    </>
  )
}

import React from "react"
import "../styles/mainStyles.css"
import Header from "../headerComponentFolder/header"
import CvBackComponent from "../cvComponentFolder/Cv_backComponent"
import SkilsTarjetasComponent from "../skillComponentFolder/skilsComponent"
import FooterComponent from "../footerComponentFolder/footerComponent"
import VideoComponent from "../videoComponentFolder/videoComponent"
import ThreeComponent from "../threeComponentFolder/threeComponent"

export function MainComponent() {
  return (
    <div className="main-body">
      <Header />
      <CvBackComponent />
      <SkilsTarjetasComponent />
      <VideoComponent />
      <ThreeComponent />
      <FooterComponent />
    </div>
  )
}

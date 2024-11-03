import React from "react"
import "../../styles/mainStyles.css"
import "../../styles/generalQueries.css"
import Header from "../headerComponentFolder/header"
import CvBackComponent from "../cvComponentFolder/Cv_backComponent"
import SkilsTarjetasComponent from "../skillComponentFolder/skilsComponent"
import FooterComponent from "../footerComponentFolder/footerComponent"
import VideoComponent from "../videoComponentFolder/videoComponent"
import Snap from "../scrollSnap/snap"
import CardHabanerox from "../habanerox/cardHabanerox"
import ProyectsNew from "../newProyects/proyectsNew"
import Blog from "../../components/blogCodigo/blog"
export function MainComponent() {
  return (
    <>
      <Header />
      <CvBackComponent />
      <ProyectsNew />
      <SkilsTarjetasComponent />
      <Snap />
      <CardHabanerox />
      <Blog />
      <VideoComponent />
      <FooterComponent />
    </>
  )
}

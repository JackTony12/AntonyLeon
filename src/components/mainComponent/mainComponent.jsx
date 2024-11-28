import React from "react"
import "../../styles/mainStyles.css"
import "../../styles/generalQueries.css"
import Header from "../headerComponentFolder/header"
import CvBackComponent from "../cvComponentFolder/Cv_backComponent"
import FooterComponent from "../footerComponentFolder/footerComponent"
import ServicesComponent from "../ServicesComponentFolder/videoComponent"
import Models3d from "../3dmodelsFolder/models"
import DelAcosta from "../delAcosta/delAcosta"
import ProyectsNew from "../newProyects/proyectsNew"
import Blog from "../../components/blogCodigo/blog"
import Skills from "../skillComponentFolder/iconos"
export function MainComponent() {
  return (
    <>
      <Header />
      <CvBackComponent />
      <ProyectsNew />
      <Skills />
      <Models3d />
      <DelAcosta />
      <Blog />
      <ServicesComponent />
      <FooterComponent />
    </>
  )
}

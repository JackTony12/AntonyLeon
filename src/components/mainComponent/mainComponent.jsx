import React from "react"
import "../../styles/mainStyles.css"
import "../../styles/generalQueries.css"
import Header from "../headerComponentFolder/header"
import CvBackComponent from "../cvComponentFolder/Cv_backComponent"
import FooterComponent from "../footerComponentFolder/footerComponent"
import ServicesComponent from "../ServicesComponentFolder/servicesComponent"
import Models3d from "../3dmodelsFolder/models"
import DelAcosta from "../delAcosta/delAcostaComponent"
import ProyectsNew from "../newProyects/proyectsNew"
import Blog from "../../components/blogCodigo/blog"
import Skills from "../skillComponentFolder/iconos"
import Visualizer from "../musicVisualizer/visualizer"
export function MainComponent() {
  return (
    <>
      <Header />
      <CvBackComponent />
      <ProyectsNew />
      <Skills />
      <Visualizer />
      <Models3d />
      <DelAcosta />
      {/* <DelAcosta /> */}
      <Blog />
      <ServicesComponent />
      <FooterComponent />
    </>
  )
}

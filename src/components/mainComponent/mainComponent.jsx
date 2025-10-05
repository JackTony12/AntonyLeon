import React from "react"
import { lazy, Suspense } from "react"
import "../../styles/mainStyles.css"
import "../../styles/generalQueries.css"
//componentes
import Header from "../headerComponentFolder/header"
import CvBackComponent from "../cvComponentFolder/Cv_backComponent"
import FooterComponent from "../footerComponentFolder/footerComponent"
import ServicesComponent from "../ServicesComponentFolder/servicesComponent"
import Models3d from "../3dmodelsFolder/models"
import Tools from "../toolsFolder/tools"
import DelAcosta from "../delAcosta/delAcostaComponent"
import ProyectsNew from "../newProyects/proyectsNew"
import Blog from "../../components/blogCodigo/blog"
import Pricing from "../../components/pricingFolder/Pricing"
const Visualizer = lazy(() => import("../musicVisualizer/visualizer"))
export function MainComponent() {
  
  return (
    <>
      <Header />
      <CvBackComponent />
      <ProyectsNew />
      <Suspense fallback={<div>Loading visualizer...</div>}>
        <Visualizer />
      </Suspense>
      <Models3d />
      <DelAcosta />
      <Blog />
      <ServicesComponent />
      <Pricing />
      <Tools/>
      <FooterComponent />
    </>
  )
}

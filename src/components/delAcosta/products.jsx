import suace from "../../assets/images/delacostabottle.png"
import peppers from "../../assets/images/habaneros.webp"
import carolina from "../../assets/images/carolinareaper.webp"
const Products = () => {
  return [
    {
      name: "FUEGO",

      desc: "Salsa de chile habanero extra picante solo para verdaderos amantes del dolor. ¿Te atreves a probarla?",
      subTitle: "Ingredientes",
      subInfo:
        "Chile habanero, agua, sal yodada, vinagre, especias, benzoato de sodio, azucar, cebolla y ajo.",
      price: "40",
      spicy: "50,000-70,000 SHU",

      dollar: "1.56",
      img: suace,
    },
    {
      name: "Chiles habaneros",
      desc: "Chiles habaneros de alta calidad producidos y cosechados en La Paz, Honduras.",
      subTitle: "Nutrientes",
      subInfo:
        "Vitamina A, C, y E, Capsaicina, Antioxidantes, Hierro, Fosforo, Magnesio, Potasio",
      spicy: "100,000-300,000 SHU",
      price: "42",
      dollar: "1.64",
      img: peppers,
    },
    {
      name: "CAROLINA REAPER",
      desc: "El segundo chile más picante del mundo después del Pepper X.",
      subTitle: "",
      subInfo: "",
      spicy: "1,627,000-2,200,000 SHU",
      price: "Proximamente",
      dollar: "",
      history:
        "El carolina reaper fue creado por Ed. Currie en Carolina del Sur en el 2011 y fue certificado como el chile más picante del mundo por Guinness World Records el 11 de Agosto de 2017; fue superado por Pepper X el 23 de Agosto de 2023 por el mismo Ed. Currie.",
      img: carolina,
    },
  ]
}
export default Products

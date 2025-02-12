import suace from "../../assets/images/bote2.png"
import peppers from "../../assets/images/tazon2.png"
import carolina from "../../assets/images/carolinaReaper.png"
const Products = () => {
  return [
    {
      name: "Salsa picante",

      desc: "Salsa de chile habanero extra picante solo para verdaderos amantes del dolor, ¿Te atreves a probarla?",
      subTitle: "Ingredientes",
      subInfo:
        "Chile habanero, agua, sal yodada, vinagre, especias, benzoato de sodio, azucar, cebolla y ajo.",
      price: "40",
      spicy: "70,000-100,000 SHU",

      dollar: "1.56",
      img: suace,
    },
    {
      name: "Chiles habaneros",
      desc: "Chiles habaneros de alta calidad producidos y cosechados en La Paz Honduras.",
      subTitle: "Nutrientes",
      subInfo:
        "Vitamina A, C, y E, Capsaicina, Antioxidantes, Hierro, Fosforo, Magnesio, Potasio",
      spicy: "250,000-300,000 SHU",
      price: "42",
      dollar: "1.64",
      img: peppers,
    },
    {
      name: "CAROLINA REAPER",
      desc: "El segundo chile mas picante del mundo despues del Pepper X",
      subTitle: "",
      subInfo: "",
      spicy: "1,627,000-2,200,000 SHU",
      price: "Proximamente",
      dollar: "",
      img: carolina,
    },
  ]
}
export default Products

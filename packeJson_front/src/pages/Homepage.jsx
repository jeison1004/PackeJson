import Header from "../components/Header"
import Carrusel from "./homepage_utl/Carrusel"
import CarruselProductos from "./homepage_utl/CarruselProductos"

const Homepage = () => {
  return (
    <> 
    <Header/>
    <Carrusel/>
    <div className="p-6 text-left">
      <h2 className="font-bold text-4xl py-5 text-center">Productos Destacados</h2>
    </div>
    <CarruselProductos/>
    <div className="p-6 text-left">
      <h2 className="font-bold text-4xl">Streetwear</h2>
      <p className="text-gray-600 text-lg">Nuestros Artículos más vendidos</p>
    </div>
    <CarruselProductos/>
    <div className="p-6 text-left">
      <h2 className="font-bold text-4xl">Skoll o Hati</h2>
      <p className="text-gray-600 text-lg">Eres Skoll o Hati</p>
    </div>
    </>
  )
}

export default Homepage

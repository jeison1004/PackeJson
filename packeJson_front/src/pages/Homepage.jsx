import Header from "../components/Header"
import CarruselProductos from "./homepage_utl/CarruselProductos"

const Homepage = () => {
  return (
    <> 
    <Header/>
    <div className="bg-green-100 pt-50 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Moda que <span className="font-extrabold">Define tu Estilo</span>
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Descubre nuestra colección exclusiva de ropa de alta calidad para<br />
            hombres y mujeres
          </p>
          <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-md font-semibold">
            Explorar Catálogo
          </button>
        </div>
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

import { useEffect, useState } from "react";
import Header from "../components/Header"
import Card from "daisyui/components/card";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopRatedProducts = async () => {
      try {
        const response = await fetch('http://localhost:3002/mayorrating');
        
        if (!response.ok) {
          throw new Error('No se pudo obtener la respuesta de la red');
        }

        const data = await response.json();
        console.log(data)
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedProducts();
  }, []); // El array vacío asegura que se ejecute solo una vez

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-medium text-gray-700">Cargando productos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-medium text-red-500">Error: {error}</div>
      </div>
    );
  }

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

     <div className="container mx-auto p-8">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.product_id} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">${product.price}</span>
                  <span className="bg-yellow-400 text-white text-sm font-bold px-3 py-1 rounded-full">
                    ⭐ {product.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No hay productos con una calificación de 4 o más.</div>
        )}
      </div>
    

    </>
  )
}

export default Homepage

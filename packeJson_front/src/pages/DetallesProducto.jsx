
import Header from '../components/Header';

const DetallesProducto = () => {
  return (
    <> 
    <Header/>
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-8">
  <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden w-full max-w-6xl">
    
    {/* Sección de la Imagen del Producto */}
    <div className="w-full lg:w-1/2 p-6 flex justify-center items-center bg-white">
      <img
        src="https://via.placeholder.com/600x600?text=Camisa+Blanca"
        alt="Camisa Blanca Clásica"
        className="object-cover rounded-lg"
      />
    </div>

    {/* Sección de la Información del Producto */}
    <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Camisa Blanca Clásica</h1>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {/* Estrellas de Calificación */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            <svg className="w-5 h-5 fill-current text-gray-300" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
          </div>
          <span className="text-gray-600 ml-2">(23 reseñas)</span>
        </div>
        
        <p className="text-3xl font-bold text-green-700 mb-6">$45.99</p>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Descripción</h3>
          <p className="text-gray-600 text-sm">
            Camisa clásica de algodón 100% de alta calidad. Perfecta para ocasiones formales e informales. Corte regular que se adapta cómodamente.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Talla</h3>
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">S</button>
            <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">M</button>
            <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">L</button>
            <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">XL</button>
            <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">XXL</button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mb-8">
          <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-700 font-medium">
            Agregar al Carrito
          </button>
          <button className="p-3 border border-gray-300 rounded-md text-gray-500 hover:text-red-500 hover:border-red-500 transition-colors">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </button>
        </div>

        {/* Sección de Reseñas */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Reseñas de Clientes</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <span className="bg-gray-200 text-gray-600 font-bold w-8 h-8 flex items-center justify-center rounded-full mr-2">MR</span>
              <span className="font-medium text-gray-800">Maria Rodríguez</span>
            </div>
            <div className="flex text-yellow-400 mb-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            </div>
            <p className="text-gray-600 text-sm">
              Excelente calidad, la tela es muy suave y el corte perfecto. Muy recomendada.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
</>
  );
};

export default DetallesProducto;
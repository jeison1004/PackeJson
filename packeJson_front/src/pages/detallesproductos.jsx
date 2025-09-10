import React from 'react';
import Header from '../components/Header';

const ProductView = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* El componente Header se insertará aquí */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto mt-8 flex flex-col gap-8 px-4 md:flex-row">
        {/* Sidebar de Filtros */}
        <aside className="w-full md:w-1/4">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-bold">Filtros</h3>
            <div className="mb-6">
              <h4 className="mb-2 font-semibold">Categoría</h4>
              <select className="w-full rounded-md border border-gray-300 bg-white p-2">
                <option>Todos</option>
              </select>
            </div>
            <div className="mb-6">
              <h4 className="mb-2 font-semibold">Talla</h4>
              <div className="flex flex-wrap gap-2">
                <button className="rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-green-500 hover:text-white transition-colors duration-200">S</button>
                <button className="rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-green-500 hover:text-white transition-colors duration-200">M</button>
                <button className="rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-green-500 hover:text-white transition-colors duration-200">L</button>
                <button className="rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-green-500 hover:text-white transition-colors duration-200">XL</button>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="mb-2 font-semibold">Precio</h4>
              <div className="flex gap-4">
                <input type="text" placeholder="Min" className="w-1/2 rounded-md border border-gray-300 p-2" />
                <input type="text" placeholder="Max" className="w-1/2 rounded-md border border-gray-300 p-2" />
              </div>
            </div>
          </div>
        </aside>

        {/* Lista de Productos */}
        <section className="flex-grow">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Ropa para Hombres</h2>
            <p className="text-sm text-gray-500">7 productos encontrados</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {/* Producto 1 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/400x400" alt="Camisa Blanca Clásica" className="h-64 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Camisa Blanca Clásica</h4>
                <div className="flex items-center text-sm text-gray-600 mt-1 mb-2">
                  <span className="text-yellow-400">★★★★☆</span>
                  <span className="ml-2">(23)</span>
                </div>
                <p className="text-xl font-bold text-green-700 mb-4">$45.99</p>
                <button className="w-full rounded-md bg-green-700 py-2 font-semibold text-white transition-colors duration-200 hover:bg-green-800">
                  Agregar
                </button>
              </div>
            </div>
            {/* Producto 2 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/400x400" alt="Jeans Azul Oscuro" className="h-64 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Jeans Azul Oscuro</h4>
                <div className="flex items-center text-sm text-gray-600 mt-1 mb-2">
                  <span className="text-yellow-400">★★★★☆</span>
                  <span className="ml-2">(46)</span>
                </div>
                <p className="text-xl font-bold text-green-700 mb-4">$79.99</p>
                <button className="w-full rounded-md bg-green-700 py-2 font-semibold text-white transition-colors duration-200 hover:bg-green-800">
                  Agregar
                </button>
              </div>
            </div>
            {/* Producto 3 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/400x400" alt="Chaqueta de Cuero" className="h-64 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Chaqueta de Cuero</h4>
                <div className="flex items-center text-sm text-gray-600 mt-1 mb-2">
                  <span className="text-yellow-400">★★★★☆</span>
                  <span className="ml-2">(18)</span>
                </div>
                <p className="text-xl font-bold text-green-700 mb-4">$199.99</p>
                <button className="w-full rounded-md bg-green-700 py-2 font-semibold text-white transition-colors duration-200 hover:bg-green-800">
                  Agregar
                </button>
              </div>
            </div>
            {/* Otros Productos */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/400x400" alt="Polo Negro" className="h-64 w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/400x400" alt="Pantalón Chino" className="h-64 w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/400x400" alt="Suéter Gris" className="h-64 w-full object-cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductView;
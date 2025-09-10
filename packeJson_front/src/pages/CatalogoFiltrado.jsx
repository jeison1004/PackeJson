import React, { useState } from 'react';
import Header from '../components/Header';
import Card from './homepage_utl/Card';

// Sub-componente para las secciones de tipo acordeón
const CatalogoFiltrado = () => {

  return (
    <>  
    <Header/>
    <div className="flex flex-col lg:flex-row justify-center p-8 mt-13 bg-gray-100 min-h-screen">
  
  {/* Sección de Filtros */}
  <div className="w-full lg:w-1/4 p-6 bg-white rounded-lg shadow-md mb-6 lg:mb-0">
    <div className="flex items-center mb-6 text-gray-700">
      <svg
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M5 4a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V4zM5 8a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V8zM5 12a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2z"
        />
      </svg>
      <span className="font-semibold text-lg">Filtros</span>
    </div>
    
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">Ordenar por</label>
      <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
        <option>Más recientes</option>
        <option>Precio: Menor a mayor</option>
        <option>Precio: Mayor a menor</option>
      </select>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">Categoría</label>
      <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
        <option>Todas</option>
        <option>Suéteres</option>
        <option>Polos</option>
        <option>Pantalones</option>
      </select>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">Color</label>
      <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
        <option>Todos los colores</option>
        <option>Negro</option>
        <option>Blanco</option>
        <option>Gris</option>
        <option>Beige</option>
      </select>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">Talla</label>
      <div className="flex space-x-2">
        <button className="flex-1 p-2 text-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
          S
        </button>
        <button className="flex-1 p-2 text-center bg-green-500 text-white rounded-md">
          M
        </button>
        <button className="flex-1 p-2 text-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
          L
        </button>
        <button className="flex-1 p-2 text-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
          XL
        </button>
      </div>
    </div>
    
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Precio</label>
      <input type="number" placeholder="Min" className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:ring-green-500 focus:border-green-500" />
      <input type="number" placeholder="Máx" className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
    </div>
  </div>

  {/* Sección de Productos */}
  <div className="w-full lg:w-3/4 lg:ml-8">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Ropa para Hombres</h1>
      <span className="text-gray-500 text-sm">4 productos encontrados</span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
    <Card/>

    </div>
  </div>

</div>
    </>
  );
};

export default CatalogoFiltrado;
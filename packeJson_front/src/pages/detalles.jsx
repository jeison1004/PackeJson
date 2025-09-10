import React, { useState } from 'react';
import Header from '../components/Header';

// Sub-componente para las secciones de tipo acordeón
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  

    
 
    <div className="border-b border-gray-300 py-4">
    
      <button
        className="flex w-full items-center justify-between font-semibold text-gray-700 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden pt-4 text-sm text-gray-600">{children}</div>
      </div>
    </div>
  );
};

// Sub-componente para la información del producto
const ProductInfo = () => {
  const [activeColor, setActiveColor] = useState('white');
  const [activeSize, setActiveSize] = useState('S');

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h1 className="text-3xl font-bold">Nombre del producto</h1>
      <p className="mt-1 text-sm text-gray-500">280REF</p>
      <div className="my-6 border-b border-gray-300"></div>

      {/* Opciones de Color */}
      <div className="mb-6">
        <h4 className="font-semibold">Color:</h4>
        <div className="mt-2 flex gap-3">
          <button
            onClick={() => setActiveColor('white')}
            className={`h-8 w-8 rounded-full border-2 transition-colors ${activeColor === 'white' ? 'border-gray-800' : 'border-gray-300'} bg-gray-100 hover:border-gray-600`}
            aria-label="Color Blanco"
          ></button>
          <button
            onClick={() => setActiveColor('brown')}
            className={`h-8 w-8 rounded-full border-2 transition-colors ${activeColor === 'brown' ? 'border-gray-800' : 'border-gray-300'} bg-red-800 hover:border-gray-600`}
            aria-label="Color Marrón"
          ></button>
          <button
            onClick={() => setActiveColor('yellow')}
            className={`h-8 w-8 rounded-full border-2 transition-colors ${activeColor === 'yellow' ? 'border-gray-800' : 'border-gray-300'} bg-yellow-400 hover:border-gray-600`}
            aria-label="Color Amarillo"
          ></button>
          <button
            onClick={() => setActiveColor('cyan')}
            className={`h-8 w-8 rounded-full border-2 transition-colors ${activeColor === 'cyan' ? 'border-gray-800' : 'border-gray-300'} bg-cyan-400 hover:border-gray-600`}
            aria-label="Color Cian"
          ></button>
          <button
            onClick={() => setActiveColor('light-blue')}
            className={`h-8 w-8 rounded-full border-2 transition-colors ${activeColor === 'light-blue' ? 'border-gray-800' : 'border-gray-300'} bg-blue-300 hover:border-gray-600`}
            aria-label="Color Azul Claro"
          ></button>
        </div>
      </div>

      {/* Opciones de Talla */}
      <div className="mb-6">
        <h4 className="font-semibold">Size:</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {['S', 'M', 'L', '2XL', 'XL'].map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${activeSize === size ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Cantidad y Botón de Compra */}
      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
        <div className="flex w-full items-center sm:w-auto">
          <span className="mr-2 text-sm font-semibold">QTY</span>
          <input
            type="number"
            defaultValue="1"
            min="1"
            className="w-20 rounded-md border border-gray-300 p-2 text-center text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button className="w-full rounded-md bg-blue-600 py-3 text-lg font-bold text-white shadow-lg transition-colors hover:bg-blue-700">
          Comprar
        </button>
      </div>

      {/* Secciones de Acordeón */}
      <div className="mt-8 space-y-4">
        <AccordionItem title="SIZE & FIT">
          <p>La talla S se ajusta a...</p>
        </AccordionItem>
        <AccordionItem title="SHIPPING & RETURN">
          <p>Envío estándar en 3-5 días hábiles. Devoluciones gratuitas en 30 días.</p>
        </AccordionItem>
        <AccordionItem title="DETAILS & MATERIALS">
          <p>100% algodón. Hecho en Italia.</p>
        </AccordionItem>
      </div>
    </div>
  );
};

// Componente principal ProductDetails
const ProductDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 md:px-8">
        <span className="text-sm font-semibold text-gray-500">SKOLL / TOPS</span>
      </div>

      {/* Contenido Principal */}
      <main className="container mx-auto flex flex-col gap-8 px-4 md:flex-row md:px-8">
        {/* Sección de Galería */}
        <section className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
            <img 
              src="https://via.placeholder.com/600x600" 
              alt="Producto principal" 
              className="w-full object-cover" 
            />
          </div>
          <div className="mt-4 flex flex-wrap justify-start gap-4">
            <div className="h-24 w-24 rounded-lg border-2 border-gray-300 bg-gray-200"></div>
            <div className="h-24 w-24 rounded-lg border-2 border-gray-300 bg-gray-200"></div>
            <div className="h-24 w-24 rounded-lg border-2 border-gray-300 bg-gray-200"></div>
            <div className="h-24 w-24 rounded-lg border-2 border-gray-300 bg-gray-200"></div>
          </div>
        </section>

        {/* Sección de Detalles (usando el sub-componente) */}
        <section className="w-full md:w-1/2">
          <ProductInfo />
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;
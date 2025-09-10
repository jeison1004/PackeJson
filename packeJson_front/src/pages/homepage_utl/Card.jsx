const Card = () => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg  m-4 bg-gray-300">
  <img className="w-full h-50 mt-5 rounded-lg" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Camisa Blanca Clásica" />
  <div className="p-4">
    <div className="font-semibold text-lg mb-2">Camisa Blanca Clásica</div>
    <div className="flex items-center mb-2">
      <div className="flex text-yellow-400">
        {/* Estrellas completas */}
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
        {/* Media estrella vacía */}
        <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.01l6.572-.955L10 0l2.939 6.055 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
      </div>
      <span className="text-gray-600 text-sm ml-2">(23)</span>
    </div>
    <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-bold text-green-700">$45.99</span>
      <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-sm">
        Agregar
      </button>
    </div>
  </div>
</div>
  )
}

export default Card
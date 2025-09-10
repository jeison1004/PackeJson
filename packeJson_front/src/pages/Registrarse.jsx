
const Registrarse = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-1">Crear Cuenta</h2>
      <p className="text-gray-600 text-sm mb-6">Únete a la comunidad PackeJSON</p>
    </div>

    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="nombre"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Apellido"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="tu@email.com"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
        />
      </div>

      <div>
        <label htmlFor="contrasena" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          placeholder="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
        />
      </div>

      <div>
        <label htmlFor="confirmar_contrasena" className="block text-sm font-medium text-gray-700">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          id="confirmar_contrasena"
          name="confirmar_contrasena"
          placeholder="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
        />
      </div>

      <div className="flex items-center mt-4">
        <input
          id="terminos"
          name="terminos"
          type="checkbox"
          className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
        />
        <label htmlFor="terminos" className="ml-2 block text-sm text-gray-900">
          Acepto los términos y condiciones
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Crear Cuenta
      </button>
    </form>

    <div className="mt-4 text-center text-sm">
      <a href="#" className="font-medium text-green-600 hover:text-green-500">
        ¿Ya tienes cuenta? Inicia sesión
      </a>
    </div>
  </div>
</div>
  )
}

export default Registrarse

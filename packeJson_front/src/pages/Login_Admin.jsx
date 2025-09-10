
const Login_Admin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100 p-4">
  <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
    <div className="flex justify-center mb-4">
      <div className="bg-green-100 p-3 rounded-full">
        <svg
          className="w-6 h-6 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-1-3a1 1 0 100 2h4a1 1 0 100-2h-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Panel de Administración</h2>
      <p className="text-gray-500 text-sm mt-1">
        Ingresa tus credenciales para acceder al sistema
      </p>
    </div>

    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue="admin@tienda.com"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <button type="button" className="text-gray-400 hover:text-gray-600 focus:outline-none">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Iniciar Sesión
      </button>
    </form>

    <div className="text-center mt-4">
      <a href="#" className="text-sm font-medium text-green-600 hover:text-green-500">
        ¿Olvidaste tu contraseña?
      </a>
    </div>

    <div className="bg-green-100 text-green-700 text-sm p-3 rounded-md mt-6 text-center">
      <span>Demo:</span>
      <span className="font-semibold ml-1">admin@tienda.com</span>
      <span>/</span>
      <span className="font-semibold">admin123</span>
    </div>
  </div>
</div>
  )
}

export default Login_Admin

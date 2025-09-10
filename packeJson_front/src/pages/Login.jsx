const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <div className="text-center space-y-2 pt-8 pb-6 px-6">
          <h1 className="text-2xl font-semibold text-gray-900">Iniciar Sesión</h1>
          <p className="text-gray-600">Accede a tu cuenta de PackeJSON</p>
        </div>
        <div className="space-y-6 px-6 pb-8">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <button className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 px-4 rounded-md transition-colors">
            Iniciar Sesión
          </button>

          <div className="text-center space-y-2 pt-2">
            <p className="text-sm">
              <span className="text-gray-600">¿No tienes cuenta? </span>
              <a href="/registrarse" className="text-green-700 hover:text-green-800 font-medium">
                Regístrate
              </a>
            </p>
            <p>
              <a href="#" className="text-sm text-green-700 hover:text-green-800 font-medium">
                ¿Olvidaste tu contraseña?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:3002/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('¡Inicio de sesión exitoso!');
        setError('');
        console.log('Login exitoso:', data);
      } else {
        setError(data.msg || 'Credenciales inválidas');
        setSuccess('');
        console.error('Error en el login:', data.msg);
      }
    } catch (error) {
      setError('Error de conexión. Intenta de nuevo más tarde.');
      setSuccess('');
      console.error('Error de red:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <div className="text-center space-y-2 pt-8 pb-6 px-6">
          <h1 className="text-2xl font-semibold text-gray-900">Iniciar Sesión</h1>
          <p className="text-gray-600">Accede a tu cuenta de PackeJSON</p>
        </div>
        <form onSubmit={handleSubmit}  className="space-y-6 px-6 pb-8">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <button type="submit"  className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 px-4 rounded-md transition-colors">
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
        </form>
      </div>
    </div>
  )
}

export default Login
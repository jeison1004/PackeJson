import { useState } from "react";

const Registrarse = () => {
  // 1. State for form fields, now including 'user' and 'phone_number'
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    confirmar_contrasena: '',
    user: '', // Nuevo campo para el nombre de usuario
    phone_number: '', // Nuevo campo para el número de teléfono
    terminos: false,
  });

  // 2. State for UI feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // 3. Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 4. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic client-side validation
    if (formData.contrasena !== formData.confirmar_contrasena) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    if (!formData.terminos) {
      setError('Debes aceptar los términos y condiciones.');
      return;
    }

    setLoading(true);

    // Log the data being sent to the server for debugging
    console.log('Sending data to backend:', JSON.stringify({
      name: formData.nombre,
      last_name: formData.apellido,
      email: formData.correo,
      password: formData.contrasena,
      user: formData.user,
      phone_number: formData.phone_number,
      created_at: new Date().toISOString(),
    }));

    try {
      // Replace with your actual backend URL
      const response = await fetch('http://localhost:3002/users/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Sending all required data to the backend
          name: formData.nombre,
          last_name: formData.apellido,
          email: formData.correo,
          password: formData.contrasena,
          user: "user", // New field
          phone_number: formData.phone_number, // New field
          created_at: new Date().toISOString(), // Timestamp for creation
        }),
      });

      // Log the full response from the server before parsing
      console.log('Backend response:', response);
      
      const data = await response.json();

      // Log the parsed JSON data from the server
      console.log('Parsed data:', data);

      if (response.ok) {
        setSuccess('¡Cuenta creada exitosamente!');
        // Clear the form on success
        setFormData({
          nombre: '',
          apellido: '',
          correo: '',
          contrasena: '',
          confirmar_contrasena: '',
          user: '',
          phone_number: '',
          terminos: false,
        });
      } else {
        // Handle backend errors
        setError(data.message || 'Error al crear la cuenta. Por favor, inténtalo de nuevo.');
      }
    } catch (err) {
      // Log any network errors
      console.error('Network or fetch error:', err);
      setError('Error de conexión. Revisa tu red o el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-1">Crear Cuenta</h2>
          <p className="text-gray-600 text-sm mb-6">Únete a la comunidad PackeJSON</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="nombre"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
                required
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
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Apellido"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
                required
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
              value={formData.correo}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
              required
            />
          </div>

          {/* New input for 'phone_number' */}
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="123-456-7890"
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
              value={formData.contrasena}
              onChange={handleChange}
              placeholder="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
              required
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
              value={formData.confirmar_contrasena}
              onChange={handleChange}
              placeholder="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
              required
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              id="terminos"
              name="terminos"
              type="checkbox"
              checked={formData.terminos}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
              required
            />
            <label htmlFor="terminos" className="ml-2 block text-sm text-gray-900">
              Acepto los términos y condiciones
            </label>
          </div>

          {success && (
            <div className="text-sm font-medium text-green-700 p-2 rounded-md bg-green-100 border border-green-200">
              {success}
            </div>
          )}

          {error && (
            <div className="text-sm font-medium text-red-700 p-2 rounded-md bg-red-100 border border-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Creando...' : 'Crear Cuenta'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <a href="#" className="font-medium text-green-600 hover:text-green-500">
            ¿Ya tienes cuenta? Inicia sesión
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;

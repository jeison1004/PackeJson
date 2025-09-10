const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); 

// Obtener todos los usuarios (solo datos públicos, sin contraseñas)
const getAllUsuarios = async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT user_id, email, name, last_name, phone_number, created_at, rol FROM users ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    res.status(500).json({ error: 'Ocurrió un error interno al obtener los usuarios' });
  }
};

// Controlador para el login de usuario
const loginUsuarios = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Verificar si el usuario existe en la base de datos
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];

    // Si no se encuentra el usuario, devuelve un error
    if (!user) {
      return res.status(400).json({ msg: 'El correo no coincide' });
    }

    // 2. Comparar la contraseña ingresada con la contraseña hasheada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    // Si las contraseñas no coinciden, devuelve un error
    if (!isMatch) {
      return res.status(400).json({ msg: 'La contrasena no coincide' });
    }

    // 3. Si la autenticación es exitosa, crear un token JWT
    const payload = {
      user: {
        id: user.user_id, // Puedes usar 'id' o 'user_id' según tu esquema
        rol: user.rol,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET, // Secreto para firmar el token, se obtiene del .env
      { expiresIn: '1h' }, // El token expira en 1 hora
      (err, token) => {
        if (err) throw err;
        // Envía el token de vuelta al cliente
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

module.exports = {
  getAllUsuarios,
  loginUsuarios
};
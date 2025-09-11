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

// Controller para el registro del usuario

const registroUsuario = async (req, res) => {
  const { name, last_name, email, password, phone_number } = req.body;

  try {
    // 1. Verificar si el usuario ya existe en la base de datos por email
    const [existingUser] = await db.query('SELECT email FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ msg: 'El usuario con este correo ya existe' });
    }

    // 2. Hashear la contraseña antes de guardarla
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Insertar el nuevo usuario en la base de datos
    const [result] = await db.query(
      'INSERT INTO users (name, last_name, email, password, phone_number, created_at, rol) VALUES (?, ?, ?, ?, ?, NOW(), ?)',
      [name, last_name, email, hashedPassword, phone_number, 'user'] // 'user' es el rol por defecto
    );

    // 4. Devolver una respuesta exitosa
    res.status(201).json({ 
      msg: 'Usuario registrado exitosamente', 
      userId: result.insertId 
    });

  } catch (err) {
    console.error('Error al registrar usuario:', err);
    res.status(500).json({ error: 'Ocurrió un error interno al registrar el usuario' });
  }
};



module.exports = {
  getAllUsuarios,
  loginUsuarios,
  registroUsuario
};
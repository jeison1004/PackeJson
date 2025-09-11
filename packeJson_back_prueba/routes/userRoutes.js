const express = require('express');
const router = express.Router();

const { getAllUsuarios, loginUsuarios, registroUsuario } = require("../controllers/userControllers");

// Ruta de Prueba para consultar todos los usuarios
router.get('/', getAllUsuarios); 

// Ruta que valida los usurios
router.post('/login', loginUsuarios);

// Ruta para registrarse
router.post('/registro', registroUsuario);

module.exports = router;
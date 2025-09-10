const express = require('express');
const router = express.Router();

const { getAllUsuarios, loginUsuarios, registroUsuario } = require("../controllers/userControllers");

// Ruta de Prueba para consultar todos los usuarios
router.get('/', getAllUsuarios); 

// Ruta que valida los usurios
router.post('/', loginUsuarios);

// Ruta para registrarse
router.put('/', registroUsuario);

module.exports = router;
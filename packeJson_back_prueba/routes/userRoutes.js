const express = require('express');
const router = express.Router();

const { getAllUsuarios, loginUsuarios } = require("../controllers/userControllers");

// Ruta de Prueba para consultar todos los usuarios
router.get('/', getAllUsuarios); 

// Ruta que valida los usurios
router.post('/', loginUsuarios)

module.exports = router;
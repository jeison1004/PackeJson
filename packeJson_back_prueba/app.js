// Importamos los módulos necesarios
const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const mayorRatingRoutes = require("./routes/mayorRatingRoutes");

// Inicializamos la aplicación Express
const app = express();
const PORT = process.env.PORT || 3002;

// Middlewares - ¡ORDEN IMPORTANTE!
app.use(cors());

// Middleware más explícito para JSON
app.use(
  express.json({
    limit: "10mb",
    type: "application/json",
  })
);

// Middleware para URL encoded (por si acaso)
app.use(express.urlencoded({ extended: true }));


// Middleware de debug
app.use((req, res, next) => {
  // console.log('=== REQUEST DEBUG ===');
  // console.log('Method:', req.method);
  // console.log('Path:', req.path);
  // console.log('Content-Type:', req.get('content-type'));
  // console.log('Body:', req.body);
  next();
});
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Conexión Exitosa");
});

// Usamos las rutas
app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/mayorrating', mayorRatingRoutes)

// Prueba de conexión a la base de datos
db.getConnection()
  .then((conn) => {
    console.log("Conexión a MySQL exitosa!");
    conn.release();
  })
  .catch((err) => {
    console.error("Error de conexión a MySQL:", err);
  });

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo www en http://localhost:${PORT}`);
});
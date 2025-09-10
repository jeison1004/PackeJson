const db = require('../config/db');


const mayorRating = async (req, res) => {
  try {
    const query = `
      SELECT
        p.product_id,
        p.name,
        p.description,
        p.price,
        AVG(r.rating) AS average_rating
      FROM
        products p
      JOIN
        reviews r ON p.product_id = r.product_id
      GROUP BY
        p.product_id
      HAVING
        average_rating >= 4;
    `;
    const [rows] = await db.query(query);

    res.status(200).json({
      msg: 'Productos mejor calificados obtenidos exitosamente',
      products: rows
    });
  } catch (err) {
    console.error('Error al obtener productos mejor calificados:', err);
    res.status(500).json({
      error: 'Ocurrió un error interno al obtener los productos'
    });
  }
};

module.exports = {
    mayorRating
};
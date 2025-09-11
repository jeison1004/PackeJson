const db = require('../config/db');

const getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        p.product_id,
        p.name, 
        p.price, 
        p.image,
        COALESCE(AVG(r.rating), 0) as average_rating,
        COALESCE(COUNT(r.review_id), 0) as review_count
      FROM products p
      LEFT JOIN reviews r ON p.product_id = r.product_id
      GROUP BY p.product_id, p.name, p.price, p.image
      ORDER BY p.product_id
    `);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

module.exports = { getAllProducts };
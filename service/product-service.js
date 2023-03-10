import { pool } from "../config/mysql-config.js"

export async function getProducts() {
    const [rows] = await pool.query(`SELECT * FROM product`);
    return rows;
}
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const db = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB,
  ssl: true,
});

export default db;

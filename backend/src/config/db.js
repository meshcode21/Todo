import mysql from 'mysql2/promise';

const db = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  // port: process.env.DB_PORT
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0
});

db.getConnection()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection failed:', err));

export default db;
import express from 'express';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'mkim225',
  password: '8bg5f4fz',
  database: 'tftTestDatabase'
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express with ESM!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

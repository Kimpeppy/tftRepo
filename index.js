import express from 'express';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: '127.0.0.1',
  user: 'mkim225',
  password: '8bg5f4fz',
  database: 'tftTestDatabase'
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

const app = express();
const port = 3000;

// Route to verify MySQL connection
app.get('/', async (req, res) => {
  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Release the connection back to the pool
    connection.release();

    // Send a success message
    res.send('MySQL connection successful');
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    res.status(500).send('Error connecting to MySQL');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const pool = require('../config/db');

const createPassword = async (client, username, hashedPassword) => {
  const result = await client.query(
    'INSERT INTO hashpwd (username, password) VALUES ($1, $2) RETURNING *',
    [username, hashedPassword]
  );
  return result.rows[0];
};

const getPasswordByUsername = async (username) => {
  const result = await pool.query('SELECT * FROM hashpwd WHERE username = $1', [username]);
  return result.rows[0];
};

module.exports = { createPassword, getPasswordByUsername };

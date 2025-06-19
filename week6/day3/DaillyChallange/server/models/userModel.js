const pool = require('../config/db');

const createUser = async (client, user) => {
  const { email, username, first_name, last_name } = user;
  const result = await client.query(
    `INSERT INTO users (email, username, first_name, last_name)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [email, username, first_name, last_name]
  );
  return result.rows[0];
};

const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

const updateUser = async (id, data) => {
  const { email, first_name, last_name } = data;
  const result = await pool.query(
    `UPDATE users SET email=$1, first_name=$2, last_name=$3 WHERE id=$4 RETURNING *`,
    [email, first_name, last_name, id]
  );
  return result.rows[0];
};

module.exports = { createUser, getAllUsers, getUserById, updateUser };

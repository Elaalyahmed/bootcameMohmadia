const { Pool } = require('pg');

const pool = new Pool({
  user: 'client',
  host: 'localhost',
  database: 'postgres',
  password: 'your_db_password',
  port: 5432,
});

module.exports = pool;

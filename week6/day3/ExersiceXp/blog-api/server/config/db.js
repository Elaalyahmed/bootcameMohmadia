const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'posts',
  password: 'admin', // ✅ Change this
  port: 5432,
});

module.exports = pool;

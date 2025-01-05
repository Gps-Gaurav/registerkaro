import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'db name',
  password: 'enter db password',
  port: 5432,
});

const query = (text, params) => pool.query(text, params);

export { query };
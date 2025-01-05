import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'gps-rajput',
  host: 'localhost',
  database: 'registerkaro',
  password: '123456',
  port: 5432,
});

const query = (text, params) => pool.query(text, params);

export { query };
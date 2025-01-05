import { Pool, QueryResult } from 'pg';

const pool = new Pool({
  user: 'gps-rajput',
  host: 'localhost',
  database: 'registerkaro',
  password: '123456',
  port: 5432,
});

export async function query<T>(text: string, params?: any[]): Promise<QueryResult<T>> {
  return pool.query(text, params);
}
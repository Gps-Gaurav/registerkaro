// src/pages/api/companies.js
import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    // Test connection
    const testQuery = await query('SELECT NOW()');
    console.log('Database connected:', testQuery.rows[0]);

    const { id } = req.query;

    if (!id) {
      const companiesRes = await query('SELECT * FROM companies');
      return res.status(200).json(companiesRes.rows);
    }

    const companyRes = await query(
      'SELECT * FROM companies WHERE id = $1',
      [id]
    );
    
    const company = companyRes.rows[0];

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const directorsRes = await query(
      'SELECT name FROM directors WHERE company_id = $1',
      [id]
    );
    
    const directors = directorsRes.rows;

    res.status(200).json({ ...company, directors });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
}
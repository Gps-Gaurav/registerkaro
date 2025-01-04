import db from '../../lib/db';

export default async function handler(req, res) {
    const { companyId } = req.query;
    const { rows } = await db.query('SELECT * FROM directors WHERE company_id = $1', [companyId]);
    res.status(200).json(rows);
}
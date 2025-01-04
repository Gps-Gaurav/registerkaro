import db from '../../lib/db';

export default async function handler(req, res) {
    const { rows } = await db.query('SELECT * FROM companies');
    res.status(200).json(rows);
}
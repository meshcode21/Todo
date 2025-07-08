import jwt, { decode } from 'jsonwebtoken'
import db from '../config/db.js'

export const protect = async (req, res, next) => {
    let token = req.headers.authorization?.split(' ')[1]

    if (!token) return res.status(401).json({ message: 'Not authorized, no token' })

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const [rows] = await db.query(`SELECT id, name, email FROM users WHERE id = ?`, [decoded.id]);

        if (!rows.length) return res.status(401).json({ message: 'User not found' })

        req.user = rows[0] // <-- Yaha set hunchha: req.user.userID

        return next()
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: 'Invalid token' })
    }
}

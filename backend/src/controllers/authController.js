import db from "../config/db.js"
import jwt from "jsonwebtoken";

export const login = (req, res) => {
    const { email, password } = req.body;

    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    db.query(query, [email, password])
        .then(results => {

            if (results[0].length === 0) {
                return res.status(401).json({ error: "Invalid email or password" });
            }

            const user = { id: results[0][0].id, name: results[0][0].name };
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ message: "Login successful", token });
        })
        .catch(err => {
            console.error("Error querying database:", err);
            return res.status(500).json({ error: "Internal server error" });
        })
}

export const signup = (req, res) => {
    const { name, email, password } = req.body;
    console.log("i am here ", req.body)

    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(query, [name, email, password])
        .then((result) => {
            // console.log("i am here", result);
            const userId = result[0].insertId;
            const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(201).json({ message: "User created successfully", token });
        })
        .catch(err => {
            if (err.code === 'ER_DUP_ENTRY') {
                console.error("Duplicate entry error:", err.message);
                return res.status(409).json({ error: "Email already exists" });
            } else {
                console.error("Error inserting into database:", err);
                return res.status(500).json({ error: "Internal server error" });
            }
        })
}
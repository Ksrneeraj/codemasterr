const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Request Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running' });
});

// Signup Route
app.post('/api/auth/signup', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.run(sql, [name, email, hashedPassword], function (err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                return res.status(400).json({ error: 'Email already exists' });
            }
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            message: 'User registered successfully',
            user: { id: this.lastID, name, email }
        });
    });
});

// Login Route
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.get(sql, [email], (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        res.status(200).json({
            message: 'Login successful',
            user: { id: user.id, name: user.name, email: user.email }
        });
    });
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const mysql = require("mysql2");

const app = express();
const PORT = 3000;
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "preet2005***",
    database: "reShare"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to MySQL");
});

app.get('/', (req, res) => {
    res.send('Hello welcome to reShare');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

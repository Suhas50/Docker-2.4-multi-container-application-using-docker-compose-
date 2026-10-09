const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
    host: "db",
    user: "root",
    password: "rootpassword",
    database: "appdb"
});

app.get("/", (req, res) => {
    res.send("Backend API is running");
});

app.get("/api", (req, res) => {
    res.json({
        message: "Hello from Backend API",
        database: "MySQL"
    });
});

app.get("/db", (req, res) => {
    db.connect((err) => {
        if (err) {
            return res.status(500).send("Database connection failed: " + err.message);
        }

        res.send("Backend successfully connected to MySQL database");
    });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Backend running on port 3000");
});

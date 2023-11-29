//imports
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");


//middleware
app.use(cors());
app.use(express.json());


//routes

//route to add a user
app.post("/adduser", async(req, res) => {
    try {
        
        const { user } = req.body;
        const newUser = await pool.query(
            "INSERT INTO tablename (name, email, password) VALUES($1, $2, $3) RETURNING *", 
            [user.name, user.email, user.password]
        );
        res.json(newUser.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
})
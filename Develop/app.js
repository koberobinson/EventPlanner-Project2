const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

console.log(__dirname);

app.set('view engine', 'hbs');

db.connect((error) =>{
    if(error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
})

app.get("/", (req, res) => {
    //res.send("<h1>Home Page</h1>")
    res.render("index");
});

app.get("/register", (req, res) => {
    //res.send("<h1>Home Page</h1>")
    res.render("register");
});

app.listen(3001, () =>{
    console.log("Server started on Port 3001");
})
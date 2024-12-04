var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var multer = require("multer");

var app = express();
app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";


// MySQL
const mysql = require("mysql2");
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root"
    ,
    password: "password"
    ,
    database: "secoms3190"
    ,
});


// Server
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads")); // Serve images statically



app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
    });
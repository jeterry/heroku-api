const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));
let port = process.env.PORT || 3000;

const {Pool} = require('pg');
const pool = new Pool ({
   connectionString: process.env.DATABASE_URL,
   ssl: true
});

app.get("/", (req, res) => {
    res.send('index')
})

app.listen(port, () => {
    console.log(`Example app is listening on http//:localhost:${port}`)
})
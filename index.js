const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));

const {Pool} = require('pg');
const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

app.get('/', function(req, res){
    res.render('index', {title: 'Express'});
});

app.get('/db', async(req, res) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM numtracker');
        const results = {'results': (result) ? result.rows : null}
        res.send(JSON.stringify(results))
        client.release();
    }
    catch (err){
        console.error(err);
        res.send('Error' + err)
    }
})
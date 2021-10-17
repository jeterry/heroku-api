const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));
let port = process.env.PORT;
const db = require('./queries')

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get('/sum', db.getSum)
app.post('/sum', db.updateSum)
app.put('/sum', db.getSum)

app.listen(port, () => {
    console.log(`Example app is listening on http//:localhost:${port}`)
})
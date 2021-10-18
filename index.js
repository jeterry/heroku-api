const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));
let port = process.env.PORT || 3000;
const db = require('./queries')

app.get('/sum', db.getSum)
app.post('/sum', db.updateSum)
 

app.listen(port, () => {
    console.log(`Example app is listening on http//:localhost:${port}`)
})
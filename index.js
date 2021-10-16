const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));
let port = process.env.PORT || 3000;
const importData = require("./data.json")

app.post('/sum', (req, res) => {
    console.log('Got body:', req.body);
    res.send(req.body);
});

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/sum", (req, res) => {
    res.send(importData)
})

app.listen(port, () => {
    console.log(`Example app is listening on http//:localhost:${port}`)
})
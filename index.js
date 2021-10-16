const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));
let port = process.env.PORT || 3000;
const importData = require("./data.json")
var number = "0"

app.post('/sum', (req, res) => {
    number = req.body.number
    res.sendStatus(200)
});

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/sum", (req, res) => {
    res.send(number)
})


app.listen(port, () => {
    console.log(`Example app is listening on http//:localhost:${port}`)
})
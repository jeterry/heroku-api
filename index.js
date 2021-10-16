const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));
let port = process.env.PORT || 3000;
const importData = require("./data.json")
const number = 0

app.post('/sum', (req, res) => {
    const number = req.body.number
    console.log(number)
    res.send({
        'number': number
    });
});

app.get("/", (req, res) => {
    res.send("hello world")
})



app.listen(port, () => {
    console.log(`Example app is listening on http//:localhost:${port}`)
})
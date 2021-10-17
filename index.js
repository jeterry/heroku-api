const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`Example app is listening on http//:localhost:${port}`)
})
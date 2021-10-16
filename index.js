const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const importData = require("./data.json")

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/sum", (req, res) => {
    res.send(importData)
})

app.listen(port, () => {
    console.log(`Example app is listening on http//:localhost:${port}`)
})
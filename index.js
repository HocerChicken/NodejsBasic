const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    let a = 5;
    let b = 6;
    let c = a+ b;
    return res.send("Hello World");
});

app.listen(port, () => {
    console.log("Hello World");
});

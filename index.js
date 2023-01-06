const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<div><h1>Server is Running</h1></div>");
});

var port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is Running on " + port);
});
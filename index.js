const express = require("express");
const { calSqrt } = require("./sqrt");
const { climbStairs } = require("./climbingStairs");
const { deleteDuplicates } = require("./deleteDuplicates");
const { merge } = require("./mergeArray");

const app = express();

app.get("/", (req, res) => {
    res.send("<div><h1>Server is Running</h1></div>");
});

var port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is Running on " + port);
    var nums1 = [1, 2, 3, 0, 0, 0];
    var nums2 = [2, 5, 6];
    merge(nums1, nums2, 3, 3);
});
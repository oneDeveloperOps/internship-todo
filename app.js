const express = require('express');

const app = express();

app.use("/", (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.listen(3000, () => {
    console.log("Application running on port 3000")
})
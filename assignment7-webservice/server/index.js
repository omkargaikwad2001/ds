const express = require("express");
const app = express()
const response = [
    {
        name: "Vivek",
        email: "vivek@gmail.com"
    },
    {
        name: "Piyusha",
        email: "piyusha@gmail.com"
    },
    {
        name: "Rutvika",
        email: "rutvika@gmail.com"
    },
];
app.get("/users", (req, res) => {
    res.json(response);
})


app.listen(5000, () => {
    console.log("listening on port 5000");
})
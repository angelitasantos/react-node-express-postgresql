require('dotenv').config();
const express = require("express");
const app = express();

// get home principal
app.get("/", (req, res) => {
    //res.send("Home Principal");
    res.status(200).json({
        status: "success Home Principal"
    });
    console.log("Home Principal");
});

// get painel
app.get("/painel", (req, res) => {
    //res.send("Painel");
    res.status(200).json({
        status: "success Painel"
    });
    console.log("Painel");
});

// get all empresas
app.get("/getEmpresas", (req, res) => {
    res.send("These are all companies.");
    console.log("These are all companies.");
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});
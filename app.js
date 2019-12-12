const express = require("express");
const app = express();

app.use((req, res, next)=>{
    console.log("Application Middleware");
    next();
})

app.use(require("./routes"));

module.exports = app;
const express = require("express");
const indexRouter = require("./routes");
const morgan = require("morgan");
const cors = require("cors");


const app = express(); 

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log("eso es solo una prueba para ver si funciona este middleware");
    next();
})

app.use(indexRouter);

module.exports = app;
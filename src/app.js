"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

// Conecta ao banco de dados
mongoose.connect('mongodb+srv://guicezafe:gui130104@node-str.9zxdpru.mongodb.net/?retryWrites=true&w=majority')

// Carrega os models
const Product = require('./models/product')

// Carrega as rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;


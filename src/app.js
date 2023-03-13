"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

// Conecta ao banco de dados
mongoose.connect('Your MongoDB URL')

// Carrega os models
const Product = require('./models/product')
const Customer = require('./models/customer')
const Order = require('./models/order')

// Carrega as rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");
const customerRoute = require("./routes/customer-route");
const orderRoute = require("./routes/order-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/customers", customerRoute);
app.use("/orders", orderRoute);

module.exports = app;


"use strict";
console.log("E-fish-catch-card Server is Running");

// REQUIRE
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const axios = require("axios");

// Database

// Modules

const addCatchCard = require("./modules/addCatchCard");
const getAllCatchCards = require("./modules/getAllCatchCards");
// ROUTES
app.get("/", (request, response) => {
  response.send("Welcome to the E-fish-catch-card server!");
});

// firestone Endpoints
app.post("/catchCard", addCatchCard);
app.get("/catchcard", getAllCatchCards);

// Errors
app.get("*", (request, response) => {
  response.send("This page does not exist");
});

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

const PORT = process.env.PORT || 3002; // something is wrong if on 3002
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

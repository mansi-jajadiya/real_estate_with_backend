const express = require("express");
const cardRoutes = express.Router();

const { getAllCards, getCardById } = require("../controller/cards.controller");

const { verifyToken } = require("../helpers/verifyToken");

cardRoutes.get("/getall", verifyToken, getAllCards);

cardRoutes.get("/get/:id", verifyToken, getCardById);

module.exports = cardRoutes;

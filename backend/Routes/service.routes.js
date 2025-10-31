const express = require("express");
const serviceRoutes = express.Router();

const {
  getAllServices,
} = require("../controller/services.controller");

const { verifyToken } = require("../helpers/verifyToken");

serviceRoutes.get("/getall", verifyToken, getAllServices);

module.exports = serviceRoutes;

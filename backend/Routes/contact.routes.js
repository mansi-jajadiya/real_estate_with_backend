const express = require("express");
const {
  addContact,
  getAllContacts,
  deleteContact,
} = require("../controller/contact.controller");
const { verifyToken } = require("../helpers/verifyToken");

const contactRoutes = express.Router();

contactRoutes.post("/add", addContact);

contactRoutes.get("/getall", verifyToken, getAllContacts);

contactRoutes.delete("/delete/:id", verifyToken, deleteContact);

module.exports = contactRoutes;
